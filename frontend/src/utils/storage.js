export const saveReport = (report) => {
  const reports = JSON.parse(localStorage.getItem("reports")) || [];

  reports.unshift({
    ...report,
    date: new Date().toLocaleString(),
  });

  localStorage.setItem("reports", JSON.stringify(reports));
};

export const getReports = () => {
  return JSON.parse(localStorage.getItem("reports")) || [];
};

export const deleteReport = (id) => {
  const reports = getReports().filter(
    (report) => report.id !== id
  );

  localStorage.setItem("reports", JSON.stringify(reports));
};

export const clearReports = () => {
  localStorage.removeItem("reports");
};