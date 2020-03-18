import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { AppState } from '../store/state';
import configureStore from '../store/configureStore';

interface Props {
  children: ReactNode;
}

interface ContainerProps extends Props {
  store: AppState;
}

const Container: React.FunctionComponent<ContainerProps> = ({ store, children }) => {
  return <Provider store={store}>{children}</Provider>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StoreLayout = (withRedux(configureStore)(Container) as any) as React.FunctionComponent<Props>;

export default StoreLayout;
