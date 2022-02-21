import { MdOutlinePeopleAlt } from "react-icons/md";
import { BoxName, BoxTimesInput, ContainerCadastro } from "./style";
import flamengo from "../../assets/flamengo.png";
import galo from "../../assets/galo.png";
import axios from "axios";
import { useState } from "react";


export const BoxCadastro = () => {
    const [getPalpite, setPalpite] = useState();
    const [colors, setColors] = useState({ time1: "green", time2: "green" });
    const [statusEnv, SetstatusEnv] = useState();

    const handleAddValue = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        if (name === "golsfla") {
            isNaN(Number(value)) && setColors(prevState => ({ ...prevState, time1: "red"}));
            !isNaN(Number(value)) && setColors(prevState => ({ ...prevState, time1: "green"}));

            
        }else if (name === "golsgalo") {
            isNaN(Number(value)) && setColors(prevState => ({ ...prevState, time2: "red"}));
            !isNaN(Number(value)) && setColors(prevState => ({ ...prevState, time2: "green"}));
        }

        setPalpite(prevState => (
            { ...prevState, [name]: value }
        ))
    }

    const handleSubmit = () => {
        async function addPalpite() {
            axios.post("https://palpites-futebol.herokuapp.com/add-palpites", {
                userName: getPalpite.nome,
                timeOneGols: getPalpite.golsTimeOne,
                timeTwoGols: getPalpite.golsTimeTwo,
                dataHours: new Date(),
            })
        }
        if (getPalpite && getPalpite.golsTimeOne && !isNaN(Number(getPalpite.golsTimeOne)) &&
        getPalpite.golsTimeTwo && !isNaN(Number(getPalpite.golsTimeTwo)) &&
        getPalpite.nome && String(getPalpite.nome)){
            if (!localStorage.getItem("palpite")) {

                localStorage.setItem("palpite", true);

                addPalpite().then(() => {
                    SetstatusEnv(true)
                }).catch(() => SetstatusEnv(false));

            }else {
                SetstatusEnv("ativo");
            }
           
        }
       
    }

    return(
        <ContainerCadastro>
            <form onSubmit={(e) => e.preventDefault()}>
                <BoxName>
                    <MdOutlinePeopleAlt className="icon" />

                    <input 
                        type="text" 
                        name="nome" 
                        placeholder="Informe seu nome" 
                        onChange={handleAddValue}
                        
                    />

                </BoxName>

                <div>
                    <BoxTimesInput>
                        <img src={flamengo} alt="logo do time do Flamengo" />

                        <input 
                            type="text" 
                            name="golsTimeOne"
                            onChange={handleAddValue}
                            style={{color: colors.time1}}
                        />

                    </BoxTimesInput>

                    <span>x</span>

                    <BoxTimesInput>
                        <img src={galo} alt="logo do time do Galo" />

                        <input 
                            type="text" 
                            name="golsTimeTwo" 
                            onChange={handleAddValue}
                            style={{color: colors.time2}}
                        />

                    </BoxTimesInput>

                </div>
                <input type="submit" value="palpitar" onClick={handleSubmit} />
                {statusEnv === true && 
                <span style={{color: "green"}}>Enviado com sucesso!</span>
                }
                {statusEnv === false && 
                <span style={{color: "red"}}>Falha ao enviar!</span>
                }
                {statusEnv === "ativo" && 
                <span style={{color: "#ffffff"}}>Você já fez o seu palpite!</span>
                }
            </form>
        </ContainerCadastro>
    );
}