type ClientsCardsProps = {
  clientName: String;
  urlPhoto: String;
  text: String;
};

export default function ClientsCards(props: ClientsCardsProps) {
  const { clientName, urlPhoto, text } = props;
  return (
    <div className="shadow-md shadow-yellow-700 w-[300px] rounded-lg bg-yellow-200 m-8 ">
      <h1 className="pt-2">{clientName}</h1>
      <img
        src={`${urlPhoto}`}
        alt={`Foto de perfil de ${clientName}`}
        className="p-4 rounded-[30px] stroke-white stroke-2"
      />
      <p className="p-2">{text}</p>
    </div>
  );
}
