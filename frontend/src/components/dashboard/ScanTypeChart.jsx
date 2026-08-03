import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ScanTypeChart({ reports = [] }) {
  const counts = {
    Message: 0,
    URL: 0,
    Image: 0,
    Voice: 0,
  };

  reports.forEach((report) => {
    const type = report.type;

    if (type === "Message") counts.Message++;
    else if (type === "URL") counts.URL++;
    else if (type === "Image") counts.Image++;
    else if (type === "Voice") counts.Voice++;
  });

  const data = [
    {
      type: "Message",
      scans: counts.Message,
    },
    {
      type: "URL",
      scans: counts.URL,
    },
    {
      type: "Image",
      scans: counts.Image,
    },
    {
      type: "Voice",
      scans: counts.Voice,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Scan Types
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="type" />

          <YAxis allowDecimals={false} />

          <Tooltip />

          <Bar
            dataKey="scans"
            fill="#06b6d4"
            radius={[6, 6, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ScanTypeChart;