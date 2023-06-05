import { ThreeDots } from "react-loader-spinner";

/* En caso de querer que se adapte a un componente agregarle "relative" al padre */

export const LoadingModal = () => {
  return (
    <div className=" top-0 left-0 absolute w-screen h-screen flex justify-center items-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#39528D"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
