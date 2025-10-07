import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex justify-center items-center w-full h-full bg-black">
        <Image
          className="dark:invert w-screen h-screen object-contain object-center animate-[spin_300s_infinite] lg:p-12"
          src="/Troll.png"
          alt="Wind logo"
          width={800}
          height={800}
        />
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
