type ServiceCardsProps = {
  serviceName: string;
  img: string;
  text: string;
};


export default function ServiceCards({
  serviceName,
  text,
  img,
}: ServiceCardsProps) {
  return (
    <div className="pt-12 text-[#61677A]">
      <div className="relative flex w-80 flex-col rounded-xl bg-[#FEEBBB] bg-clip-borde shadow-lg">
        <div
          className={`relative mx-4 -mt-6 h-48 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40 
          bg-center bg-cover`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <img src={img} alt="" /> */}
        </div>
        <div className="px-6 pt-4">
          <h5 className="mb-2 block font-poppins text-xl font-semibold leading-snug tracking-normal antialiased">
            {serviceName}
          </h5>
          <p className="block font-poppins text-base font-normal leading-relaxed text-inherit antialiased">
            {text}
          </p>
        </div>
        <div className="p-6 pt-0"></div>
      </div>
    </div>
  );
}
