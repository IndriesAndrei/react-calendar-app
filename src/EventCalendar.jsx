import { eachDayOfInterval, endOfMonth, format, getDay, isToday, startOfMonth } from "date-fns";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function EventCalendar() {
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);

  return (
    <div className="container mx-auto p-4">
        <div className="mb-4">
            <h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {WEEKDAYS.map((day) => {
            return <div key={day} className="font-bold text-center">{day}</div>
          })}
          {Array.from({length: startingDayIndex}).map((_, index) => {
            return <div key={`empty-${index}`} className="border rounded-md p-2 text-center" />
          })}
          {daysInMonth.map((day, index) => {
            return <div key={index} className={isToday(day) ? "bg-gray-400 text-center p-2" : "border rounded-md p-2 text-center"}>{format(day, "d")}</div>
          })}
        </div>
    </div>
  )
}
