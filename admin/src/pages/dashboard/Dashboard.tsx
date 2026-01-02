import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import CalendarIcon from "../../components/icons/CalendarIcon";

const Dashboard = () => {
  const { user } = useAuth();
  const [formattedDate, setFormattedDate] = useState("Select date");

  const handleDateChange = (value: string) => {
    if (!value) return;

    const date = new Date(value);

    const formatted = date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    const week = getWeekNumber(date);

    setFormattedDate(`${formatted} · Week ${week}`);
  };

  function getWeekNumber(date: Date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(
      (((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-medium text-blue-500">
            Welcome, {user?.name}! Here's what's happening today.
          </p>
        </div>

        {/* Date picker */}
       <div className="relative inline-block">
  {/* Native date input (click target) */}
  <input
    type="date"
    className="
      absolute inset-0
      w-full h-full
      opacity-0
      z-10
      cursor-pointer
    "
    onChange={(e) => handleDateChange(e.target.value)}
  />

  {/* Visual pill (display only) */}
  <div
    className="
      flex items-center gap-2
      px-4 py-2
      rounded-lg
      bg-white
      shadow-sm
      border border-gray-200
      text-sm text-gray-700
      pointer-events-none
    "
  >
    <CalendarIcon />
    <span>{formattedDate}</span>
  </div>
</div>

        </div>
      </div>
  );
};

export default Dashboard;
