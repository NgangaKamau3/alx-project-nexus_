import { FaPlay } from "react-icons/fa";
import MatchOfTheDay from "@/components/common/MatchOfTheDay";
import GenreList from "@/components/common/GenreList";
import { useEffect, useState } from "react";
import { MainMovieProps, MovieApiResponse } from "@/interfaces";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [movies, setMovies] = useState<MainMovieProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [randomMovie, setRandomMovie] = useState<MainMovieProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const moviesRes = await axios.get<MovieApiResponse>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/movies/`
        );
        setMovies(moviesRes.data.results);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
    }
  }, [movies]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!randomMovie) {
    return <p>No movie available</p>;
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col-reverse md:flex-row md:h-[500px] w-full pt-6">
        <div className="md:w-1/2 py-10 bg-gradient-to-r from-black via-black/70 to-transparent">
          <div className="flex flex-col justify-center items-center h-full w-3/4 m-auto md:gap-2">
            <div className="text-[11px] bg-[#2C2C2C] font-bold px-1 py-0.5 rounded-lg">MATCH OF THE DAY</div>
            <p className="text-[#1DB954]"><span className="text-lg">78</span>% Match</p>
            <h1 className="md:text-2xl text-[#A3A3A3]">{randomMovie.title}</h1>
            <div className="md:text-base text-sm">
              Drama<span className="text-[#2C2C2C]"> • </span>TV-MA <span className="text-[#2C2C2C]"> • </span> 2019 <span className="text-[#2C2C2C]"> • </span> 1 Season
            </div>
            <p className="text-center text-xs md:text-base">{randomMovie.description}</p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-2 pt-4">
              <button className="flex items-center md:btn btn-primary text-xs md:text-base px-4 py-1 rounded-2xl"><FaPlay size={18} className="pr-2" />Watch On Netflix</button>
              <button className="btn btn-secondary text-xs md:text-base px-4 py-1">More Info</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[350px] md:h-[500px] relative">
          <Image
            src={randomMovie.poster_url}
            alt={randomMovie.title}
            width={800}
            height={500}
            className="w-full h-full"
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
