import { useState } from "react";
import Layout from "../../components/layout/Layout";
import { scanURL } from "../../services/api";
import { saveReport } from "../../utils/storage";
import ScanResultCard from "../../components/common/ScanResultCard";

function URLScan() {
  const [url, setURL] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    if (!url.trim()) {
      alert("Please enter a URL.");
      return;
    }

    try {
      setLoading(true);

      const response = await scanURL(url);

      setResult(response);

      saveReport({
        type: "URL",
        ...response,
      });

    } catch (error) {
      console.error(error);
      alert("Error scanning URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          URL Scan
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6">

          <textarea
            rows="5"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            placeholder="Enter a suspicious URL..."
            className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button
            onClick={handleScan}
            disabled={loading}
            className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition disabled:bg-gray-400"
          >
            {loading ? "Scanning..." : "Scan URL"}
          </button>

        </div>

        {/* Professional Scan Result */}

        {result && (
          <ScanResultCard result={result} />
        )}

      </div>
    </Layout>
  );
}

export default URLScan;