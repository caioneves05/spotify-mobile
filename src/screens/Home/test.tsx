import renderer from 'react-test-renderer';

import { screen } from '@testing-library/react-native';

import { renderWithTheme } from 'utils/tests/helpers';

import { Home } from '.';

describe('<Home />', () => {
  it('should render the home correctly', () => {
    renderWithTheme(<Home />);

    const container = renderer.create(<Home />).toJSON();

    expect(screen.getByText(/main/i)).toBeDefined();

    expect(container).toMatchSnapshot();
  });
});
