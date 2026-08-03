import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ScanTrendChart({ reports = [] }) {

  const weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];


  const counts = {
    Sun: 0,
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
  };


  reports.forEach((report) => {

    if (!report.date) return;

    const date = new Date(report.date);

    if (!isNaN(date)) {
      counts[weekDays[date.getDay()]]++;
    }

  });


  const data = weekDays.map((day) => ({
    day,
    scans: counts[day],
  }));


  return (

    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Weekly Scan Trend
      </h2>


      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>


          <CartesianGrid 
            strokeDasharray="3 3"
            stroke="var(--chart-grid)"
          />


          <XAxis 
            dataKey="day"
            stroke="var(--chart-text)"
          />


          <YAxis
            allowDecimals={false}
            stroke="var(--chart-text)"
          />


          <Tooltip />


          <Line
            type="monotone"
            dataKey="scans"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />


        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}


export default ScanTrendChart;