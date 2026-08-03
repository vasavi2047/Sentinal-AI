import { useState } from "react";
import Layout from "../../components/layout/Layout";
import { scanVoice } from "../../services/api";
import { saveReport } from "../../utils/storage";
import ScanResultCard from "../../components/common/ScanResultCard";
import { toast } from "react-toastify";

function VoiceScan() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    if (!file) {
      toast.warning("Please select an audio file.");
      return;
    }

    try {
      setLoading(true);

      const response = await scanVoice(file);

      setResult(response);

      saveReport({
        id: Date.now(),
        type: "Voice",
        ...response,
      });

      toast.success("Voice scanned successfully!");

    } catch (error) {
      console.error(error);
      toast.error("Error scanning voice.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Voice Scan
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6">

          <input
            type="file"
            accept=".mp3,.wav,.m4a"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full border rounded-lg p-3"
          />

          <button
            onClick={handleScan}
            disabled={loading}
            className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition disabled:bg-gray-400"
          >
            {loading ? "Scanning..." : "Scan Voice"}
          </button>

        </div>

        {result && (
          <>
            <ScanResultCard result={result} />

            <div className="mt-6 bg-white rounded-xl shadow-md p-6">

              <h2 className="text-xl font-bold mb-4">
                Transcript
              </h2>

              <pre className="whitespace-pre-wrap">
                {result.transcript}
              </pre>

            </div>
          </>
        )}

      </div>
    </Layout>
  );
}

export default VoiceScan;