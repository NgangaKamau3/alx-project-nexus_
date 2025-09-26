import MovieDetail from "@/components/common/MovieDetail";
import { MOVIE_DATA } from "@/constants";
import { useRouter } from "next/router"

export default function MoviePage() {
    const router = useRouter();
    const { id } = router.query;
    const property = MOVIE_DATA.find((item) => item.title === id);

    if (!property) return <p>Property not found</p>

    return (
        <div>
            <MovieDetail property={property} />
        </div>
    )
}