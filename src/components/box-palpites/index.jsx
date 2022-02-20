import flamengo from "../../assets/flamengo.png";
import galo from "../../assets/galo.png";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BoxData, BoxOne, BoxRowOne, BoxTimes, ContainerRow } from "./style";

export const BoxPaltipes = (props) => {
    return(
        <BoxTimes page={props.page} status={props.status} >
            <BoxRowOne>
                <MdOutlinePeopleAlt className="icon"/>
                <strong>{props.name}</strong>
            </BoxRowOne>
            <BoxData>
                <span>ID: {props.id}</span>
                <div>
                    <span>Data: </span>
                    <time>{props.data}</time>
                </div>
            </BoxData>
            <ContainerRow>
                <BoxOne>
                    <img src={flamengo} alt="logo do time do Flamengo" />
                    <span>{props.timeOne}</span>
                </BoxOne>
                <span>x</span>
                <BoxOne>
                    <img src={galo} alt="logo do time do Galo" />
                    <span>{props.timeTwo}</span>
                </BoxOne>
            </ContainerRow>
        </BoxTimes>
    );
}