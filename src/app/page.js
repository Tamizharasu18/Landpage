import Image from "next/image";
import Overlay from "./Components/Overlay";
import Navbar from "./Components/Navbar";
import Bgimage from "./Components/Bgimage";
import Cards from "./Components/Cards";

export default function Home() {
  return (
    <div>
      <Overlay />
      <Bgimage/>
      <Cards/>
    </div>
  );
}
