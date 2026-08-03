import { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useTheme } from "../../context/ThemeContext";
import {
  getSettings,
  saveSettings,
} from "../../utils/settings";
import { toast } from "react-toastify";

function Settings() {
  const { darkMode, setDarkMode } = useTheme();

  const [settings, setSettings] = useState({
    darkMode: false,
    autoSave: true,
    notifications: true,
  });

  useEffect(() => {
    const saved = getSettings();

    setSettings(saved);

    if (saved.darkMode !== darkMode) {
      setDarkMode(saved.darkMode);
    }
  }, []);

  const handleToggle = (key) => {
    const updated = {
      ...settings,
      [key]: !settings[key],
    };

    setSettings(updated);
    saveSettings(updated);

    toast.success("Settings Updated!");
  };

  const handleDarkMode = () => {
    const updated = {
      ...settings,
      darkMode: !darkMode,
    };

    setDarkMode(!darkMode);

    setSettings(updated);

    saveSettings(updated);

    toast.success("Theme Updated!");
  };

  const handleClearCache = () => {
    if (window.confirm("Clear all cached reports?")) {
      localStorage.removeItem("reports");
      toast.success("Cache cleared successfully!");
    }
  };

  return (
    <Layout>
      <div className="p-6">

        <h1 className="text-3xl font-bold mb-8">
          Settings
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6">

          {/* Dark Mode */}

          <div className="flex justify-between items-center py-4 border-b">

            <div>

              <h2 className="font-semibold">
                Dark Mode
              </h2>

              <p className="text-gray-500 text-sm">
                Enable dark appearance.
              </p>

            </div>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkMode}
            />

          </div>

          {/* Auto Save */}

          <div className="flex justify-between items-center py-4 border-b">

            <div>

              <h2 className="font-semibold">
                Auto Save Reports
              </h2>

              <p className="text-gray-500 text-sm">
                Automatically save scan reports.
              </p>

            </div>

            <input
              type="checkbox"
              checked={settings.autoSave}
              onChange={() => handleToggle("autoSave")}
            />

          </div>

          {/* Notifications */}

          <div className="flex justify-between items-center py-4 border-b">

            <div>

              <h2 className="font-semibold">
                Notifications
              </h2>

              <p className="text-gray-500 text-sm">
                Show scan notifications.
              </p>

            </div>

            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => handleToggle("notifications")}
            />

          </div>

          {/* Clear Cache */}

          <div className="py-6">

            <button
              onClick={handleClearCache}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
            >
              Clear Cached Reports
            </button>

          </div>

          {/* About */}

          <div className="border-t pt-6">

            <h2 className="text-xl font-semibold mb-2">
              About Sentinel AI
            </h2>

            <p className="text-gray-600">
              Sentinel AI is an AI-powered cyber threat detection
              platform capable of scanning Messages, URLs, Images,
              and Voice recordings to identify phishing, scams,
              malware, and other online threats.
            </p>

            <div className="mt-4 text-gray-500">
              <p>Version: 1.0.0</p>
              <p>Developed using React + FastAPI</p>
            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Settings;