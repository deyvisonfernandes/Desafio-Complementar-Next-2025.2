import Image from 'next/image';
import './index.css'

export default function Cardfeedback2(cardFB2Props: {
    image: string;
})
{
    return(
    <div className="card-fb">
        <Image className='img-card-fb' src={cardFB2Props.image} alt="Imagens que mostram com quem trabalhamos" height={192} width={192}/>
    </div>
               
    )
}