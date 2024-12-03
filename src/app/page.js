import Image from "next/image";
import Overlay from "./Components/Overlay";
import Navbar from "./Components/Navbar";
import Bgimage from "./Components/Bgimage";

export default function Home() {
  return (
    <div>
      <Overlay />
      <Bgimage/>
    </div>
  );
}
