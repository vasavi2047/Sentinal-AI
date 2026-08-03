class RiskAgent:


    def aggregate(self, results:list):


        if not results:

            return {

                "score":0,

                "riskLevel":"Safe",

                "confidence":100,

                "summary":"No analysis available.",

                "threats":[],

                "recommendation":"No action required."

            }


        scores = [

            r.get("risk_score",0)

            for r in results

        ]



        average = sum(scores)/len(scores)



        if average >= 80:

            level="Critical"

        elif average >=60:

            level="High"

        elif average >=40:

            level="Medium"

        else:

            level="Low"

        first = results[0]

        return {


            "score":round(average),


            "riskLevel":level,


            "confidence":95,


            "category":
            first.get(
                "category",
                "Unknown"
            ),



            "explanation":
            first.get(
                "explanation",
                ""
            ),



            "recommendation":
            first.get(
                "recommendation",
                ""
            ),



            "threats":[

                first.get(
                    "category",
                    "Unknown"
                )

            ]


        }