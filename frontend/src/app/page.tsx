import TextHero from "./_components/Hero/TextHero";
import PhoneTabs from "./_components/PhoneTabs";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import('./(ThreeJS)/Scene'), { ssr: false });

export default function Example() {

  return (
    <main>
      <div className="relative -mt-16 h-screen -z-20">
        <TextHero />
        <Scene/>
      </div>
      <section id="phone-tabs">
        <PhoneTabs />
      </section>
    </main>
  )
}