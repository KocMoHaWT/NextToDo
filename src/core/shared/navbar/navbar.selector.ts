import { AppState } from '../../store/state';

export const getFilter = ({ filter: { filter } }: AppState): string => filter;
