import AnimeCard, { AnimeProps } from "@/components/AnimeCard";
import { data } from "./_data";
import LoadMore from "@/components/LoadMore";

export default function Home() {
  return (
    <main className="py-16 px-8 sm:p-16 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((item: AnimeProps, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}
