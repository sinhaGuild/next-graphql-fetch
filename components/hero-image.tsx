import Image from "next/image";

export function HeroImage({
  src,
  title,
  genres,
}: {
  src: string;
  title: string;
  genres: string[];
}) {
  return (
    <button className="transparent-border w-fit h-full rounded-lg bg-black scale-95">
      <div className="mask-image-linear h-full w-full justify-center rounded-lg">
        <img src={src} alt={src?.toString()} />
      </div>
      <div className="absolute text-left">
        <div>
          <p className="relative uppercase left-4 bottom-16 text-slate-500 font-quicksand text-[10px]">
            {stringCat(genres.map((gn) => gn.toString()).join(" "), 24)}
          </p>
          <p className="relative left-4 bottom-14 text-slate-100 font-quicksand text-xs">
            {stringCat(title, 24)}
          </p>
        </div>
      </div>
    </button>
  );
}

function stringCat(str: string, limit: number) {
  if (str.length > limit) {
    return str.substring(0, 14) + " ...";
  } else {
    return str;
  }
}

// grid-container grid
// min-w-defined
// button w-fit h-full
// img-co h-full w-full
// text-co absolute
// text relative
