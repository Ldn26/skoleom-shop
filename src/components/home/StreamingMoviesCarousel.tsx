import PosterCarousel from '../common/PosterCarousel';
import { useStreamingPosterItems } from '../../hooks/useStreamingPosterItems';

/** Carrousel « Nouveautés » — front partagé (PosterCarousel), alimenté par TMDB. */
export default function StreamingMoviesCarousel() {
  const items = useStreamingPosterItems();

  return <PosterCarousel items={items} />;
}
