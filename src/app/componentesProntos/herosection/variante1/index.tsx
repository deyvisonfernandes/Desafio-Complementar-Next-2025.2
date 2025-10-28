import './index.css'

export default function HeroSectionOne(hero1Props: {
    style?: React.CSSProperties | null;
    text: string;
    image_src: string;
    text_style?: React.CSSProperties | null,
})
{
    return(
        <div className="back" style={{backgroundImage: `url(${hero1Props.image_src})`, ...hero1Props.style}}>
            <div className="block">
                <p className="text" style={{...hero1Props.text_style}}>{hero1Props.text}</p>
            </div>
        </div>
    )
}