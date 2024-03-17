import { CarouselCustomNavigation } from "./Carousel";
import ClientsCards from "./ClientsCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <main className="font-poppins">
      <section className="">
        <Navbar />
      </section>
      <section className="flex flex-col items-center px-6 bg-yellow-200">
        <div className="">
          <img
            className=""
            src="../../public/Imagenes/Niño.png"
            alt="Imagen niño cumpleaños"
          />
        </div>
        <div className="py-5 flex flex-col items-center ">
          <h3 className="py-3">Sobre nosotros</h3>
          <p className="px-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            aut fugit nesciunt ut consectetur quo quae reprehenderit quos maxime
            ea quisquam quod velit, eius reiciendis corporis, ex molestiae,
            omnis dicta?Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Cumque, nulla maxime recusandae sol
          </p>
        </div>
      </section>
      <section className="bg-purple-300 h-[300px] p-3 flex flex-col justify-center items-center">
        <h3 className="p-2 text-xl font-bold text-white">
          Algunos de nuestros trabajos
        </h3>
        <CarouselCustomNavigation />
      </section>
      <section className="bg-yellow-200 py-8 flex flex-col items-center px-6">
        <h3>Nuestros servicios</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat
          blanditiis nam neque facilis distinctio ullam totam modi,
          reprehenderit sequi tempora porro ut natus, accusantium ab quis dicta
          officia consequatur?{" "}
        </p>
      </section>
      <section className="bg-purple-300 py-5 px-6">
        <div className="flex flex-col items-center">
          <h3 className="py-3">Nuestros clientes</h3>
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
