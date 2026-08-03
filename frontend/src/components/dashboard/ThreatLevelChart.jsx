import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function ThreatLevelChart({ reports = [] }) {
  const counts = {
    Safe: 0,
    Low: 0,
    Medium: 0,
    High: 0,
    Critical: 0,
  };

  reports.forEach((report) => {
    const level = report.risk_level || report.riskLevel || "Safe";

    if (level === "Safe") counts.Safe++;
    else if (level === "Low") counts.Low++;
    else if (level === "Medium") counts.Medium++;
    else if (level === "High") counts.High++;
    else if (
      level === "Critical" ||
      level === "Very High"
    )
      counts.Critical++;
  });

  const data = [
    {
      name: "Safe",
      value: counts.Safe,
    },
    {
      name: "Low",
      value: counts.Low,
    },
    {
      name: "Medium",
      value: counts.Medium,
    },
    {
      name: "High",
      value: counts.High,
    },
    {
      name: "Critical",
      value: counts.Critical,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#3b82f6",
    "#facc15",
    "#fb923c",
    "#ef4444",
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Threat Level Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={data}
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

export default ThreatLevelChart;