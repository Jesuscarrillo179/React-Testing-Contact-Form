import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('Test first name render', () => {
    const {getByText} = render(<ContactForm />);
    const fNameTitle = getByText(/First Name/i)
    expect(fNameTitle).toBeVisible();
});

test('Test last name render', () => {
    const {getByText} = render(<ContactForm />);
    const lNameTitle = getByText(/Last Name/i)
    expect(lNameTitle).toBeVisible();
});

test('Test email render', () => {
    const {getByText} = render(<ContactForm />);
    const email = getByText(/Email/i)
    expect(email).toBeVisible();
});

test('Test message render', () => {
    const {getByText} = render(<ContactForm />);
    const message = getByText(/Message/i)
    expect(message).toBeVisible();
});

// test('Test form input for first name', () => {
//     const { findByPlaceholderText } = render(<ContactForm />);
//     const fNameInput = findByPlaceholderText(/bill/);
//     console.log(fNameInput)
//     fireEvent.change(fNameInput, { target: { value: 'Jes' } });

//     expect(fNameInput.value).toBe('Jes');
// });
