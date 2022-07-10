import { render, screen } from '@testing-library/react';


import TitleBar from "./TitleBar";

test('render title bar', () => {
    render(<TitleBar />);
    expect(screen.getByText(/multi word counter/i)).toBeTruthy();
  });