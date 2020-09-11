import { fireEvent, render, wait } from '@testing-library/react'
import 'jest';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

import IAMFactory from '../../../context/factories/IAMFactory';
import SignIn from './index';

/**
 * @ignore
 */
let container: Element | null = null;

beforeEach(() => {
    delete window.location;
    (window.location as any as Partial<Location>) = {
        hostname: 'localhost',
        pathname: '/'
    };

    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container!);
    container!.remove();
    container = null;
});

test('Should redirect upon successful login.', async () => {
    const { getByRole } = render(<SignIn iamService={IAMFactory.getInstance()} redirectUrl="/home" />);

    fireEvent.change(document.getElementById('username') as HTMLInputElement, { target: { value: 'admin'}});
    fireEvent.change(document.getElementById('password') as HTMLInputElement, { target: { value: 'admin'}});
    fireEvent.click(getByRole('button'));

    // Wait for MockIAMService
    await wait(() => { return; }, { timeout: 5});

    expect(window.location.pathname).toBe('/home');
});

test('Should not redirect upon successful login.', async () => {
    const { getByRole } = render(<SignIn iamService={IAMFactory.getInstance()} redirectUrl="/home" />);

    fireEvent.change(document.getElementById('username') as HTMLInputElement, { target: { value: 'admin'}});
    fireEvent.change(document.getElementById('password') as HTMLInputElement, { target: { value: 'pass'}});
    fireEvent.click(getByRole('button'));

    // Wait for MockIAMService
    await wait(() => { return; }, { timeout: 5});

    expect(window.location.pathname).toBe('/');
});
