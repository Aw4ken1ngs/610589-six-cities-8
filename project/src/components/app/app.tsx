import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Error from '../error/error';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Login from '../login/login';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import RoomScreen from '../room-screen/room-screen';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

type AppScreenProps = {
  offers: Offer[];
  reviews: Review[];
}

function App({ offers, reviews }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <RoomScreen
            offers={offers}
            reviews={reviews}
            setNewReviews={(formData) => {
              // eslint-disable-next-line no-alert
              alert(`Function 'setNewReviews' isn't implemented. setRating: ${formData.rating} setComment: ${formData.comment}`);
            }}
          />
        </Route>
        <Route>
          <Error />
        </Route>
        <Route>
          <FavoritesEmpty />
        </Route>
        <Route>
          <MainPageEmpty />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
