import { Link } from "react-router-dom";
import { BoxNavigation, ContainerHeader, OpUl } from "./style";

export const HeaderMenu = () => {
    return(
        <ContainerHeader>
            <h1>Palpites</h1>
            <BoxNavigation>
                <OpUl>
                    <Link to="/"><li>Palpites</li></Link>
                    <Link to="/"><li>Fazer Palpites</li></Link>
                    <Link to="/"><li>Ganhadores</li></Link>
                </OpUl>
            </BoxNavigation>
        </ContainerHeader>
    );
}