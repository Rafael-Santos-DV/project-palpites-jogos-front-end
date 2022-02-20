import { MdOutlinePeopleAlt } from "react-icons/md";
import { BoxName, BoxTimesInput, ContainerCadastro } from "./style";
import flamengo from "../../assets/flamengo.png";
import galo from "../../assets/galo.png";


export const BoxCadastro = () => {
    return(
        <ContainerCadastro>
            <form onSubmit={(e) => e.preventDefault()}>
                <BoxName>
                    <MdOutlinePeopleAlt className="icon" />
                    <input type="text" name="nome" placeholder="informe seu nome" />
                </BoxName>

                <div>
                    <BoxTimesInput>
                        <img src={flamengo} alt="logo do time do Flamengo" />
                        <input type="text" name="golsfla" />
                    </BoxTimesInput>
                    <span>x</span>
                    <BoxTimesInput>
                        <img src={galo} alt="logo do time do Galo" />
                        <input type="text" name="golsfla" />
                    </BoxTimesInput>
                </div>
                <input type="submit" value="palpitar" />
            </form>
        </ContainerCadastro>
    );
}