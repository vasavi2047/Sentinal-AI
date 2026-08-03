import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function ThreatChart({ reports = [] }) {
  const safe = reports.filter((report) => {
    const level = report.risk_level || report.riskLevel || "";
    return level === "Safe" || level === "Low";
  }).length;

  const threats = reports.filter((report) => {
    const level = report.risk_level || report.riskLevel || "";
    return level === "Medium" ||
           level === "High" ||
           level === "Critical";
  }).length;

  const data = [
    {
      name: "Safe",
      value: safe,
    },
    {
      name: "Threats",
      value: threats,
    },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Threat Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ThreatChart;