import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderMenu } from "../components/header";
import { FazerPalpites } from "../pages/FazerPalpites";
import { Ganhadores } from "../pages/ganhadores";
import { Home } from "../pages/home";
import { GlobalStyle } from "../style/globalStyles";
import { Box, Container } from "../style/styles";


function App(){
    return(
        <BrowserRouter>
            <Container className="container-main">
                <GlobalStyle />
                <Box>
                    <HeaderMenu />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/fazerpalpites" element={<FazerPalpites />} />
                        <Route path="/ganhadores" element={<Ganhadores />} />
                    </Routes>
                </Box>
            </Container>
        </BrowserRouter>
    );
}
export default App;