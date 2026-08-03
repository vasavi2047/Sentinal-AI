import { useEffect, useState } from "react";

import Layout from "../../components/layout/Layout";

import StatCard from "../../components/dashboard/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";

import ScanTrendChart from "../../components/dashboard/ScanTrendChart";
import ScanTypeChart from "../../components/dashboard/ScanTypeChart";

import ThreatChart from "../../components/dashboard/ThreatChart";
import ThreatLevelChart from "../../components/dashboard/ThreatLevelChart";

import WeeklySummary from "../../components/dashboard/WeeklySummary";
import RecentActivity from "../../components/dashboard/RecentActivity";

import { getReports } from "../../utils/storage";

function Dashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const data = getReports() || [];
    setReports(data);
  }, []);

  const totalScans = reports.length;

  const threatsFound = reports.filter((report) => {
    const level = report.risk_level || report.riskLevel || "";
    return (
      level === "High" ||
      level === "Critical" ||
      level === "Medium"
    );
  }).length;

  const safeScans = reports.filter((report) => {
    const level = report.risk_level || report.riskLevel || "";
    return level === "Safe" || level === "Low";
  }).length;

  return (
    <Layout>

      <div className="space-y-8">

        <h1 className="text-3xl font-bold">
          Sentinel AI Dashboard
        </h1>

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <StatCard
            title="Total Scans"
            value={totalScans}
            color="text-blue-600"
          />

          <StatCard
            title="Threats Found"
            value={threatsFound}
            color="text-red-600"
          />

          <StatCard
            title="Safe Scans"
            value={safeScans}
            color="text-green-600"
          />

          <StatCard
            title="AI Status"
            value="Online"
            color="text-cyan-600"
          />

        </div>

        {/* Quick Actions */}

        <QuickActions />

        {/* Charts */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <ScanTrendChart reports={reports} />

          <ScanTypeChart reports={reports} />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <ThreatChart reports={reports} />

          <ThreatLevelChart reports={reports} />

        </div>

        {/* Weekly Summary */}

        <WeeklySummary reports={reports} />

        {/* Recent Activity */}

        <RecentActivity reports={reports} />

      </div>

    </Layout>
  );
}

export default Dashboard;