import { MainMovieProps, MovieApiResponse } from "@/interfaces"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const MatchOfTheDay: React.FC = () => {
    const [movies, setMovies] = useState<MainMovieProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const moviesRes = await axios.get<MovieApiResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/movies/`)
                setMovies(moviesRes.data.results);
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData()
    }, [])

    const [randomMovies, setRandomMovies] = useState<typeof movies>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (movies.length > 0) {
            const shuffled = [...movies].sort(() => Math.random() - 0.5).slice(0, 10);
            setRandomMovies(shuffled);
        }
    }, [movies]);

    if (loading) {
        return <p>Loading...</p>
    }

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    }

    return (
        <div className="relative group">
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 z-10 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
                <BiChevronLeft size={28} />
            </button>
            <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 px-6">
                {
                    randomMovies.map(({ posterUrl, title, movie_id }: MainMovieProps) => (
                        <Link href={`/movie/${movie_id}`} key={movie_id}>
                            <div className="flex-shrink-0 w-[250px]">
                                <div className="w-full">
                                    <Image
                                        src={posterUrl}
                                        alt={title}
                                        fill
                                        className="object-cover w-full h-[150px] rounded-lg"
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="truncate">{title}</div>
                                    <div>{Math.floor(Math.random() * 100)}%</div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition"
            >
                <BiChevronRight size={28} />
            </button>
        </div>
    )
}

export default MatchOfTheDay;