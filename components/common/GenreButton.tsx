import { MOVIEGENRES } from "@/constants"
import { GenreProps } from "@/interfaces";

const GenreButton: React.FC<GenreProps> = ({ selectedGenre, buttonClick }) => {
    return (
        <div className="flex overflow-x-auto no-scrollbar space-x-4">
            {
                MOVIEGENRES.map((genre) => (
                    <div className="w-32">
                        <button
                            key={genre}
                            onClick={() => buttonClick(genre)}
                            className={`w-full btn ${selectedGenre === genre ? "btn-active" : "btn-secondary"
                                }`}
                        >
                            {genre}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default GenreButton;