import Image from "next/image";

const LoadMore = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div>
        <Image
          src="./spinner.svg"
          alt="spinner"
          height={56}
          width={56}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default LoadMore;
