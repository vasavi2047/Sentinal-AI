import { getReports } from "./storage";

export const getDashboardStats = () => {
  const reports = getReports();

  const totalScans = reports.length;

  const threats = reports.filter(
    (report) =>
      report.risk_level === "High" ||
      report.risk_level === "Very High"
  ).length;

  const safe = totalScans - threats;

  return {
    totalScans,
    threats,
    safe,
  };
};