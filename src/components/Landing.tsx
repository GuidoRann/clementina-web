import ClientsCards from "./ClientsCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <main className="bg-yellow-200 w-screen h-screen flex flex-col justify-between text-[#6a19a8] font-bold text-center">
      <section className="flex flex-col gap-5 items-center">
        <Navbar />
        <h1 className="text-9xl pb-36">Bienvenidos</h1>
      </section>
      <section className="h-[2400px] text-slate-50 bg-[#6a19a8] py-2 flex flex-row justify-center items-center">
        <div className="h-full w-1/3 flex justify-center items-center py-8">
          <img
            className="h-full"
            src="../../public/Imagenes/Niño.png"
            alt="Imagen niño cumpleaños"
          />
        </div>
        <div className="w-2/3  flex flex-col items-center justify-center">
          <h3 className="text-4xl pb-5">Sobre nosotros</h3>
          <p className="w-3/5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            aut fugit nesciunt ut consectetur quo quae reprehenderit quos maxime
            ea quisquam quod velit, eius reiciendis corporis, ex molestiae,
            omnis dicta?Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Cumque, nulla maxime recusandae sol
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center bg-slate-50">
        <div className="w-full flex flex-col items-center pt-8 gap-8">
          <h3 className="text-4xl">Nuestros clientes</h3>
          <p className="w-2/5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            corrupti ipsa autem. Sapiente dignissimos, perspiciatis totam ab
            autem et quos error nesciunt iure similique vel. Tempora distinctio
            reiciendis dolor. Error.lorem
          </p>
          <div className="flex">
            <ClientsCards
              clientName="Juan"
              urlPhoto="images/pepe.jpg"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            corrupti ipsa autem. Sapiente dignissimos, perspiciatis totam ab
            autem et quos error nesciunt iure similique vel. Tempora distinctio
            reiciendis dolor. Error.lorem"
            />
            <ClientsCards
              clientName="Pepito"
              urlPhoto="images/pepito.jpg"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            corrupti ipsa autem. Sapiente dignissimos, perspiciatis totam ab
            autem et quos error nesciunt iure similique vel. Tempora distinctio
            reiciendis dolor. Error.lorem"
            />
            <ClientsCards
              clientName="Albertito"
              urlPhoto="images/albertito.jpg"
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
