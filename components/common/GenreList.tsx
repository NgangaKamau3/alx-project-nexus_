import { useEffect, useState } from "react";
import GenreButton from "./GenreButton";
import Link from "next/link";
import {
    GenreApiResponse,
    GenreTypesProps,
    MainMovieProps,
    MovieApiResponse,
} from "@/interfaces";
import axios from "axios";
import Image from "next/image";

const GenreList: React.FC = () => {
    const [movies, setMovies] = useState<MainMovieProps[]>([]);
    const [genres, setGenres] = useState<GenreTypesProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAllPages = async <T,>(url: string): Promise<T[]> => {
        let results: T[] = [];
        let nextUrl: string | null = url;

        try {
            while (nextUrl) {
                const { data } = await axios.get(url);
                results = [...results, ...data.results];
                nextUrl = data.next; 
                url = nextUrl ?? ""; 
            }
        } catch (err) {
            console.error("Error fetching paginated data:", err);
        }

        return results;
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const [allGenres, allMovies] = await Promise.all([
                    fetchAllPages<GenreTypesProps>(
                        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/genres/`
                    ),
                    fetchAllPages<MainMovieProps>(
                        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/movies/`
                    ),
                ]);

                setGenres(allGenres);
                setMovies(allMovies);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleGenreClick = (genre: string) => {
        setSelectedGenre((prev) => (prev === genre ? null : genre));
    };


    const filteredMovies = selectedGenre
        ? movies.filter((movie) => movie.genres.includes(selectedGenre))
        : movies;

    if (loading) {
        return <p>Loading genres...</p>;
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between">
                <h2 className="text-xl text-[#A3A3A3]">Popular Genres</h2>
                <button
                    onClick={() => setSelectedGenre(null)}
                    className="text-blue-500 hover:underline"
                >
                    View All
                </button>
            </div>

            <GenreButton
                genres={genres}
                selectedGenre={selectedGenre}
                buttonClick={handleGenreClick}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {filteredMovies.map((movie) => (
                    <Link href={`/movie/${movie.movie_id}`} key={movie.movie_id}>
                        <div className="flex flex-col gap-3">
                            <Image
                                src={movie.poster_url}
                                alt={movie.title}
                                width={350}
                                height={150}
                                className="w-full rounded-lg"
                            />
                            <div className="text-center">{movie.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default GenreList;