import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import PaymentForm from '../Jahid/PaymentForm';
import {describe , beforeEach, expect , it} from "vitest"


const mockStore = configureStore([]);

describe('PaymentForm', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('renders without crashing', () => {
    const { getByText } = render(
      <Provider store={store}>
        <PaymentForm />
      </Provider>
    );
    const proceedButton = getByText('Proceed');
    expect(proceedButton).toBeTruthy(); 
  });

  it('updates state on input change', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <PaymentForm />
      </Provider>
    );

    const emailInput = getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(emailInput.value).toBe('test@example.com');
  });

  it('dispatches createPayment action on form submission', () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <PaymentForm />
      </Provider>
    );

    const emailInput = getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

   

    
  });
});