import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'eeb722ebd0msh6339b3c3a4ce3c7p1f99fajsn977073317c01');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTrack: builder.query({query: () => '/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv' }),
        getSongDetails: builder.query({query: (songid) => `/tracks/details?track_id=${songid}`}),
        getSongsByGenre: builder.query({query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        getSongRelated: builder.query({ query: (songid) => `/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
        getSongsBySearch: builder.query({query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`})
    }),
});

export const {
    usegetTrackQuery,
    useGetSongDetailsQuery,
    useGetSongsByGenreQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery
} = spotifyApi;
