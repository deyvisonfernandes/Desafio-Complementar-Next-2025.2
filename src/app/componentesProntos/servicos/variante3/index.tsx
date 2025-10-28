import CardTwo from '../card';
import './index.css'

export default function ServicesThree(service3Props: {
    style?: React.CSSProperties,
    title?: string,
    style_card?: React.CSSProperties,
    title_card: string[],
    image_src_card: string[],
    description_card: string[],
    text_style?: React.CSSProperties;
    link_service?: string[],
})
{
    function truncateText(text: string, maxLength: number): string {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    }

    return(
        <div className="container_service-3" style={{ ...service3Props.style}} id='servicos'>
            <p className='title_service-3' style={{...service3Props.text_style}}>{service3Props.title ?? "Nossos Serviços"}</p>
            <div className="service-3_cards_grid">
                {service3Props.title_card.map((title, index) => (
                    <CardTwo 
                    key={index}
                    title={title}
                    text={truncateText(service3Props.description_card[index], 120)}
                    image={service3Props.image_src_card[index]}
                    style={{...service3Props.style_card }}
                    link={service3Props.link_service?.[index]}
                    />
                ))}
            </div>
        </div>
    )
}

