import { useEffect } from "react";
import { circle, img1 } from "./assets/images";
import WhatsAppButton from "./components/buttons/WhatsAppButton";
import { BASE_URL } from "./utils/constants";
import Navbar from "./components/home/Navbar";
import { colors } from "./utils/colors";
import MenuContainer from "./components/home/MenuContainer";

export default function App() {

  const soli = async () => {
    const response = fetch(`${BASE_URL}auth/profile`)
    const data = (await response).json();
    console.log(await data);
  }

  useEffect(
    () => {
      soli()
    }, []
  )

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="flex flex-col min-h-[90vh] md:flex-row items-center justify-center">
        <section className="md:w-[50%] w-96 self-center h-fit">
          <h2 className="textZetta md:text-5xl text-3xl text-center font-bold">
            Las <span style={{ color: colors.primary }}>mejores</span> comidas rapidas
          </h2>
        </section>
        <figure className="md:w-[35%] w-96 relative">
          <img src={circle} alt="" className=" absolute" />
          <img src={img1} alt="burger image" />
        </figure>
      </section>

      <MenuContainer />
      <WhatsAppButton />
    </main>
  )
}