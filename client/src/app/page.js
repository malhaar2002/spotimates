import Image from "next/image";

export default function Custom() {
  return (
    <>
      <div className="container relative flex flex-col justify-evenly items-start mx-auto h-screen z-1">
        {/* Blue Heading Box */}
        <div className="relative flex flex-col justify-center items-start px-20 rounded-full bg-spotimates-blue w-full h-52 space-y-3">
          {/* Spotimates Heading */}
          <div className="text-7xl">spotimates</div>
          {/* Music Signal */}
          <Image
            src="/images/music-signal.png"
            alt="music signal"
            width={300}
            height={25.3}
          />
        </div>

        {/* Headphones Image */}
        <div className="absolute right-0 z-0">
          <Image
            src="/images/headphones.svg"
            alt="headphones"
            width={600}
            height={700}
          />
        </div>

        {/* Description */}
        <div className="px-20 text-xl">
          <p>Think you're musically compatible with your mates?</p>
          <p>Find out with a fun quiz!</p>
        </div>

        {/* Login with spotify button */}
        <a href="" className="mx-20">
          <div className="bg-spotimates-purple text-lg rounded-full px-7 py-2 hover:bg-purple-600 hover:cursor-pointer">
            Login with Spotify
          </div>
        </a>
      </div>
    </>
  );
}
