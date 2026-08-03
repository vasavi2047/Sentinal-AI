import { saveAs } from "file-saver";

export const exportReportsCSV = (reports) => {
  if (!reports || reports.length === 0) return;

  const headers = [
    "Type",
    "Risk Score",
    "Risk Level",
    "Category",
    "Date",
  ];

  const rows = reports.map((report) => [
    report.type,
    report.risk_score,
    report.risk_level,
    report.category,
    report.date,
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  saveAs(blob, "SentinelAI_Reports.csv");
};