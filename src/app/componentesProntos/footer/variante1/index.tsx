import Image from "next/image";
import LinkIcon from "../../../types/LinkIcon";
import RedesSociais from "../redes-sociais";
import './index.css'

export default function Footer1(props: {
    style : React.CSSProperties | null,
    image_src : string,
    links : LinkIcon[],
    title_information: string,
    information: string
}){
    return (
        <div className="general-container" style={{...props.style}}>
            <div className="contatos-celular-div">
                <RedesSociais links={props.links}/>
            </div>

            <div className="endereço-div-pc">
                <p className="endereço-superior">{props.title_information}</p>
                <p className="endereço">{props.information}</p>
            </div>
        

            <div className="logo-div">
                <Image src={props.image_src} alt="Logo" height={400} width={400}/>
            </div>
            
            <div className="contatos-pc-div">
                <RedesSociais links={props.links}/>
            </div>
            

            <div className="endereço-div-cell">
                <p className="endereço-superior">{props.title_information}</p>
                <p className="endereço">{props.information}</p>
            </div>

        </div>
    )
}