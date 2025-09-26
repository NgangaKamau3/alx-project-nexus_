import { MOVIE_DATA } from "@/constants";
import { AddPercentageProps, GetRandomMovieProps, MatchDay } from "@/interfaces"
import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const MatchOfTheDay: React.FC = () => {
    const [randomMovies, setRandomMovies] = useState<typeof MOVIE_DATA>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const shuffled = [...MOVIE_DATA].sort(() => Math.random() - 0.5).slice(0, 10);
        setRandomMovies(shuffled);
    }, []);

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
                    randomMovies.map(({ posterUrl, title, percentage, id }: MatchDay) => (
                        <div key={id} className="flex-shrink-0 w-[250px]">
                            <div className="w-full"><img src={posterUrl} alt={title} className="w-full h-[150px] object-cover rounded-lg" /></div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="truncate">{title}</div>
                                <div>{percentage}</div>
                            </div>
                        </div>
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