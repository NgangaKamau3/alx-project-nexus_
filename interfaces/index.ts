import { ReactNode } from "react";

export interface ComponentProps {
    children: ReactNode;
}

export interface MovieApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: MainMovieProps[];
}

export interface MainMovieProps {
    movie_id: number;
    title: string;
    year?: number;
    genres: string[];
    rating?: number;
    duration?: number;
    language?: string;
    release_date: string;
    director?: string;
    cast?: string[];
    description: string;
    poster_url: string;
    backdropUrl?: string;
    trailerUrl?: string;
    isFeatured?: boolean;
    reviews?: Review[];
    ageRating?: string;
    boxOffice?: string;
    awards?: any[];
    tags?: string[];
    whereToWatch?: string[];
    addedAt?: string;
}

export interface Review {
    user: string;
    comment: string;
    stars: number;
}

export interface AddPercentageProps extends Omit<MainMovieProps, "releaseDate"> {
    percentage?: string;
    releaseDate?: Date;
}

export type MatchDay = Pick<AddPercentageProps, "movie_id" | "poster_url" | "title" | "percentage">;

export interface GetRandomMovieProps {
    count: number;
    movies: AddPercentageProps[];
}

export interface GenreApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: GenreTypesProps[];
}

export interface GenreTypesProps {
    id: number;
    name: string;
}

export interface GenreProps {
    genres: GenreTypesProps[];
    selectedGenre: string | null;
    buttonClick: (genre: string) => void;
}