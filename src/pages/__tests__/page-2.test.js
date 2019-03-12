import React from 'react'
import { render } from 'react-testing-library'
import { useStaticQuery } from 'gatsby' // mocked

import PageTwo from '../page-2'

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: `GatsbyJS`,
      },
    },
  }))
})

describe(`Page Two`, () => {
  it(`contains NOT FOUND text`, () => {
    const { getByText } = render(<PageTwo />)

    const el = getByText(`Welcome to page 2`)

    expect(el).toBeInTheDocument()
  })
})
