import React from 'react'
import { render } from 'react-testing-library'
import { useStaticQuery } from 'gatsby' // mocked

import FourOhFour from '../404'

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: `GatsbyJS`,
      },
    },
  }))
})

describe(`404`, () => {
  it(`contains NOT FOUND text`, () => {
    const { getByText } = render(<FourOhFour />)

    const el = getByText(`NOT FOUND`)

    expect(el).toBeInTheDocument()
  })
})
