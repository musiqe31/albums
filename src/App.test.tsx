import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Redux/store';

describe('App', () => {
  it('renders Item title', () => {
    const app = render(
      <Provider store={Store}>
        <App />
      </Provider>
    );
    expect(app).toMatchSnapshot();
  });
})