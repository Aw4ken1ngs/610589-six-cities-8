import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Error from '../error/error';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Login from '../login/login';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import Offer from '../offer/offer';
import Property from '../property/property';
import PropertyNotLogged from '../property-not-logged/property-not-logged';

type AppScreenProps = {
  cardCount: number;
}

function App({ cardCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            cardCount={cardCount}
          />
        </Route>
        <Route exact path={AppRoute.Property}>
          <Property />
        </Route>
        <Route exact path={AppRoute.FavoritesEmpty}>
          <FavoritesEmpty />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <Route exact path={AppRoute.MainPageEmpty}>
          <MainPageEmpty />
        </Route>
        <Route exact path={AppRoute.Room}>
          <Offer />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.PropertyNotLogged}>
          <PropertyNotLogged />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
