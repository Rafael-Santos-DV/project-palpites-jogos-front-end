import React, { useEffect, useState } from "react";
import { BoxPaltipes } from "../../components/box-palpites";
import axios from "axios";


export const Home = () => {
    const [getPalpites, setPalpites] = useState();
    const url = "http://localhost:3001/get-palpites";

    useEffect(() => { 

        async function fechData() {
            const Data = await axios.get(url);
            setPalpites(Data.data);
        }
        fechData();

    }, []);
   
    return(
        <React.Fragment>
            {getPalpites && getPalpites.map((values, index) => (
                <BoxPaltipes
                    key={index}
                    name={values.userName}
                    id={String(values._id).slice(0, 3) + "..."}
                    data={new Date(values.dataHours).toLocaleDateString()}
                    timeOne={values.timeOneGols}
                    timeTwo={values.timeTwoGols}
                />
                ))
            }
            
        </React.Fragment>
    );
}