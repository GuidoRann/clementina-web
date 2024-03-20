type ServiceCardsProps = {
  serviceName: String;
  urlPhoto: String;
  text: String;
};

export default function ServiceCards({ serviceName, urlPhoto, text }: ServiceCardsProps) {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[url(${urlPhoto})]"></div>
      <div className="px-6 pt-4">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          ${serviceName}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          ${text}
        </p>
      </div>
      <div className="p-6 pt-0"></div>
    </div>
  );
}
