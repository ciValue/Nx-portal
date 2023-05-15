import { render } from '@testing-library/react';

import { CiButton } from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CiButton text='blip'/>);
    expect(baseElement).toBeTruthy();
  });
});
