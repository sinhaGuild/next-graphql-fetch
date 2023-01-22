import classnames from "classnames";

export function HeroImage({
  src,
  title,
  genres,
  description,
}: {
  src: string;
  title: string;
  genres: string[];
  description: string;
}) {
  return (
    <button className="transparent-border min-w-[18vw] h-full rounded-xl bg-black scale-95 group">
      <div className="justify-center w-full h-full rounded-xl mask-image-linear">
        <img className="w-full h-full" src={src} alt={src?.toString()} />
      </div>
      <div className="absolute w-full pr-[14%] text-left">
        <div
          className={classnames(
            "relative left-5 bottom-20",
            "group-hover:duration-300 group-hover:-translate-y-32 transition-all group-hover:ease-in-out "
          )}
        >
          <p className="uppercase pb-2  text-slate-400 font-quicksand text-[10px]">
            {stringCat(genres.map((gn) => gn.toString()).join(" "), 20)}
          </p>
          <p className="pb-4 text-sm text-slate-100 font-quicksand">
            {stringCat(title, 24)}
          </p>
          <p
            className={classnames(
              "text-[10px] text-slate-400 font-quicksand text-justify line-clamp-4",
              "opacity-0 group-hover:opacity-100 delay-75 transition-opacity"
            )}
          >
            {description}
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
