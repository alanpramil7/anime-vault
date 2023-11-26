import Image from "next/image";

export interface AnimeProps {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface AnimeCardProps {
  index: number;
  anime: AnimeProps;
}

const AnimeCard = ({ index, anime }: AnimeCardProps) => {
  return (
    <div className="max-w-sm w-full rounded relative">
      <div className="relative w-full h-[37vh]">
        <Image
          src={anime.image.original}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col py-4 gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-white font-bold text-base">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-[#FFAD49] font-bold text-base">{anime.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;