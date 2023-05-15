import { render } from '@testing-library/react';

import CiText from './ci-text';

describe('CiText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CiText />);
    expect(baseElement).toBeTruthy();
  });
});
