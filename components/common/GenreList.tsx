// import { MOVIE_DATA } from "@/constants";
import { useEffect, useState } from "react";
import GenreButton from "./GenreButton";
import Link from "next/link";
import { GenreApiResponse, GenreTypesProps, MainMovieProps, MovieApiResponse } from "@/interfaces";
import axios from "axios";

const GenreList: React.FC = () => {
    const [movies, setMovies] = useState<MainMovieProps[]>([]);
    const [genres, setGenres] = useState<GenreTypesProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const genreResponse = await axios.get<GenreApiResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/genres/`);
                setGenres(genreResponse.data.results);

                const moviesRes = await axios.get<MovieApiResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/movies/`)
                setMovies(moviesRes.data.results);
            } catch(error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return <p>Loading genres...</p>
    }

    const filteredMovies = selectedGenre ? movies.filter((movie) => movie.genre.includes(selectedGenre)) : movies;
    const handleGenreClick = (genre: string) => {
        setSelectedGenre((prev) => (prev === genre ? null : genre))
    }
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between">
                <div className="text-xl text-[#A3A3A3]">Popular Genres</div>
                <div>
                    <button onClick={() => setSelectedGenre(null)}>View All</button>
                </div>
            </div>

            <GenreButton genres={genres} selectedGenre={selectedGenre} buttonClick={handleGenreClick} />
            
            {!loading && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {
                        filteredMovies.map((movie) => (
                            <Link href={`/movie/${movie.movie_id}`}  key={movie.movie_id}>
                                <div className="flex flex-col gap-3">
                                    <img src={movie.posterUrl} alt={movie.title} className="rounded-lg" />
                                    <div className="text-center">{movie.title}</div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            )}
        </div>
    );
}

export default GenreList;