import { render, screen, fireEvent} from '@testing-library/react';
import Home from './page';

describe('Click button', () => {
  render(<Home />);
  fireEvent.click(screen.getByTestId("Button"));

  test('Text should be shown', () => {
    expect(screen.getByTestId('Text')).toHaveTextContent('CircleCI');
  });
});
