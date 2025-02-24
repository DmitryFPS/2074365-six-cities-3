import {JSX} from 'react';

function OfferFeaturesList(): JSX.Element {

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        Apartment
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        3 Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max 4 adults
      </li>
    </ul>
  );
}

export default OfferFeaturesList;
