import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex justify-center items-center w-full h-full">
        <Image
          className="dark:invert"
          src="/temp-logo.png"
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
