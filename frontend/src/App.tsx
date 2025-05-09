import { img1 } from "./assets/images";

export default function App() {
  return (
    <main className="min-h-screen bg-emerald-950">
      <section className="flex items-center justify-center">
        <section className="w-[50%] self-center h-fit">
          <h2 className="textZetta text-5xl text-white text-center">
            Las mejores comidas rapidas
          </h2>
        </section>
        <figure className="w-[35%]">
          <img src={img1} alt="burger image" />
        </figure>

      </section>
    </main>
  )
}