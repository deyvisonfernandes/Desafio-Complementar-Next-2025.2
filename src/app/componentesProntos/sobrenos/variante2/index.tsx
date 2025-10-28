import Image from 'next/image';
import CardMVVOne from '../card-mvv-variante1';
import './index.css'

export default function SobreNosTwo(sobre2Props: {
    style?: React.CSSProperties,
    title?:string,
    title_style?:React.CSSProperties,
    description: string;
    image_src: string;
    image_style?: React.CSSProperties,
    text_style?: React.CSSProperties,
    title_card: string[],
    image_src_card: string[],
    description_card: string[],
    style_card?: React.CSSProperties;
})
{
    return(
        <div className="container-sobrenos" style={{...sobre2Props.style}} id='sobre'>
            <h2 className='title-sobrenos' style={{...sobre2Props.title_style}}>{sobre2Props.title ?  sobre2Props.title : "Sobre Nós"}</h2>
            <div className="conteudo-sobrenos">
                <p className="desc-sobrenos" style={{...sobre2Props.text_style}}>{sobre2Props.description}</p>
                <Image className='img-sobrenos' style={{...sobre2Props.image_style}} src={sobre2Props.image_src} alt="Imagem representativa do Sobre Nós" height={240} width={240} />
            </div>
            <div className='mvv-sobrenos'>
                {sobre2Props.title_card.map((title, index) => (
                    <CardMVVOne 
                    key={index}
                    title={title}
                    text={sobre2Props.description_card[index]}
                    image={sobre2Props.image_src_card[index]}
                    style={{...sobre2Props.style_card } }/>
                ))}
            </div>
        </div>
    )
}