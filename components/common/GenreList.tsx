import { MOVIE_DATA } from "@/constants";
import { useState } from "react";
import GenreButton from "./GenreButton";

const GenreList: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

    const filteredMovies = selectedGenre ? MOVIE_DATA.filter((movie) => movie.genre.includes(selectedGenre)) : MOVIE_DATA;
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
            <GenreButton selectedGenre={selectedGenre} buttonClick={handleGenreClick} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                    filteredMovies.map((movie) => (
                        <div key={movie.id} className="flex flex-col gap-3">
                            <img src={movie.posterUrl} alt={movie.title} className="rounded-lg"/>
                            <div className="text-center">{movie.title}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default GenreList;