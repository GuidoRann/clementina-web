import ClientsCards from "./ClientsCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <main className="">
      <section className="">
        <Navbar />
        <h1 className="">Bienvenidos</h1>
      </section>
      <section className="">
        <div className="">
          <img
            className=""
            src="../../public/Imagenes/Niño.png"
            alt="Imagen niño cumpleaños"
          />
        </div>
        <div className="">
          <h3 className="">Sobre nosotros</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            aut fugit nesciunt ut consectetur quo quae reprehenderit quos maxime
            ea quisquam quod velit, eius reiciendis corporis, ex molestiae,
            omnis dicta?Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Cumque, nulla maxime recusandae sol
          </p>
        </div>
      </section>
      <section className="">
        <div className="">
          <h3 className="">Nuestros clientes</h3>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            corrupti ipsa autem. Sapiente dignissimos, perspiciatis totam ab
            autem et quos error nesciunt iure similique vel. Tempora distinctio
            reiciendis dolor. Error.lorem
          </p>
          <div className="">
            <ClientsCards
              clientName="Juan"
              urlPhoto="https://t2.uc.ltmcdn.com/es/posts/2/7/0/que_hacer_el_dia_de_tu_cumpleanos_51072_600_square.jpg"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            corrupti ipsa autem. Sapiente dignissimos, perspiciatis totam ab
            autem et quos error nesciunt iure similique vel. Tempora distinctio
            reiciendis dolor. Error.lorem"
            />
            <ClientsCards
              clientName="Pepito"
              urlPhoto="https://t2.uc.ltmcdn.com/es/posts/2/7/0/que_hacer_el_dia_de_tu_cumpleanos_51072_600_square.jpg"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            corrupti ipsa autem. Sapiente dignissimos, perspiciatis totam ab
            autem et quos error nesciunt iure similique vel. Tempora distinctio
            reiciendis dolor. Error.lorem"
            />
            <ClientsCards
              clientName="Albertito"
              urlPhoto="https://t2.uc.ltmcdn.com/es/posts/2/7/0/que_hacer_el_dia_de_tu_cumpleanos_51072_600_square.jpg"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            corrupti ipsa autem. Sapiente dignissimos, perspiciatis totam ab
            autem et quos error nesciunt iure similique vel. Tempora distinctio
            reiciendis dolor. Error.lorem"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
