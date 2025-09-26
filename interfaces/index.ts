import { ReactNode } from "react";

export interface ComponentProps {
    children: ReactNode;
}

export interface MainMovieProps {
    id:           number;
    title:        string;
    year:         number;
    genre:        string[];
    rating:       number;
    duration:     number;
    language:     string;
    releaseDate:  string;
    director:     string;
    cast:         string[];
    plot:         string;
    posterUrl:    string;
    trailerUrl:   string;
    isFeatured:   boolean;
    reviews:      Review[];
    ageRating:    string;
    boxOffice:    string;
    awards:       any[];
    tags:         string[];
    whereToWatch: string[];
    addedAt:      string;
}

export interface Review {
    user:    string;
    comment: string;
    stars:   number;
}

export interface AddPercentageProps extends Omit<MainMovieProps, "releaseDate"> {
    percentage: string;
    releaseDate: Date;
}

export type MatchDay = Pick<AddPercentageProps, "id" | "posterUrl" | "title" | "percentage">;

export interface GetRandomMovieProps {
    count: number;
    movies: AddPercentageProps[];
}

export interface GenreProps {
    selectedGenre: string | null;
    buttonClick: (genre: string) => void;
}