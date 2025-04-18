import {JSX, useEffect, useRef} from 'react';
import {ActiveMarkerIcon, Classes, DefaultMarkerIcon} from '../constants/constants.ts';
import {Offers} from '@/types/offer.tsx';
import leaflet, {layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '@/hooks/use-map.tsx';


type LocationMapProps = {
  classType: 'city' | 'offer';
  offers: Offers;
  activeOfferId?: string | null;
}

function LocationMap({classType, offers, activeOfferId}: LocationMapProps): JSX.Element {

  const offerClasses = Classes[classType];
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const {location} = offers[0].city;
  const map = useMap({location: location, containerRef: mapContainerRef});

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location.latitude, location.longitude, location.zoom]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: offer.id === activeOfferId ? ActiveMarkerIcon : DefaultMarkerIcon
          })
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [activeOfferId, map, offers]);

  return <section className={`${offerClasses.map} map`} ref={mapContainerRef}/>;
}

export default LocationMap;
