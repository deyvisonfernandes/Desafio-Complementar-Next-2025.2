"use client"

import { useEffect, useState } from 'react';
import './index.css';

export default function FeedbackOne(feedback1Props: {
  style?: React.CSSProperties,
  card_style?: React.CSSProperties,
  title?:string,
  descriptions: string[],
  client_names: string[],
  job_titles: string[],
  companies: string[],
  autoPlayMs?: number;
  dot_color?:React.CSSProperties,
}) {
  const {
    style,
    card_style,
    title,
    descriptions,
    client_names,
    job_titles,
    companies,
    autoPlayMs = 5000,
    dot_color,
  } = feedback1Props;

  const [index, setIndex] = useState(0);
  const total = Math.min(
    descriptions.length,
    client_names.length,
    job_titles.length,
    companies.length
  );

  useEffect(() => {
    if (!autoPlayMs) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, autoPlayMs);
    return () => clearInterval(timer);
  }, [autoPlayMs, total]);

  return (
    <div className="container-feedback" style={style} id='feedback'>
      <h1 className="title-feedback">{title ? title : "O que dizem nossos clientes?"}</h1>
      <div className="card-feedback" style={card_style}>
        <div className='desc-card-info'>
          <p className="desc-feedback">
              {descriptions[index].length > 200
              ? descriptions[index].slice(0, 200) + '...'
              : descriptions[index]}
          </p>
        </div>
        <div className="card-client-info">
          <p className="client-name">{client_names[index]}</p>
          <p className="jobtitle-company">
            {job_titles[index]} - {companies[index]}
          </p>
        </div>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''} `}
            style={dot_color}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
