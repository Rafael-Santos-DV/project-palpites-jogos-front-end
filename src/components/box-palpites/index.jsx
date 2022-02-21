import psg from "../../assets/psg.png";
import real from "../../assets/real-madrid.png";
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
                    <img src={real} alt="logo do time do REAL" />
                    <span>{props.timeOne}</span>
                </BoxOne>
                <span>x</span>
                <BoxOne>
                    <img src={psg} alt="logo do time do PSG" />
                    <span>{props.timeTwo}</span>
                </BoxOne>
            </ContainerRow>
        </BoxTimes>
    );
}