import Image from 'next/image';
import './index.css'
import Link from 'next/link';

export default function CardTwo(card2Props: {
    style?: React.CSSProperties,
    title:string,
    text: string,
    image: string,
    titleAbsolute?:boolean,
    link?:string;
})
{

    const cardContent = (
        <> 
            <Image className='img-card-2' src={card2Props.image} alt="" width={174} height={280}/>
            <div className='text-card-2-container'> 
                {card2Props.titleAbsolute ? (
                    <p className="title-card-2-absolute">{card2Props.title}</p>
                ) : (
                    <p className="title-card-2">{card2Props.title}</p>
                )}
                <p className="text-card-2">{card2Props.text}</p>
            </div>  
        </>
    );

    return(
        card2Props.link ? (
            // Se for link
            <Link 
                href={card2Props.link} 
                className="card-2 card-link" 
                style={{ ...card2Props.style, textDecoration: 'none', cursor: 'pointer' }}
            >
                {cardContent}
            </Link>
        ) : (
            <div className="card-2" style={{ ...card2Props.style, padding:0}}>
                {cardContent}
            </div>
        )
    );
}