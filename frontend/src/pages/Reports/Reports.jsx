// src/pages/reports/Reports.jsx

import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import {
  getReports,
  deleteReport,
  clearReports,
} from "../../utils/storage";
import { exportReportsPDF } from "../../utils/exportPDF";
import { exportReportsCSV } from "../../utils/exportExcel";
import { toast } from "react-toastify";
import "./Reports.css";

function Reports() {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");

  const [riskFilter, setRiskFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = () => {
    setReports(getReports());
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this report?")) {
      deleteReport(id);
      loadReports();
      toast.success("Report deleted successfully!");
    }
  };

  const handleClear = () => {
    if (reports.length === 0) {
      toast.info("No reports available.");
      return;
    }

    if (window.confirm("Delete all reports?")) {
      clearReports();
      setReports([]);
      toast.success("All reports deleted.");
    }
  };

  const handleExportPDF = () => {
    if (reports.length === 0) {
      toast.warning("No reports to export.");
      return;
    }

    exportReportsPDF(reports);
    toast.success("PDF downloaded successfully!");
  };

  const handleExportCSV = () => {
    if (reports.length === 0) {
      toast.warning("No reports to export.");
      return;
    }

    exportReportsCSV(reports);
    toast.success("CSV downloaded successfully!");
  };

  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.type
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesRisk =
      riskFilter === "All" ||
      report.risk_level === riskFilter;

    const matchesType =
      typeFilter === "All" ||
      report.type === typeFilter;

    return matchesSearch && matchesRisk && matchesType;
  });

  return (
    <Layout>
      <div className="reports-container">

        <div className="reports-header">

          <h1>Security Reports</h1>

          <div className="report-actions">

            <button
              className="export-btn"
              onClick={handleExportPDF}
            >
              Export PDF
            </button>

            <button
              className="export-btn"
              onClick={handleExportCSV}
            >
              Export CSV
            </button>

            <button
              className="clear-btn"
              onClick={handleClear}
            >
              Clear All
            </button>

          </div>

        </div>

        <input
          className="search-box"
          type="text"
          placeholder="Search by Scan Type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "25px",
            flexWrap: "wrap",
          }}
        >
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="search-box"
            style={{ maxWidth: "220px" }}
          >
            <option>All</option>
            <option>Safe</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Very High</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="search-box"
            style={{ maxWidth: "220px" }}
          >
            <option>All</option>
            <option>Message</option>
            <option>URL</option>
            <option>Image</option>
            <option>Voice</option>
          </select>
        </div>

        {filteredReports.length === 0 ? (
          <div className="no-report">
            <h2>No Reports Found</h2>
            <p>Analyze something to generate reports.</p>
          </div>
        ) : (
          <div className="reports-grid">

            {filteredReports.map((report) => (

              <div
                key={report.id}
                className="report-card"
              >

                <div className="card-header">

                  <h2>{report.type}</h2>

                  <span
                    className={`risk ${
                      report.risk_level === "Safe"
                        ? "low"
                        : report.risk_level === "Low"
                        ? "low"
                        : report.risk_level === "Medium"
                        ? "medium"
                        : "high"
                    }`}
                  >
                    {report.risk_level}
                  </span>

                </div>

                <p>
                  <strong>Category:</strong>{" "}
                  {report.category}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {report.date}
                </p>

                <br />

                <strong>
                  Risk Score: {report.risk_score}%
                </strong>

                <div className="score-bar">
                  <div
                    className="score-fill"
                    style={{
                      width: `${report.risk_score}%`,
                    }}
                  ></div>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(report.id)}
                >
                  Delete
                </button>

              </div>

            ))}

          </div>
        )}

      </div>
    </Layout>
  );
}

export default Reports;