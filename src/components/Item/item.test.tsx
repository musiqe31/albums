import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Item from './item';
import { Provider } from 'react-redux';
import Store from '../../Redux/store';

describe('Item', () => {
  it('renders Item title', () => {
    const onCartAdd = jest.fn();
    const onCartRemove = jest.fn();
    const { getByTestId } = render(
      <Provider store={Store}>
        <Item album={{
          "userId": 1,
          "id": 1,
          "title": "quidem molestiae enim"
        }} onCartPressAdd={onCartAdd} onCartPressRemove={onCartRemove} />
      </Provider>
    );
    const linkElement = getByTestId('title');
    expect(linkElement).toBeTruthy();
  });

  it('initiates add to cart function', () => {
    const onCartAdd = jest.fn();
    const onCartRemove = jest.fn();
    const { getByTestId } = render(
      <Provider store={Store}>
        <Item album={{
          "userId": 33,
          "id": 33,
          "title": "This is a test"
        }} onCartPressAdd={onCartAdd} onCartPressRemove={onCartRemove} />
      </Provider>
    );
    const addBtn = getByTestId('add');
    waitFor(() => {
      addBtn.click();
    })
    expect(onCartAdd).toHaveBeenCalled();
  })

  it('initiates add to cart function', () => {
    const onCartAdd = jest.fn();
    const onCartRemove = jest.fn();
    const items = render(
      <Provider store={Store}>
        <Item album={{
          "userId": 33,
          "id": 33,
          "title": "This is a test"
        }} onCartPressAdd={onCartAdd} onCartPressRemove={onCartRemove} />
      </Provider>
    );
    
    expect(items).toMatchSnapshot();
  })
})