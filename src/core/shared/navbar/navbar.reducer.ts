import { navbarFilters } from './navbar.actions';
import { NavBarState } from './navbar.state';
import * as acts from './navbar.actions';

const initialState: NavBarState = {
  filter: navbarFilters.FILTER_ALL,
};

export default function(state = initialState, action: acts.NavBarActionsTypes): NavBarState {
  switch (action.type) {
    case acts.navbarActions.SET_FILTER: {
      const {
        payload: { filter },
      } = action as acts.SetFilterAct;
      return { filter };
    }

    default:
      return state;
  }
}
