export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  FavoritesEmpty = '/FavoritesEmpty',
  MainPageEmpty = '/MainPageEmpty',
  Property = '/Property',
  PropertyNotLogged = '/PropertyNotLogged',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
