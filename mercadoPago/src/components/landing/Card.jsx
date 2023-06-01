// eslint-disable-next-line react/prop-types
export const Card = ({ img, title, text }) => {
  return (
    <article className="text-center font-semibold bg-white py-3 px-2 rounded-lg shadow-md">
      <img src={img} alt="saving icon" className="mx-auto" />
      <h2 className="text-[#6F0B19] my-2">{title}</h2>
      <p className="text-sm max-w-[250px]">{text}</p>
    </article>
  );
};
