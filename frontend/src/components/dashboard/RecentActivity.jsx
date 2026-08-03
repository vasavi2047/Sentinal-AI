function RecentActivity({ reports = [] }) {

  const recentReports = [...reports]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);


  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Recent Activity
      </h2>


      <table className="w-full text-gray-700">

        <thead>

          <tr className="border-b">

            <th className="pb-2 text-left">
              Type
            </th>

            <th className="pb-2 text-left">
              Risk Level
            </th>

            <th className="pb-2 text-left">
              Date
            </th>

          </tr>

        </thead>


        <tbody>

          {recentReports.length === 0 ? (

            <tr>

              <td
                colSpan="3"
                className="py-6 text-center text-gray-500"
              >
                No Recent Activity
              </td>

            </tr>

          ) : (

            recentReports.map((report) => (

              <tr
                key={report.id}
                className="border-b"
              >

                <td className="py-3">
                  {report.type}
                </td>


                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      
                      (report.risk_level || report.riskLevel) === "Safe"
                      ? "bg-green-500"

                      : (report.risk_level || report.riskLevel) === "Low"
                      ? "bg-blue-500"

                      : (report.risk_level || report.riskLevel) === "Medium"
                      ? "bg-yellow-500"

                      : (report.risk_level || report.riskLevel) === "High"
                      ? "bg-orange-500"

                      : "bg-red-600"

                    }`}
                  >

                    {report.risk_level || report.riskLevel}

                  </span>

                </td>


                <td>
                  {report.date || "-"}
                </td>


              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default RecentActivity;