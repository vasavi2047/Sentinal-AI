function ScanResultCard({ result }) {

  if (!result) return null;


  const riskColor =
    result.riskLevel === "Critical" ||
    result.riskLevel === "High"
      ? "bg-red-500"
      : result.riskLevel === "Medium"
      ? "bg-yellow-500"
      : "bg-green-500";


  return (

    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">


      <h2 className="text-2xl font-bold mb-6">
        Scan Result
      </h2>



      <div className="mb-6">

        <div className="flex justify-between mb-2">

          <span className="font-semibold">
            Risk Score
          </span>

          <span>
            {result.score}%
          </span>

        </div>


        <div className="w-full bg-gray-200 rounded-full h-4">

          <div
            className={`${riskColor} h-4 rounded-full`}
            style={{
              width:`${result.score}%`
            }}
          ></div>

        </div>

      </div>



      <div className="grid grid-cols-2 gap-6">


        <div>

          <h3 className="font-semibold">
            Risk Level
          </h3>

          <span
            className={`${riskColor} text-white px-3 py-1 rounded-full`}
          >
            {result.riskLevel}
          </span>

        </div>



        <div>

          <h3 className="font-semibold">
            Category
          </h3>

          <p>
            {result.category}
          </p>

        </div>


      </div>



      {result.extracted_text && (

        <div className="mt-6">

          <h3 className="font-semibold mb-2">
            Extracted Text
          </h3>


          <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">

            {result.extracted_text}

          </pre>

        </div>

      )}



      {result.transcript && (

        <div className="mt-6">

          <h3 className="font-semibold mb-2">
            Transcript
          </h3>


          <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">

            {result.transcript}

          </pre>

        </div>

      )}



      <div className="mt-6">

        <h3 className="font-semibold mb-2">
          Explanation
        </h3>

        <p>
          {result.explanation}
        </p>

      </div>



      <div className="mt-6">

        <h3 className="font-semibold mb-2">
          Recommendation
        </h3>

        <p>
          {result.recommendation}
        </p>

      </div>


    </div>

  );
}


export default ScanResultCard;