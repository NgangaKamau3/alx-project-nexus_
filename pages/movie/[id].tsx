import MovieDetail from "@/components/common/MovieDetail";
// import { MOVIE_DATA } from "@/constants";
import { MainMovieProps} from "@/interfaces";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function MoviePage() {
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState<MainMovieProps | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) return;
            try {
                const response = await axios.get<MainMovieProps>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/movies/${id}/`);
                console.log("MOVIE DETAILS", response.data);
                
                setProperty(response.data);
            } catch (error) {
                console.log("Error fetching movie details", error);
            } finally {
                setLoading(false)
            }
        }

        fetchProperty();
    }, [id])

    if (loading) {
        return <p>Loading...</p>
    }

    if (!property) {return <p>Property not found</p>}

    return (
        <div>
            <MovieDetail property={property} />
        </div>
    )
}