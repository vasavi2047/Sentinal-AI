// src/pages/scan/Scan.jsx

import { useState } from "react";
import Layout from "../../components/layout/Layout";
import { toast } from "react-toastify";

import "./Scan.css";


function Scan(){


const [message,setMessage]=useState("");

const [result,setResult]=useState(null);

const [loading,setLoading]=useState(false);



const handleScan=async()=>{


if(!message){

toast.warning(
"Enter a message to scan"
);

return;

}



try{


setLoading(true);



const response =
await fetch(
"http://127.0.0.1:8000/scan/message",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

message:message

})

}

);



const data =
await response.json();



setResult(data);



toast.success(
"Scan completed"
);



}

catch(error){


console.log(error);


toast.error(
"Scan failed"
);


}

finally{


setLoading(false);


}



};




return(

<Layout>


<div className="scan-container">


<h1>
AI Security Scanner
</h1>


<textarea

placeholder="Paste suspicious message here..."

value={message}

onChange={
(e)=>setMessage(e.target.value)
}

/>



<button

onClick={handleScan}

>

{

loading ?

"Scanning..."

:

"Analyze Message"

}


</button>





{
result &&

<div className="result-card">


<h2>
Scan Result
</h2>


<p>

<strong>
Risk Score:
</strong>

{" "}

{result.score}%

</p>



<p>

<strong>
Risk Level:
</strong>

{" "}

{result.riskLevel}

</p>




<p>

<strong>
Category:
</strong>

{" "}

{result.category}

</p>




<p>

<strong>
Recommendation:
</strong>

{" "}

{result.recommendation}

</p>



</div>

}



</div>


</Layout>

);


}


export default Scan;