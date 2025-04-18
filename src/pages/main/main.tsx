import {JSX, useEffect} from 'react';
import MainLocationsList from './components/main-locations-list.tsx';
import {useAppDispatch, useAppSelector} from '@/hooks';
import MainEmptyCities from '@/pages/main/components/main-empty-cities.tsx';
import MainCities from '@/pages/main/components/main-cities.tsx';
import {Helmet} from 'react-helmet-async';
import {State} from '@/types/state';
import {fetchOffersAction} from '@/store/api-actions.ts';
import LoadingScreen from '@/pages/loading-screen/loading-screen.tsx';

const filterOffers = (state: State) =>
  state.offers.filter((offer) =>
    offer.city.name === state.city.name);

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector(filterOffers);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  useEffect(() => {
    if (currentOffers.length !== 0) {
      return;
    }

    dispatch(fetchOffersAction());
  }, [dispatch, currentOffers.length]);

  if (isDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  const isEmpty = currentOffers.length === 0;
  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>{currentCity.name}</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <MainLocationsList/>
        </section>
      </div>
      <div className="cities">
        {isEmpty
          ? <MainEmptyCities cityName={currentCity.name}/>
          : <MainCities currentCity={currentCity} currentOffers={currentOffers}/>}
      </div>
    </main>
  );
}

export default Main;
