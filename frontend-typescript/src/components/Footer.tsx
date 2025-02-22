import etimoLogo from '../assets/etimoLogo.png';

export const Footer = () => {
  return (
    <div className="dark:bg-gray-800 pt-[3rem] lg:pt-[10rem] pb-8 w-full flex justify-center items-center">
      <h1>Powered by</h1>
      <div className="w-[100px] ml-5">
        <img src={etimoLogo} alt="etimo-logo" />
      </div>
    </div>
  );
};
