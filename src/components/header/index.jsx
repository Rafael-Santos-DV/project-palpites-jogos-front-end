import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BoxNavigation, ContainerHeader, OpUl } from "./style";

export const HeaderMenu = () => {
    const [param, setParam] = useState("link-router1");

    useEffect(() => {
        const path = window.location.pathname;
        
        if (path === "/") {
            setParam("link-router1");

        }else if(path === "/fazerpalpites"){
            setParam("link-router2");

        }else if(path === "/ganhadores"){
            setParam("link-router3");
        }

    }, []);

    const handleClick = (classN) => {
        setParam(classN);
    }

    return(
        <ContainerHeader>
            <h1>Palpites</h1>
            <BoxNavigation>
                <OpUl nameClass={param}>

                    <Link 
                        to="/" 
                        className="link-router1" 
                        onClick={() => handleClick("link-router1")}
                    >
                            <li>Palpites</li>
                    </Link>

                    <Link 
                        to="/fazerpalpites" 
                        className="link-router2" 
                        onClick={() => handleClick("link-router2")}
                        >
                        <li>Fazer Palpites</li>
                    </Link>

                    <Link 
                        to="/ganhadores" 
                        className="link-router3" 
                        onClick={() => handleClick("link-router3")}
                        >
                            <li>Ganhadores</li>
                    </Link>

                </OpUl>
            </BoxNavigation>
        </ContainerHeader>
    );
}