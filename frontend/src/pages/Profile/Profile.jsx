import Layout from "../../components/layout/Layout";
import { useAuth } from "../../context/AuthContext";
import { getReports } from "../../utils/storage";

function Profile() {
  const { user } = useAuth();

  const reports = getReports() || [];

  const totalScans = reports.length;

  const threatsDetected = reports.filter((report) => {
    const level = report.risk_level || report.riskLevel || "";
    return level !== "Safe";
  }).length;

  const messageScans = reports.filter(
    (report) => report.type === "Message"
  ).length;

  const urlScans = reports.filter(
    (report) => report.type === "URL"
  ).length;

  const imageScans = reports.filter(
    (report) => report.type === "Image"
  ).length;

  const voiceScans = reports.filter(
    (report) => report.type === "Voice"
  ).length;

  return (
    <Layout>

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          My Profile
        </h1>

        {/* Profile Card */}

        <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center gap-8">

          <div className="w-28 h-28 rounded-full bg-cyan-600 text-white text-5xl font-bold flex items-center justify-center">

            {user?.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              {user?.name || "User"}
            </h2>

            <p className="text-gray-600 mt-2">
              {user?.email}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Sentinel AI User
            </p>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">
              Total Scans
            </h3>

            <p className="text-4xl font-bold mt-2">
              {totalScans}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">
              Threats Detected
            </h3>

            <p className="text-4xl font-bold text-red-600 mt-2">
              {threatsDetected}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">
              Reports Generated
            </h3>

            <p className="text-4xl font-bold text-cyan-600 mt-2">
              {reports.length}
            </p>
          </div>

        </div>

        {/* Scan Breakdown */}

        <div className="bg-white rounded-xl shadow p-8 mt-10">

          <h2 className="text-2xl font-bold mb-6">
            Scan Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="flex justify-between border-b pb-3">
              <span>Message Scans</span>
              <strong>{messageScans}</strong>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>URL Scans</span>
              <strong>{urlScans}</strong>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Image Scans</span>
              <strong>{imageScans}</strong>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Voice Scans</span>
              <strong>{voiceScans}</strong>
            </div>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Profile;