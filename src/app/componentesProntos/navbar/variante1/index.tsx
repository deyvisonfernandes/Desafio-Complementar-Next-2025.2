import PageName from "../../../types/PageName"
import HamburgerMenu from "./hamburger-menu"
import "./index.css"
import Link from "next/link"
import Image from "next/image"

export default function Navbar1(props: {
    style?: React.CSSProperties,
    image_src : string,
    pages : PageName[],
    link_color?: string,
    title_image?: string,
    }){
    
    return(
        <nav className="general-container-navbar" style={props.style}>
            <div className="div-hamburger">
                <HamburgerMenu pages={props.pages}/>
            </div>

            <Link href="/">
                <div className="logo-navbar">
                        <Image src={props.image_src} alt="Logo" height={80} width={80}/>
                        {props.title_image && <span className="title-navbar">{props.title_image}</span>}
                </div>
            </Link>

            <div className="pages">
                {props.pages.map((page, index) => (
                        <div className="page" key={index}>
                            <Link href={page.url} style={{color: props.link_color}}>{page.name}</Link>
                        </div>
                    ))
                }
            </div>
            
        </nav>
    )
}