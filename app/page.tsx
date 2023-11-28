import AnimeCard, { AnimeProps } from "@/components/AnimeCard";
import LoadMore from "@/components/LoadMore";
import { fetchAnime } from "./action";

export default async function Home() {
  const data = await fetchAnime(1);
  return (
    <main className="py-16 px-8 sm:p-16 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((item: AnimeProps, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}
