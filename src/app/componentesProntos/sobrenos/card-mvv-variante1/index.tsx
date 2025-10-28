import Image from 'next/image';
import './index.css'

export default function CardMVVOne(cardMVV1Props: {
    style: React.CSSProperties | null;
    title:string;
    text: string;
    image: string;

})
{
    return(
        <div className="card-mvv" style={{ ...cardMVV1Props.style}}>
            <h3 className="title-card-mvv" >{cardMVV1Props.title}</h3>
            <div className='text-card-mvv-container'> 
                <p className="text-card-mvv">{cardMVV1Props.text}</p>
            </div>     
            <Image className='img-card-mvv' src={cardMVV1Props.image} alt="" height={100} width={100}/>

    </div>
               
    )
}