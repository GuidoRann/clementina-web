import { CarouselCustomNavigation } from "./Carousel";
import ServiceCards from "./ServiceCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <main className="font-poppins bg-white">
      <section className="bg-[url('/imagenes/servicios/foto2.jpg')] bg-center bg-cover h-[350px] flex flex-col">
        <Navbar />
        <div className="flex flex-col w-2/3 p-4 justify-center text-white h-full">
          <p className="text-[35px] font-semibold leading-10 pt-[1px]">
            Entregamos felicidad y creamos
            <p className="font-imperial text-[70px] leading-8 text-yellow-100">
              recuerdos
            </p>
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center " id="nosotros">
        <div className="flex flex-col justify-center items-center px-6 py-12">
          <h3 className="text-lg pb-5 font-bold">Sobre nosotros</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            aut fugit nesciunt ut consectetur quo quae reprehenderit quos maxime
            ea quisquam quod velit, eius reiciendis corporis, ex molestiae,
            omnis dicta?Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Cumque, nulla maxime recusandae sol
          </p>
        </div>
      </section>
      <section className="h-80 p-3 flex flex-col items-center">
        <h3 className="pb-6 text-xl font-bold text-gray-800">
          Algunos de nuestros trabajos
        </h3>
        <div>
          <CarouselCustomNavigation />
        </div>
      </section>
      <section className="p-4 py-10" id="servicios">
        <div className="flex flex-col items-center">
          <h3 className="text-lg py-2 font-bold">Nuestros servicios</h3>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            corrupti ipsa autem. Sapiente dignissimos, perspiciatis totam ab
            autem et quos error nesciunt iure similique vel. Tempora distinctio
            reiciendis dolor. Error.lorem
          </p>
          <div className="lg:flex lg:gap-4">
            <ServiceCards
              serviceName="Juan"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit corrupti ipsa autem. Sapiente dignissimos"
            />
            <ServiceCards
              serviceName="Pepito"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit corrupti ipsa autem. Sapiente dignissimos"
            />
            <ServiceCards
              serviceName="Albertito"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit corrupti ipsa autem. Sapiente dignissimos"
            />
            <ServiceCards
              serviceName="Albertito"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit corrupti ipsa autem. Sapiente dignissimos"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
