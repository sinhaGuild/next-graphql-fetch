import { gql, useQuery } from "@apollo/client";
import { Loading } from "./loading";

const getMovieDetails = gql`
  query ($mediaId: Int) {
    Page {
      media(id: $mediaId) {
        id
        siteUrl
        genres
        title {
          english
          native
        }
        description
        bannerImage
        coverImage {
          extraLarge
        }
      }
    }
  }
`;

export function MovieDetailComponent({
  id,
}: {
  id: string | string[] | undefined;
}) {
  const { loading, data, error } = useQuery(getMovieDetails, {
    variables: { mediaId: id },
  });
  if (loading) return <Loading />;
  if (error) {
    return <>{console.log(error)}</>;
  }
  return (
    <>
      {data && (
        <div className="mx-20 text-center my-7 py-7">
          {data.Page.media.map((el: any) => {
            return (
              <div key={el.id} className="grid">
                <img
                  className="w-full h-full py-7"
                  src={el.bannerImage}
                  alt={el.title.native}
                />
                <p className="py-2 text-2xl font-light tracking-widest uppercase text-slate-600">
                  {el.title.english}
                </p>
                <p className="text-5xl font-black py-7">{el.title.native}</p>
                <p className="py-4 text-sm font-light text-gray-500 whitespace-pre-wrap">
                  {el.description}
                </p>
                <div className="flex space-x-3">
                  {el.genres.forEach((el: any) => (
                    <p className="py-4 font-light text-gray-500 text-xxs">
                      {el.toString()}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
