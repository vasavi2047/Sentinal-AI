export const getSettings = () => {
  return (
    JSON.parse(localStorage.getItem("settings")) || {
      darkMode: false,
      autoSave: true,
      notifications: true,
    }
  );
};

export const saveSettings = (settings) => {
  localStorage.setItem(
    "settings",
    JSON.stringify(settings)
  );
};