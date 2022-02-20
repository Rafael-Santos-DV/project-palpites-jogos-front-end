import flamengo from "../../assets/flamengo.png";
import galo from "../../assets/galo.png";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BoxData, BoxOne, BoxRowOne, BoxTimes, ContainerRow } from "./style";

export const BoxPaltipes = (props) => {
    return(
        <BoxTimes page={props.page} status={props.status} >
            <BoxRowOne>
                <MdOutlinePeopleAlt className="icon"/>
                <strong>Rafael Santos</strong>
            </BoxRowOne>
            <BoxData>
                <span>ID: {22}</span>
                <div>
                    <span>Data: </span>
                    <time>01/11/2022</time>
                </div>
            </BoxData>
            <ContainerRow>
                <BoxOne>
                    <img src={flamengo} alt="logo do time do Flamengo" />
                    <span>2</span>
                </BoxOne>
                <span>x</span>
                <BoxOne>
                    <img src={galo} alt="logo do time do Galo" />
                    <span>0</span>
                </BoxOne>
            </ContainerRow>
        </BoxTimes>
    );
}