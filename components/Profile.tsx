'use client'
import Image from "next/image";

export default function Profile() {

    return (
        <>
        <div className="max-w-[1160px] flex m-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
      {/* Image Section */}
      <div className="w-full md:w-2/5">
        <Image
          src="https://picsum.photos/200/300"
          alt="Car"
          width={100}
          height={200}
          className="rounded w-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-3/5">
        <h2 className="text-xl md:text-2xl font-semibold">
          I'm a web developer & designer based in Cluj-Napoca! I specialize in
          Frontend Engineering, focusing on building high-quality web
          experiences through clean code and thoughtful design.
        </h2>
        <a
          href="#"
          className="mt-4 inline-block px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
        >
          Click Here
        </a>
      </div>
    </div>
    </div>
</> 
      );
}