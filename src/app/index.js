import { BrowserRouter } from "react-router-dom";
import { BoxCadastro } from "../components/box-cadastro";
import { HeaderMenu } from "../components/header";
import { GlobalStyle } from "../style/globalStyles";
import { Box, Container } from "../style/styles";

function App(){
    return(
        <BrowserRouter>
            <Container className="container-main">
                <GlobalStyle />
                <Box>
                    <HeaderMenu />
                    <BoxCadastro />
                    <BoxCadastro />
                    <BoxCadastro />
                    <BoxCadastro />
                    <BoxCadastro />
                    <BoxCadastro />
                </Box>
            </Container>
        </BrowserRouter>
    );
}
export default App;