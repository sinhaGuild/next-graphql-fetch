import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { HeroImage } from "./hero-image";

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
  if (loading) <div>loading..</div>;
  if (error) {
    console.log(error);
  }
  return (
    <>
      {data && (
        <div className="grid-container grid grid-cols-4 gap-6">
          {data.Page.media.map((el: any) => {
            return (
              <div key={el.id} className="grid-item-width min-w-[20vw]">
                <HeroImage
                  // src={el.bannerImage}
                  src={el.coverImage.extraLarge}
                  title={el.title.native}
                  genres={el.genres}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
