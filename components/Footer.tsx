import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-8 py-4 sm:px-16 flex justify-between items-center gap-2 flex-warp bg-[#161921]">
      <p className="text-base font-bold text-white">@2023 EpicAnimeVault</p>
      <Image
        src="./logo.svg"
        alt="logo"
        height={44}
        width={47}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Image
          src="./tiktok.svg"
          height={19}
          width={19}
          alt="tiktok"
          className="object-contain"
        />
        <Image
          src="./instagram.svg"
          height={19}
          width={19}
          alt="instagram"
          className="object-contain"
        />
        <Image
          src="./twitter.svg"
          height={19}
          width={19}
          alt="twitter"
          className="object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
