import { atom } from 'nanostores';
// import Upcoming from '../container/movies/upcoming.astro';
// import Toprated from '../container/movies/toprated.astro';
const initialV = {
    render: '(<Upcoming />)'
}
const render = atom(initialV)

const renderTopRated = () => render.set({ render:  '(<Toprated />) '})

export { initialV, renderTopRated}