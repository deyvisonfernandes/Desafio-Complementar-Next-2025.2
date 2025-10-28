import HeroSectionOne from "./componentesProntos/herosection/variante1";
import Navbar1 from "./componentesProntos/navbar/variante1";
import SobreNosTwo from "./componentesProntos/sobrenos/variante2";
import ServicesThree from "./componentesProntos/servicos/variante3";
import FeedbackOne from "./componentesProntos/feedback/variante1";
import FeedbackTwo from "./componentesProntos/feedback/variante2";
import Footer1 from "./componentesProntos/footer/variante1";

export default function Home() {

  const pages = [
    { name: "Home", url: "/" },
    { name: "Sobre nós", url: "#sobre" },
    { name: "Serviços", url: "#servicos" },
    { name: "Feedbacks", url: "#feedback" },
    { name: "Equipe", url: "#clientes" },
    { name: "Gerenciamento", url: "/gerenciamento" },
  ];

  const links = [
    { link: "https://instagram.com", icon: "/images/insta.png" },
    { link: "https://facebook.com", icon: "/images/fb.png" },
    { link: "https://mail.google.com", icon: "/images/email.png" },
    { link: "https://linkedin.com", icon: "/images/linkedin.png" },
    { link: "https://github.com/ViniCampos12", icon: "/images/phone.png" },
  ];

  const descriptionsCard = ["Tornar a terapia um espaço acessível, leve e transformador, promovendo o autoconhecimento, o bem-estar e equilíbrio emocional.", "Ser referência em atendimento psicológico humanizado, conectando pessoas ao seu próprio processo de desenvolvimento.", "Empatia Autenticidade Cuidado Evolução Individualidade Respeito Sensibilidade"];

  return (
    <main>
      <Navbar1 
        image_src="/images/logo.png" 
        pages={pages} 
        title_image="Psicode" 
        link_color="#B54A22" 
        style={{backgroundColor:"white", color:"#B54A22"}}
      />
      <HeroSectionOne 
        image_src="/images/fundo-hero.png" 
        text="Encontre clareza, leveza e bem-estar com o acompanhamento psicológico que respeita o seu tempo e a sua história."
        text_style={{color:"white"}}
      />
      <SobreNosTwo 
        description="Somos a Psicode, um consultório de psicologia que une ciência,  sensibilidade e cuidado para promover autoconhecimento e qualidade de vida.Nosso propósito é tornar a terapia acessível, leve e transformadora — um espaço seguro para você falar, refletir e crescer."
        image_src="/images/sala.png"
        description_card={descriptionsCard}
        title_card={["Missão", "Visão", "Valores"]}
        image_src_card={["/images/fundo-mvv.png", "/images/fundo-mvv.png", "/images/fundo-mvv.png"]}
        style={{backgroundColor:"white", color:"black"}}
        title_style={{color:"#B54A22"}}
        style_card={{backgroundColor:"#B54A22",color:"white"}}
      />
      
      <ServicesThree
        title_card={["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum",]}
        description_card={["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est modi quaerat sint tenetur aliquam","Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est modi quaerat sint tenetur aliquam","Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est modi quaerat sint tenetur aliquam","Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est modi quaerat sint tenetur aliquam","Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est modi quaerat sint tenetur aliquam","Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est modi quaerat sint tenetur aliquam"]}
        image_src_card={["/images/fundo-services.png","/images/fundo-services.png","/images/fundo-services.png","/images/fundo-services.png","/images/fundo-services.png","/images/fundo-services.png",]}
        link_service={["https://google.com","https://google.com","https://google.com","https://google.com","https://google.com","https://google.com","https://google.com"]}
        style={{backgroundColor:"#F7EDE1"}}
        style_card={{backgroundColor:"#B54A22", color:"white"}}
        text_style={{color:"#B54A22"}}
      />

      <FeedbackOne
        style={{backgroundColor:"white", color:"#B54A22"}}
        client_names={["Júlia", "Vinicius"]}
        companies={["",""]}
        descriptions={["“Gostaria de parabenizar o atendimento humanizado e individual. Particularmente, enxergo a grande diferença em não ter contato robotizado em passar valores ou tirar dúvidas etc, pois atendem a necessidade de cada um. Estou amando muito a atenção da psicóloga. Tem feito com que eu reflita sobre os assuntos discutidos e com que me sinta acolhida.”", "“Gostaria de parabenizar vocês pelo atendimento humanizado e individual. Particularmente, enxergo a grande diferença em não ter contato robotizado em passar valores ou tirar dúvidas etc, pois atendem a necessidade de cada um. Estou amando muito a atenção da psicóloga. Tem feito com que eu reflita sobre os assuntos discutidos e com que me sinta acolhida.”"]}
        job_titles={["Paciente","Paciente"]}
        card_style={{backgroundColor:"#F7EDE1"}}
        dot_color={{background:"#B54A22"}}
      />

      <FeedbackTwo
        style={{backgroundColor:"#F7EDE1",color:"#B54A22"}}
        title="Nossos Psicólogos"
        image_src_card={["/images/fed1.png","/images/fed2.png","/images/fed3.jpg","/images/fed4.png",]}
      />
      <Footer1
        style={{backgroundColor:"#B54A22", color:"white"}}
        image_src="/images/logo-nome.png"
        information="Universidade Federal de Juiz de Fora"
        title_information="Endereço"
        links={links}
      />
    </main>
  );
}
