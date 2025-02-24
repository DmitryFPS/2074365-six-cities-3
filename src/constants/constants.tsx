export const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

export const SortType = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first'
} as const;

export const Classes = {
  city: {
    wrapper: 'cities__card',
    imageWrapper: 'cities__image-wrapper',
    map: 'cities__map',
    mark: 'place-card__mark'
  },
  favorite: {
    wrapper: 'favorites__card',
    imageWrapper: 'favorites__image-wrapper'
  },
  offer: {
    wrapper: 'near-places__card',
    imageWrapper: 'near-places__image-wrapper',
    map: 'offer__map',
    mark: 'offer__mark'
  }
} as const;

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

export type AppRouteType = (typeof AppRoute)[keyof typeof AppRoute];

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export type AuthorizationStatusType = (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
