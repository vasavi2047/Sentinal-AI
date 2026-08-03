import { useState } from "react";
import Layout from "../../components/layout/Layout";

import { scanMessage } from "../../services/scanService";
import { saveReport } from "../../utils/storage";

import ScanResultCard from "../../components/common/ScanResultCard";
import LoadingSpinner from "../../components/common/LoadingSpinner";

import { toast } from "react-toastify";


function MessageScan() {


  const [message, setMessage] = useState("");

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);




  const handleScan = async () => {


    if (!message.trim()) {

      toast.warning(
        "Please enter a message."
      );

      return;

    }



    try {


      setLoading(true);



      const response = await scanMessage(message);



      setResult(response);




      // Save scan result for Reports page

      saveReport({

        id: Date.now(),

        type: "Message",

        username: "Message Scan",

        date: new Date().toLocaleString(),

        ...response,

      });




      toast.success(
        "Message scanned successfully!"
      );



    } catch (error) {


      console.error(error);


      toast.error(
        "Error scanning message."
      );


    } finally {


      setLoading(false);


    }


  };





  return (


    <Layout>


      <div className="p-6">



        <h1 className="text-3xl font-bold mb-6">

          Message Scan

        </h1>





        <div className="bg-white rounded-xl shadow-md p-6">



          <textarea

            rows="6"

            value={message}

            onChange={
              (e)=>setMessage(e.target.value)
            }

            placeholder="Paste a suspicious message here..."

            className="
            w-full
            border
            rounded-lg
            p-4
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-500
            "

          />


          <button


            onClick={handleScan}


            disabled={loading}


            className="
            mt-4
            bg-cyan-600
            hover:bg-cyan-700
            disabled:bg-gray-400
            text-white
            px-6
            py-3
            rounded-lg
            transition
            "


          >

            {

              loading

              ?

              "Scanning..."

              :

              "Scan Message"

            }


          </button>

          {
            loading && <LoadingSpinner />
          }



        </div>


        {
          result && (

            <div className="mt-6">

              <ScanResultCard
                result={result}
              />

            </div>


          )
        }

      </div>

    </Layout>


  );


}
export default MessageScan;