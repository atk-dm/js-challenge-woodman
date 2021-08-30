import useSWR from 'swr';
import { usePosition } from 'use-position';
import BreweryHeroItem, { LoadingBreweryHeroItem } from '../BreweryHeroItem';
import { usePositionContext } from '../../utils/PositionContext';

const FeaturedBrewery = () => {
  // get position data from Position Context
  const { currentPos, defaultPos } = usePositionContext();

  // console.log(currentPos, defaultPos);

  //if user location provided then use, if not use the fall back: default position
  const openBreweryURL = `https://api.openbrewerydb.org/breweries?by_dist${
    currentPos.latitude ? currentPos.latitude : defaultPos.latitude
  },${
    currentPos.longitude ? currentPos.longitude : defaultPos.longitude
  }&per_page=1`;

  // console.log(openBreweryURL);

  const { data, error } = useSWR(openBreweryURL);

  if (currentPos.geoError) return null;
  if (error || data?.length === 0) return 'An error has occurred.';
  if (!data) return <LoadingBreweryHeroItem />;

  return <BreweryHeroItem brewery={data?.[0]} />;
};

export default FeaturedBrewery;
