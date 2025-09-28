// import { AddPercentageProps, MainMovieProps } from "@/interfaces";

// export const MOVIEGENRES = [
//   "Action",
//   "Adventure",
//   "Comedy",
//   "Drama",
//   "Sci-Fi",
//   "Fantasy",
//   "Horror",
//   "Thriller",
//   "Romance",
//   "Documentary",
//   "Animation",
//   "Mystery"
// ]

// export const MOVIES = [
//   {
//     "id": 1,
//     "title": "Movie Title 1",
//     "year": 2021,
//     "genre": [
//       "Comedy",
//       "Romance"
//     ],
//     "rating": 5.6,
//     "duration": 105,
//     "language": "English",
//     "releaseDate": "2021-02-15",
//     "director": "Director 1",
//     "cast": [
//       "Actor 1A",
//       "Actor 1B",
//       "Actor 1C"
//     ],
//     "plot": "This is the plot for Movie 1, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-1.webp",
//     "backdropUrl": "/assets/movies/movie-1-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer1",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User1A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User1B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "R",
//     "boxOffice": "$60M",
//     "awards": [],
//     "tags": [
//       "comedy",
//       "lighthearted"
//     ],
//     "whereToWatch": [
//       "Disney+",
//       "Hulu"
//     ],
//     "addedAt": "2024-02-01T12:00:00Z"
//   },
//   {
//     "id": 2,
//     "title": "Movie Title 2",
//     "year": 2022,
//     "genre": [
//       "Action",
//       "Drama"
//     ],
//     "rating": 6.2,
//     "duration": 120,
//     "language": "English",
//     "releaseDate": "2022-03-15",
//     "director": "Director 2",
//     "cast": [
//       "Actor 2A",
//       "Actor 2B",
//       "Actor 2C"
//     ],
//     "plot": "This is the plot for Movie 2, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-2.webp",
//     "backdropUrl": "/assets/movies/movie-2-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer2",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User2A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User2B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "PG-13",
//     "boxOffice": "$70M",
//     "awards": [],
//     "tags": [
//       "thriller",
//       "action",
//       "mystery"
//     ],
//     "whereToWatch": [
//       "Netflix",
//       "Amazon Prime"
//     ],
//     "addedAt": "2024-03-01T12:00:00Z"
//   },
//   {
//     "id": 3,
//     "title": "Movie Title 3",
//     "year": 2023,
//     "genre": [
//       "Comedy",
//       "Romance"
//     ],
//     "rating": 6.8,
//     "duration": 135,
//     "language": "English",
//     "releaseDate": "2023-04-15",
//     "director": "Director 3",
//     "cast": [
//       "Actor 3A",
//       "Actor 3B",
//       "Actor 3C"
//     ],
//     "plot": "This is the plot for Movie 3, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-3.webp",
//     "backdropUrl": "/assets/movies/movie-3-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer3",
//     "isFeatured": true,
//     "reviews": [
//       {
//         "user": "User3A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User3B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "R",
//     "boxOffice": "$80M",
//     "awards": [],
//     "tags": [
//       "comedy",
//       "lighthearted"
//     ],
//     "whereToWatch": [
//       "Disney+",
//       "Hulu"
//     ],
//     "addedAt": "2024-04-01T12:00:00Z"
//   },
//   {
//     "id": 4,
//     "title": "Movie Title 4",
//     "year": 2024,
//     "genre": [
//       "Action",
//       "Drama"
//     ],
//     "rating": 7.4,
//     "duration": 90,
//     "language": "English",
//     "releaseDate": "2024-05-15",
//     "director": "Director 4",
//     "cast": [
//       "Actor 4A",
//       "Actor 4B",
//       "Actor 4C"
//     ],
//     "plot": "This is the plot for Movie 4, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-4.webp",
//     "backdropUrl": "/assets/movies/movie-4-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer4",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User4A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User4B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "PG-13",
//     "boxOffice": "$90M",
//     "awards": [
//       "Best Soundtrack"
//     ],
//     "tags": [
//       "thriller",
//       "action",
//       "mystery"
//     ],
//     "whereToWatch": [
//       "Netflix",
//       "Amazon Prime"
//     ],
//     "addedAt": "2024-05-01T12:00:00Z"
//   },
//   {
//     "id": 5,
//     "title": "Movie Title 5",
//     "year": 2025,
//     "genre": [
//       "Comedy",
//       "Romance"
//     ],
//     "rating": 5.0,
//     "duration": 105,
//     "language": "English",
//     "releaseDate": "2025-06-15",
//     "director": "Director 5",
//     "cast": [
//       "Actor 5A",
//       "Actor 5B",
//       "Actor 5C"
//     ],
//     "plot": "This is the plot for Movie 5, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-5.webp",
//     "backdropUrl": "/assets/movies/movie-5-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer5",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User5A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User5B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "R",
//     "boxOffice": "$100M",
//     "awards": [],
//     "tags": [
//       "comedy",
//       "lighthearted"
//     ],
//     "whereToWatch": [
//       "Disney+",
//       "Hulu"
//     ],
//     "addedAt": "2024-06-01T12:00:00Z"
//   },
//   {
//     "id": 6,
//     "title": "Movie Title 6",
//     "year": 2020,
//     "genre": [
//       "Action",
//       "Drama"
//     ],
//     "rating": 5.6,
//     "duration": 120,
//     "language": "English",
//     "releaseDate": "2020-07-15",
//     "director": "Director 6",
//     "cast": [
//       "Actor 6A",
//       "Actor 6B",
//       "Actor 6C"
//     ],
//     "plot": "This is the plot for Movie 6, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-6.webp",
//     "backdropUrl": "/assets/movies/movie-6-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer6",
//     "isFeatured": true,
//     "reviews": [
//       {
//         "user": "User6A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User6B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "PG-13",
//     "boxOffice": "$110M",
//     "awards": [],
//     "tags": [
//       "thriller",
//       "action",
//       "mystery"
//     ],
//     "whereToWatch": [
//       "Netflix",
//       "Amazon Prime"
//     ],
//     "addedAt": "2024-07-01T12:00:00Z"
//   },
//   {
//     "id": 7,
//     "title": "Movie Title 7",
//     "year": 2021,
//     "genre": [
//       "Comedy",
//       "Romance"
//     ],
//     "rating": 6.2,
//     "duration": 135,
//     "language": "English",
//     "releaseDate": "2021-08-15",
//     "director": "Director 7",
//     "cast": [
//       "Actor 7A",
//       "Actor 7B",
//       "Actor 7C"
//     ],
//     "plot": "This is the plot for Movie 7, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-7.webp",
//     "backdropUrl": "/assets/movies/movie-7-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer7",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User7A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User7B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "R",
//     "boxOffice": "$120M",
//     "awards": [],
//     "tags": [
//       "comedy",
//       "lighthearted"
//     ],
//     "whereToWatch": [
//       "Disney+",
//       "Hulu"
//     ],
//     "addedAt": "2024-08-01T12:00:00Z"
//   },
//   {
//     "id": 8,
//     "title": "Movie Title 8",
//     "year": 2022,
//     "genre": [
//       "Action",
//       "Drama"
//     ],
//     "rating": 6.8,
//     "duration": 90,
//     "language": "English",
//     "releaseDate": "2022-09-15",
//     "director": "Director 8",
//     "cast": [
//       "Actor 8A",
//       "Actor 8B",
//       "Actor 8C"
//     ],
//     "plot": "This is the plot for Movie 8, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-8.webp",
//     "backdropUrl": "/assets/movies/movie-8-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer8",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User8A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User8B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "PG-13",
//     "boxOffice": "$130M",
//     "awards": [
//       "Best Soundtrack"
//     ],
//     "tags": [
//       "thriller",
//       "action",
//       "mystery"
//     ],
//     "whereToWatch": [
//       "Netflix",
//       "Amazon Prime"
//     ],
//     "addedAt": "2024-09-01T12:00:00Z"
//   },
//   {
//     "id": 9,
//     "title": "Movie Title 9",
//     "year": 2023,
//     "genre": [
//       "Comedy",
//       "Romance"
//     ],
//     "rating": 7.4,
//     "duration": 105,
//     "language": "English",
//     "releaseDate": "2023-01-15",
//     "director": "Director 9",
//     "cast": [
//       "Actor 9A",
//       "Actor 9B",
//       "Actor 9C"
//     ],
//     "plot": "This is the plot for Movie 9, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-9.webp",
//     "backdropUrl": "/assets/movies/movie-9-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer9",
//     "isFeatured": true,
//     "reviews": [
//       {
//         "user": "User9A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User9B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "R",
//     "boxOffice": "$140M",
//     "awards": [],
//     "tags": [
//       "comedy",
//       "lighthearted"
//     ],
//     "whereToWatch": [
//       "Disney+",
//       "Hulu"
//     ],
//     "addedAt": "2024-01-01T12:00:00Z"
//   },
//   {
//     "id": 10,
//     "title": "Movie Title 10",
//     "year": 2024,
//     "genre": [
//       "Action",
//       "Drama"
//     ],
//     "rating": 5.0,
//     "duration": 120,
//     "language": "English",
//     "releaseDate": "2024-02-15",
//     "director": "Director 10",
//     "cast": [
//       "Actor 10A",
//       "Actor 10B",
//       "Actor 10C"
//     ],
//     "plot": "This is the plot for Movie 10, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-10.webp",
//     "backdropUrl": "/assets/movies/movie-10-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer10",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User10A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User10B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "PG-13",
//     "boxOffice": "$150M",
//     "awards": [],
//     "tags": [
//       "thriller",
//       "action",
//       "mystery"
//     ],
//     "whereToWatch": [
//       "Netflix",
//       "Amazon Prime"
//     ],
//     "addedAt": "2024-02-01T12:00:00Z"
//   },
//   {
//     "id": 11,
//     "title": "Movie Title 11",
//     "year": 2025,
//     "genre": [
//       "Comedy",
//       "Romance"
//     ],
//     "rating": 5.6,
//     "duration": 135,
//     "language": "English",
//     "releaseDate": "2025-03-15",
//     "director": "Director 11",
//     "cast": [
//       "Actor 11A",
//       "Actor 11B",
//       "Actor 11C"
//     ],
//     "plot": "This is the plot for Movie 11, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-11.webp",
//     "backdropUrl": "/assets/movies/movie-11-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer11",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User11A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User11B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "R",
//     "boxOffice": "$160M",
//     "awards": [],
//     "tags": [
//       "comedy",
//       "lighthearted"
//     ],
//     "whereToWatch": [
//       "Disney+",
//       "Hulu"
//     ],
//     "addedAt": "2024-03-01T12:00:00Z"
//   },
//   {
//     "id": 12,
//     "title": "Movie Title 12",
//     "year": 2020,
//     "genre": [
//       "Action",
//       "Drama"
//     ],
//     "rating": 6.2,
//     "duration": 90,
//     "language": "English",
//     "releaseDate": "2020-04-15",
//     "director": "Director 12",
//     "cast": [
//       "Actor 12A",
//       "Actor 12B",
//       "Actor 12C"
//     ],
//     "plot": "This is the plot for Movie 12, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-12.webp",
//     "backdropUrl": "/assets/movies/movie-12-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer12",
//     "isFeatured": true,
//     "reviews": [
//       {
//         "user": "User12A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User12B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "PG-13",
//     "boxOffice": "$170M",
//     "awards": [
//       "Best Soundtrack"
//     ],
//     "tags": [
//       "thriller",
//       "action",
//       "mystery"
//     ],
//     "whereToWatch": [
//       "Netflix",
//       "Amazon Prime"
//     ],
//     "addedAt": "2024-04-01T12:00:00Z"
//   },
//   {
//     "id": 13,
//     "title": "Movie Title 13",
//     "year": 2021,
//     "genre": [
//       "Comedy",
//       "Romance"
//     ],
//     "rating": 6.8,
//     "duration": 105,
//     "language": "English",
//     "releaseDate": "2021-05-15",
//     "director": "Director 13",
//     "cast": [
//       "Actor 13A",
//       "Actor 13B",
//       "Actor 13C"
//     ],
//     "plot": "This is the plot for Movie 13, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-13.webp",
//     "backdropUrl": "/assets/movies/movie-13-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer13",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User13A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User13B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "R",
//     "boxOffice": "$180M",
//     "awards": [],
//     "tags": [
//       "comedy",
//       "lighthearted"
//     ],
//     "whereToWatch": [
//       "Disney+",
//       "Hulu"
//     ],
//     "addedAt": "2024-05-01T12:00:00Z"
//   },
//   {
//     "id": 14,
//     "title": "Movie Title 14",
//     "year": 2022,
//     "genre": [
//       "Action",
//       "Drama"
//     ],
//     "rating": 7.4,
//     "duration": 120,
//     "language": "English",
//     "releaseDate": "2022-06-15",
//     "director": "Director 14",
//     "cast": [
//       "Actor 14A",
//       "Actor 14B",
//       "Actor 14C"
//     ],
//     "plot": "This is the plot for Movie 14, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-14.webp",
//     "backdropUrl": "/assets/movies/movie-14-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer14",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User14A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User14B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "PG-13",
//     "boxOffice": "$190M",
//     "awards": [],
//     "tags": [
//       "thriller",
//       "action",
//       "mystery"
//     ],
//     "whereToWatch": [
//       "Netflix",
//       "Amazon Prime"
//     ],
//     "addedAt": "2024-06-01T12:00:00Z"
//   },
//   {
//     "id": 15,
//     "title": "Movie Title 15",
//     "year": 2023,
//     "genre": [
//       "Comedy",
//       "Romance"
//     ],
//     "rating": 5.0,
//     "duration": 135,
//     "language": "English",
//     "releaseDate": "2023-07-15",
//     "director": "Director 15",
//     "cast": [
//       "Actor 15A",
//       "Actor 15B",
//       "Actor 15C"
//     ],
//     "plot": "This is the plot for Movie 15, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-15.webp",
//     "backdropUrl": "/assets/movies/movie-15-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer15",
//     "isFeatured": true,
//     "reviews": [
//       {
//         "user": "User15A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User15B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "R",
//     "boxOffice": "$200M",
//     "awards": [],
//     "tags": [
//       "comedy",
//       "lighthearted"
//     ],
//     "whereToWatch": [
//       "Disney+",
//       "Hulu"
//     ],
//     "addedAt": "2024-07-01T12:00:00Z"
//   },
//   {
//     "id": 16,
//     "title": "Movie Title 16",
//     "year": 2024,
//     "genre": [
//       "Action",
//       "Drama"
//     ],
//     "rating": 5.6,
//     "duration": 90,
//     "language": "English",
//     "releaseDate": "2024-08-15",
//     "director": "Director 16",
//     "cast": [
//       "Actor 16A",
//       "Actor 16B",
//       "Actor 16C"
//     ],
//     "plot": "This is the plot for Movie 16, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-16.webp",
//     "backdropUrl": "/assets/movies/movie-16-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer16",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User16A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User16B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "PG-13",
//     "boxOffice": "$210M",
//     "awards": [
//       "Best Soundtrack"
//     ],
//     "tags": [
//       "thriller",
//       "action",
//       "mystery"
//     ],
//     "whereToWatch": [
//       "Netflix",
//       "Amazon Prime"
//     ],
//     "addedAt": "2024-08-01T12:00:00Z"
//   },
//   {
//     "id": 17,
//     "title": "Movie Title 17",
//     "year": 2025,
//     "genre": [
//       "Comedy",
//       "Romance"
//     ],
//     "rating": 6.2,
//     "duration": 105,
//     "language": "English",
//     "releaseDate": "2025-09-15",
//     "director": "Director 17",
//     "cast": [
//       "Actor 17A",
//       "Actor 17B",
//       "Actor 17C"
//     ],
//     "plot": "This is the plot for Movie 17, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-17.webp",
//     "backdropUrl": "/assets/movies/movie-17-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer17",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User17A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User17B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "R",
//     "boxOffice": "$220M",
//     "awards": [],
//     "tags": [
//       "comedy",
//       "lighthearted"
//     ],
//     "whereToWatch": [
//       "Disney+",
//       "Hulu"
//     ],
//     "addedAt": "2024-09-01T12:00:00Z"
//   },
//   {
//     "id": 18,
//     "title": "Movie Title 18",
//     "year": 2020,
//     "genre": [
//       "Action",
//       "Drama"
//     ],
//     "rating": 6.8,
//     "duration": 120,
//     "language": "English",
//     "releaseDate": "2020-01-15",
//     "director": "Director 18",
//     "cast": [
//       "Actor 18A",
//       "Actor 18B",
//       "Actor 18C"
//     ],
//     "plot": "This is the plot for Movie 18, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-18.webp",
//     "backdropUrl": "/assets/movies/movie-18-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer18",
//     "isFeatured": true,
//     "reviews": [
//       {
//         "user": "User18A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User18B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "PG-13",
//     "boxOffice": "$230M",
//     "awards": [],
//     "tags": [
//       "thriller",
//       "action",
//       "mystery"
//     ],
//     "whereToWatch": [
//       "Netflix",
//       "Amazon Prime"
//     ],
//     "addedAt": "2024-01-01T12:00:00Z"
//   },
//   {
//     "id": 19,
//     "title": "Movie Title 19",
//     "year": 2021,
//     "genre": [
//       "Comedy",
//       "Romance"
//     ],
//     "rating": 7.4,
//     "duration": 135,
//     "language": "English",
//     "releaseDate": "2021-02-15",
//     "director": "Director 19",
//     "cast": [
//       "Actor 19A",
//       "Actor 19B",
//       "Actor 19C"
//     ],
//     "plot": "This is the plot for Movie 19, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-19.webp",
//     "backdropUrl": "/assets/movies/movie-19-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer19",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User19A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User19B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "R",
//     "boxOffice": "$240M",
//     "awards": [],
//     "tags": [
//       "comedy",
//       "lighthearted"
//     ],
//     "whereToWatch": [
//       "Disney+",
//       "Hulu"
//     ],
//     "addedAt": "2024-02-01T12:00:00Z"
//   },
//   {
//     "id": 20,
//     "title": "Movie Title 20",
//     "year": 2022,
//     "genre": [
//       "Action",
//       "Drama"
//     ],
//     "rating": 5.0,
//     "duration": 90,
//     "language": "English",
//     "releaseDate": "2022-03-15",
//     "director": "Director 20",
//     "cast": [
//       "Actor 20A",
//       "Actor 20B",
//       "Actor 20C"
//     ],
//     "plot": "This is the plot for Movie 20, a thrilling journey full of surprises.",
//     "posterUrl": "/assets/movies/movie-20.webp",
//     "backdropUrl": "/assets/movies/movie-20-backdrop.webp",
//     "trailerUrl": "https://youtube.com/watch?v=trailer20",
//     "isFeatured": false,
//     "reviews": [
//       {
//         "user": "User20A",
//         "comment": "Loved it!",
//         "stars": 4
//       },
//       {
//         "user": "User20B",
//         "comment": "It was okay.",
//         "stars": 3
//       }
//     ],
//     "ageRating": "PG-13",
//     "boxOffice": "$250M",
//     "awards": [
//       "Best Soundtrack"
//     ],
//     "tags": [
//       "thriller",
//       "action",
//       "mystery"
//     ],
//     "whereToWatch": [
//       "Netflix",
//       "Amazon Prime"
//     ],
//     "addedAt": "2024-03-01T12:00:00Z"
//   }
// ]



// export const addPercentage = (movies: MainMovieProps[]): AddPercentageProps[] =>
//   movies.map((movie) => ({
//     ...movie,
//     releaseDate: new Date(movie.releaseDate),
//     percentage: `${Math.round(movie.rating * 10)}%`,
//   }));


// export const MOVIE_DATA = addPercentage(MOVIES);

