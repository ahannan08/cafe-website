"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type ReserveModalProps = {
  open: boolean;
  onClose: () => void;
};

const TIME_SLOTS = [
  "7:00 AM",
  "8:30 AM",
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
  "5:30 PM",
  "7:00 PM",
  "8:30 PM",
];

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function toDateKey(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function formatDisplayDate(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function GuestPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="rounded-[20px] border border-espresso/8 bg-gradient-to-br from-sand to-[#f6efe6] p-4">
      <p className="mb-3 text-[11px] font-medium tracking-[0.14em] text-mocha uppercase">
        How many seats?
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Fewer guests"
          disabled={value <= 1}
          onClick={() => onChange(Math.max(1, value - 1))}
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-espresso/20 bg-white text-xl text-espresso transition-colors hover:border-caramel disabled:cursor-not-allowed disabled:opacity-35"
        >
          −
        </button>
        <div className="flex min-w-0 flex-1 flex-col items-center">
          <div className="flex items-end gap-1">
            <span className="font-[family-name:var(--font-anton)] text-[52px] leading-none text-espresso">
              {value}
            </span>
            <span className="mb-2 text-xs tracking-wide text-mocha uppercase">
              guests
            </span>
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-1.5">
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                aria-label={`${n} guests`}
                onClick={() => onChange(n)}
                className={cn(
                  "relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 transition-all duration-200",
                  n === value
                    ? "scale-110 border-espresso bg-espresso text-cream shadow-md"
                    : n < value
                      ? "border-caramel/50 bg-caramel/25 text-espresso"
                      : "border-espresso/10 bg-white/80 text-espresso/45 hover:border-caramel/40",
                )}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current stroke-[1.8]"
                  aria-hidden
                >
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" strokeLinecap="round" />
                </svg>
                {n === value && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-caramel text-[9px] font-bold text-ink">
                    {n}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          aria-label="More guests"
          disabled={value >= 8}
          onClick={() => onChange(Math.min(8, value + 1))}
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-espresso/20 bg-white text-xl text-espresso transition-colors hover:border-caramel disabled:cursor-not-allowed disabled:opacity-35"
        >
          +
        </button>
      </div>
    </div>
  );
}

function ReservationCalendar({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: {
  selectedDate: string;
  selectedTime: string;
  onSelectDate: (key: string) => void;
  onSelectTime: (time: string) => void;
}) {
  const today = startOfDay(new Date());
  const [viewMonth, setViewMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  );

  useEffect(() => {
    if (selectedDate) {
      const [y, m] = selectedDate.split("-").map(Number);
      setViewMonth(new Date(y, m - 1, 1));
    }
  }, [selectedDate]);

  const calendarDays = useMemo(() => {
    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const first = new Date(year, month, 1);
    const startPad = first.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: { key: string; day: number; disabled: boolean }[] = [];

    for (let i = 0; i < startPad; i++) {
      cells.push({ key: `pad-${i}`, day: 0, disabled: true });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      cells.push({
        key: toDateKey(date),
        day: d,
        disabled: date < today,
      });
    }
    return cells;
  }, [viewMonth, today]);

  const monthLabel = viewMonth.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  function prevMonth() {
    setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1));
  }

  function nextMonth() {
    setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1));
  }

  return (
    <div className="overflow-hidden rounded-[20px] border border-espresso/10 bg-white">
      <div className="flex items-center justify-between border-b border-espresso/8 px-4 py-3">
        <button
          type="button"
          onClick={prevMonth}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-espresso hover:bg-sand"
          aria-label="Previous month"
        >
          ←
        </button>
        <p className="font-[family-name:var(--font-anton)] text-sm tracking-wide uppercase">
          {monthLabel}
        </p>
        <button
          type="button"
          onClick={nextMonth}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-espresso hover:bg-sand"
          aria-label="Next month"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 px-3 pt-3 pb-2">
        {WEEKDAYS.map((w) => (
          <div
            key={w}
            className="py-1 text-center text-[10px] font-medium tracking-wider text-mocha uppercase"
          >
            {w}
          </div>
        ))}
        {calendarDays.map((cell) =>
          cell.day === 0 ? (
            <div key={cell.key} />
          ) : (
            <button
              key={cell.key}
              type="button"
              disabled={cell.disabled}
              onClick={() => {
                onSelectDate(cell.key);
                onSelectTime("");
              }}
              className={cn(
                "aspect-square cursor-pointer rounded-xl text-sm font-medium transition-colors",
                cell.disabled &&
                  "cursor-not-allowed text-espresso/20 line-through",
                !cell.disabled &&
                  selectedDate !== cell.key &&
                  "text-espresso hover:bg-sand",
                selectedDate === cell.key &&
                  "bg-espresso text-cream shadow-inner",
              )}
            >
              {cell.day}
            </button>
          ),
        )}
      </div>

      <div
        className={cn(
          "border-t border-espresso/8 bg-[#faf8f5] px-4 py-4 transition-opacity",
          !selectedDate && "pointer-events-none opacity-40",
        )}
      >
        <p className="mb-3 text-[11px] font-medium tracking-[0.12em] text-mocha uppercase">
          {selectedDate
            ? `Pick a time · ${formatDisplayDate(selectedDate).split(",")[0]}`
            : "Select a date first"}
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              disabled={!selectedDate}
              onClick={() => onSelectTime(slot)}
              className={cn(
                "cursor-pointer rounded-full border px-2 py-2.5 text-xs font-medium transition-all sm:text-[13px]",
                selectedTime === slot
                  ? "border-espresso bg-espresso text-cream"
                  : "border-espresso/12 bg-white text-espresso hover:border-caramel hover:bg-caramel/10",
              )}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ReserveModal({ open, onClose }: ReserveModalProps) {
  const [saved, setSaved] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setSaved(false);
      setDate("");
      setTime("");
      setGuests(2);
    }
  }, [open]);

  if (!open) return null;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!date || !time) return;
    const booking = {
      date,
      dateLabel: formatDisplayDate(date),
      time,
      guests,
      savedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem("brewbean-reservation", JSON.stringify(booking));
    } catch {
      /* ignore */
    }
    setSaved(true);
  }

  const canSubmit = Boolean(date && time);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal
      aria-labelledby="reserve-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-pointer bg-ink/55 backdrop-blur-[2px]"
        aria-label="Close reservation dialog"
        onClick={onClose}
      />
      <div className="relative max-h-[92vh] w-full overflow-y-auto rounded-t-[28px] border border-espresso/10 bg-cream p-5 shadow-[0_32px_80px_-24px_rgba(26,17,12,0.55)] sm:max-w-[480px] sm:rounded-[28px] sm:p-7">
        <button
          type="button"
          className="absolute top-4 right-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-espresso/15 text-lg text-espresso hover:bg-sand"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {saved ? (
          <div className="pt-2 text-center">
            <p
              id="reserve-title"
              className="font-[family-name:var(--font-anton)] text-2xl tracking-wide uppercase"
            >
              Table reserved
            </p>
            <p className="mt-3 text-sm text-mocha">
              {formatDisplayDate(date)} · {time}
            </p>
            <p className="mt-1 text-sm text-mocha">
              {guests} guest{guests === 1 ? "" : "s"}
            </p>
            <p className="mt-2 text-xs text-mocha/80">
              Saved on this device. See you at Brew&amp;Bean!
            </p>
            <button
              type="button"
              className="mt-6 cursor-pointer rounded-full bg-espresso px-6 py-3 text-sm font-medium text-cream"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <p
              id="reserve-title"
              className="pr-10 font-[family-name:var(--font-anton)] text-2xl tracking-wide uppercase"
            >
              Reserve a table
            </p>
            <p className="mt-1 text-sm text-mocha">
              Choose a day on the calendar, then tap a time slot.
            </p>
            <form onSubmit={onSubmit} className="mt-5 space-y-4">
              <ReservationCalendar
                selectedDate={date}
                selectedTime={time}
                onSelectDate={setDate}
                onSelectTime={setTime}
              />
              <GuestPicker value={guests} onChange={setGuests} />
              <button
                type="submit"
                disabled={!canSubmit}
                className={cn(
                  "w-full cursor-pointer rounded-full py-3.5 text-sm font-medium transition-all",
                  canSubmit
                    ? "bg-caramel text-ink hover:-translate-y-0.5"
                    : "cursor-not-allowed bg-espresso/15 text-espresso/40",
                )}
              >
                Save reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
