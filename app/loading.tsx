import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  };
  return (
    <div style={divStyle}>
      <Image src={loader} alt="Loading..." height={150} width={150} />
    </div>
  );
};

export default LoadingPage;
