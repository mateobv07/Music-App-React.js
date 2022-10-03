import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'eeb722ebd0msh6339b3c3a4ce3c7p1f99fajsn977073317c01');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world' }),
        getSongDetails: builder.query({query: (songid) => `/tracks/details?track_id=${songid}`}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery
} = shazamCoreApi;
