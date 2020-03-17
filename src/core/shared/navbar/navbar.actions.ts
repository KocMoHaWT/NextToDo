import { Action } from '../../store/state';

export enum navbarActions {
  SET_FILTER = '[navbar] set filter',
}

export enum navbarFilters {
  FILTER_ALL = 'all',
  FILTER_IN_PROGRESS = 'in progress',
  FILTER_COMPLETED = 'completed',
}

export class SetFilterAct extends Action {
  readonly type = navbarActions.SET_FILTER;

  constructor(public payload: { filter: navbarFilters }) {
    super();
  }
}

export type NavBarActionsTypes = SetFilterAct;
