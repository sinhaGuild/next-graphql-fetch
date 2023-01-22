import { gql, useQuery } from "@apollo/client";
import { HeroImage } from "./hero-image";
import { Loading } from "./loading";

const query = gql`
  query getAllPages {
    Page {
      media {
        id
        title {
          english
          native
        }
        description
        bannerImage
        genres
        coverImage {
          extraLarge
        }
      }
    }
  }
`;

export function HomePage() {
  const { loading, data, error } = useQuery(query);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <>{console.log(error)}</>;
  }
  return (
    <>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-container">
          {data.Page.media.map((el: any) => {
            return (
              <div key={el.id} className="grid">
                <HeroImage
                  src={el.coverImage.extraLarge}
                  title={el.title.native}
                  genres={el.genres}
                  description={el.description}
                  id={el.id}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
