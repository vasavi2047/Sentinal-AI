import { getReports } from "./storage";

export const getDashboardStats = () => {
  const reports = getReports();

  const totalScans = reports.length;

  const highRisk = reports.filter(
    (r) =>
      r.risk_level?.toLowerCase() === "high" ||
      r.risk_level?.toLowerCase() === "very high"
  ).length;

  const mediumRisk = reports.filter(
    (r) => r.risk_level?.toLowerCase() === "medium"
  ).length;

  const lowRisk = reports.filter(
    (r) =>
      r.risk_level?.toLowerCase() === "low" ||
      r.risk_level?.toLowerCase() === "safe"
  ).length;

  return {
    totalScans,
    highRisk,
    mediumRisk,
    lowRisk,
  };
};