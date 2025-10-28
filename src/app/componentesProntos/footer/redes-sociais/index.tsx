import Link from "next/link"
import LinkIcon from "@/src/app/types/LinkIcon"
import './index.css'
import Image from "next/image"


export default function RedesSociais(props: {
    links: LinkIcon[],
}) {
    return (
        <div className="contatos">
            <p className="fale-conosco">Fale conosco</p>
            <div className="redes">
                {props.links.map((link) => {
                    return (
                        <Link href={link.link} key={link.link}>
                            <Image src={link.icon} alt="Rede social" height={30} width={30}/>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}