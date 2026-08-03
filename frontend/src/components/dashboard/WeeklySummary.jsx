function WeeklySummary({ reports = [] }) {

  const totalScans = reports.length;

  const threatsDetected = reports.filter((report) => {
    const level = report.risk_level || report.riskLevel || "";

    return (
      level === "Medium" ||
      level === "High" ||
      level === "Critical"
    );
  }).length;


  const safeResults = reports.filter((report) => {
    const level = report.risk_level || report.riskLevel || "";

    return (
      level === "Safe" ||
      level === "Low"
    );
  }).length;


  let highestRisk = "Safe";


  reports.forEach((report) => {

    const level = report.risk_level || report.riskLevel || "";


    if (level === "Critical") {
      highestRisk = "Critical";
    }

    else if (
      level === "High" &&
      highestRisk !== "Critical"
    ) {
      highestRisk = "High";
    }

    else if (
      level === "Medium" &&
      highestRisk !== "Critical" &&
      highestRisk !== "High"
    ) {
      highestRisk = "Medium";
    }

    else if (
      level === "Low" &&
      highestRisk === "Safe"
    ) {
      highestRisk = "Low";
    }

  });


  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Weekly Summary
      </h2>


      <div className="space-y-3 text-gray-700">


        <div className="flex justify-between">
          <span>Total Scans</span>

          <strong>
            {totalScans}
          </strong>
        </div>



        <div className="flex justify-between">

          <span>
            Threats Detected
          </span>

          <strong className="text-red-600">
            {threatsDetected}
          </strong>

        </div>



        <div className="flex justify-between">

          <span>
            Safe Results
          </span>

          <strong className="text-green-600">
            {safeResults}
          </strong>

        </div>



        <div className="flex justify-between">

          <span>
            Highest Risk
          </span>

          <strong className="text-orange-600">
            {highestRisk}
          </strong>

        </div>


      </div>

    </div>
  );
}

export default WeeklySummary;