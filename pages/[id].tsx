import { MovieDetailComponent } from "@/components/movie-detail";
import { useRouter } from "next/router";

export default function MovieHome() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <MovieDetailComponent id={id} />
    </>
  );
}
