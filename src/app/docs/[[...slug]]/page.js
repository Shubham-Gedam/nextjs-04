import React from 'react'

const Page = async ({ params }) => {
  return (
    <div>
      {params.slug.join(' / ')}
    </div>
  )
}

export default Page
