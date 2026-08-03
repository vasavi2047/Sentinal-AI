import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportReportsPDF = (reports) => {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(18);
  doc.text("Sentinel AI Scan Report", 14, 20);

  // Table
  autoTable(doc, {
    startY: 30,
    head: [["Type", "Risk Level", "Category", "Date"]],
    body: reports.map((report) => [
      report.type,
      report.risk_level,
      report.category,
      report.date,
    ]),
  });

  // Download PDF
  doc.save("SentinelAI_Report.pdf");
};