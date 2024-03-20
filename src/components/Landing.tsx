import { CarouselCustomNavigation } from "./Carousel";
import ServiceCards from "./ServiceCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <main className="font-poppins">
      <section className="bg-[#F6CFFA]">
        <div className="p-2">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <h1 className="text-lg py-2 font-bold">Hola mundo!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            eligendi aspernatur eum doloribus in rerum pariatur sunt, deserunt
            omnis nulla ipsum magnam facilis debitis? Id dicta ipsa aspernatur.
            Magni, odit?
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#C5ECF5]">
        <div className="">
          <img
            className=""
            src="/Imagenes/Niño.png"
            alt="Imagen niño cumpleaños"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <h3 className="text-lg py-2 font-bold">Sobre nosotros</h3>
          <p className="">
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
      <section className="bg-purple-300 p-4">
        <div className="flex flex-col items-center">
          <h3 className="text-lg py-2 font-bold">Nuestros servicios</h3>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            corrupti ipsa autem. Sapiente dignissimos, perspiciatis totam ab
            autem et quos error nesciunt iure similique vel. Tempora distinctio
            reiciendis dolor. Error.lorem
          </p>
          <div className="">
            <ServiceCards
              serviceName="Juan"
              urlPhoto="https://t2.uc.ltmcdn.com/es/posts/2/7/0/que_hacer_el_dia_de_tu_cumpleanos_51072_600_square.jpg"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit corrupti ipsa autem. Sapiente dignissimos"
            />
            <ServiceCards
              serviceName="Pepito"
              urlPhoto="https://t2.uc.ltmcdn.com/es/posts/2/7/0/que_hacer_el_dia_de_tu_cumpleanos_51072_600_square.jpg"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit corrupti ipsa autem. Sapiente dignissimos"
            />
            <ServiceCards
              serviceName="Albertito"
              urlPhoto="https://t2.uc.ltmcdn.com/es/posts/2/7/0/que_hacer_el_dia_de_tu_cumpleanos_51072_600_square.jpg"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit corrupti ipsa autem. Sapiente dignissimos"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
