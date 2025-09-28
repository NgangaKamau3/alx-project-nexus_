import { FaPlay } from "react-icons/fa";
import MatchOfTheDay from "@/components/common/MatchOfTheDay";
import GenreList from "@/components/common/GenreList";

export default function Home() {
    return (
    <div className="min-h-screen">
      <div className="flex flex-col-reverse md:flex-row md:h-[500px] w-full">
        <div className="md:w-1/2 py-10 bg-gradient-to-r from-black via-black/70 to-transparent">
          <div className="flex flex-col justify-center items-center h-full w-3/4 m-auto md:gap-2">
            <div className="text-[11px] bg-[#2C2C2C] font-bold px-1 py-0.5 rounded-lg">MATCH OF THE DAY</div>
            <p className="text-[#1DB954]"><span className="text-lg">78</span>% Match</p>
            <h1 className="text-2xl text-[#A3A3A3]">The Spy</h1>
            <div>
              Drama<span className="text-[#2C2C2C]"> • </span>TV-MA <span className="text-[#2C2C2C]"> • </span> 2019 <span className="text-[#2C2C2C]"> • </span> 1 Season
            </div>
            <p className="text-center">In the 1960s, Israeli clerk-turned-secret agent Eli Cohen. This is the plot for Movie 3, a thrilling journey full of surprises. This is the plot for Movie 3, a thrilling journey full of surprises. This is the plot for Movie 3, a thrilling journey full of surprises.</p>
            <div className="flex flex-col md:flex-row gap-2">
              <button className="flex items-center btn btn-primary"><FaPlay size={18} className="pr-2" />Watch On Netflix</button>
              <button className="btn btn-secondary">More Info</button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={"/assets/movies/movie-1-backdrop.webp"}
            alt="Backdrop"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="my-10">
        <MatchOfTheDay />
      </div>
      <div>
        <GenreList />
      </div>
    </div>
  );
}
