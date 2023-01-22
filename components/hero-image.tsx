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
    <button className="transparent-border transition-all min-w-[18vw] h-full rounded-xl bg-black scale-95 group font-quicksand text-slate-400 text-xxs">
      <div className="justify-center w-full h-full rounded-xl mask-image-linear">
        <img
          className="w-full h-full group-hover:mask-image-linear"
          src={src}
          alt={src?.toString()}
        />
      </div>
      <div className="absolute w-full pr-[14%] text-left">
        <div
          className={classnames(
            "relative left-5 bottom-20",
            "group-hover:-translate-y-32 transition-transform group-hover:ease-in-out group-hover:duration-300"
          )}
        >
          <p className="pb-2 uppercase">
            {stringCat(genres.map((gn) => gn.toString()).join(" "), 20)}
          </p>
          <p className="pb-4 text-sm text-slate-100">{stringCat(title, 24)}</p>
          <p
            className={classnames(
              "text-justify line-clamp-4",
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
