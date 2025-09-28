// import { MOVIEGENRES } from "@/constants"
import { GenreProps } from "@/interfaces";

const GenreButton: React.FC<GenreProps> = ({ selectedGenre, buttonClick, genres }) => {

    return (
        <div className="flex overflow-x-auto no-scrollbar space-x-4">
            {
                genres.map((genre) => (
                    <div className="w-32" key={genre.id}>
                        <button
                            onClick={() => buttonClick(genre.name)}
                            className={`w-full btn ${selectedGenre === genre.name ? "btn-active" : "btn-secondary"
                                }`}
                        >
                            {genre.name}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default GenreButton;