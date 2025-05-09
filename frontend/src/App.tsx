import { useEffect } from "react";
import { img1 } from "./assets/images";
import WhatsAppButton from "./components/buttons/WhatsAppButton";
import { BASE_URL } from "./utils/constants";
import Navbar from "./components/home/Navbar";

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
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="flex-col md:flex items-center justify-center">
        <section className="md:w-[50%] self-center h-fit">
          <h2 className="textZetta md:text-5xl text-3xl text-white text-center">
            Las mejores comidas rapidas
          </h2>
        </section>
        <figure className="md:w-[35%]">
          <img src={img1} alt="burger image" />
        </figure>

      </section>
      <WhatsAppButton />
    </main>
  )
}