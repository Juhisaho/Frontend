import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import TodoTable from './components/TodoTable';

test('renders todotable', () => {
  const row = [
    {desc:'Go to coffee', date:'24.01.2021'}
  ]

  const todotable = render(<TodoTable todos={row} />);
  expect(todotable.container).toHaveTextContent('Go to coffee');
})