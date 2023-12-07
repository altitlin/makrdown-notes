import { render } from '@testing-library/react'

import { App } from 'app'

describe('App', () => {
  test('should properly render', () => {
    const { container } = render(<App />)

    expect(container).toBeInTheDocument()
  })
})
