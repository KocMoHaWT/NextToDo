import { applyMiddleware, Store, createStore, compose } from 'redux';
import reducers from './reducers';

export default function configureStore(initialState = {}): Store {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const devTools = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const actionTransform = () => next => action => {
    const act = action.toJSON ? action.toJSON() : action;
    return next(act);
  };

  const composeEnhancers = devTools
    ? devTools({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        trace: true,
      })
    : compose;
  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(actionTransform)));
  return store;
}
