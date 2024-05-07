import Header from "@/components/ui/navigation/header";
import Toolbar from "./components/toolbar";
import Image from "next/image";
import BoardImage from "@/assets/images/board.png";
import Guests from "./components/guests";

export default function Page() {
  return (
    <section className=" h-[100vh] flex flex-col">
      <Header />
      <article className="w-full bg-black flex-1 p-4 flex items-center gap-4">
        <Toolbar />
        <Image alt="board" src={BoardImage} width={1600} height={700} />{" "}
        <Guests />
      </article>
    </section>
  );
}
