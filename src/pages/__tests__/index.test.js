import React from 'react'
import { render } from 'react-testing-library'
import { StaticQuery, useStaticQuery } from 'gatsby' // mocked

import Index from '../index'

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: `GatsbyJS`,
      },
    },
  }))

  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      placeholderImage: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            sizes: `100 200 300`,
            src: `pretend-i-am-a-base64-encoded-image`,
            srcSet: `asdfasdf`,
          },
        },
      },
    })
  )
})

describe(`Index`, () => {
  it(`contains a gatsby image`, () => {
    const { getByTestId } = render(<Index />)

    const node = getByTestId(`gatsby-logo`)

    expect(node.querySelectorAll(`picture`)).toHaveLength(1)
  })

  it(`contains a greeting`, () => {
    const { getByText } = render(<Index />)

    const greeting = getByText(`Hi people`)

    expect(greeting).toBeInTheDocument()
  })
})
