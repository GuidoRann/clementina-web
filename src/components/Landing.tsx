import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <div className="bg-[#6a19a8] w-screen h-screen flex flex-col justify-between text-white font-bold text-center">
      <Navbar />
      <div className="flex flex-col gap-5 items-center ">
        <h1 className="">Landing</h1>
        <p className=" w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          molestiae illum modi, nesciunt at earum quam iusto, dolores alias
          repudiandae sapiente. Deleniti, maiores perspiciatis aliquid
          repellendus ipsam rerum esse aspernatur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic ab officiis maiores esse saepe velit
          sed. Fuga laudantium, atque magnam voluptate ea exercitationem,
          aperiam quo veniam earum quae ullam accusantium.
        </p>
      </div>
      <Footer />
    </div>
  );
}
