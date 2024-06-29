'use client'

import React, { FC } from 'react'

const Error: FC = () => {
  return (
    <main className="error output-message">
        <h1>An Error Occurred!</h1>
        <p>Failed to fetch movies, please try again later.</p>
    </main>
  )
}

export default Error