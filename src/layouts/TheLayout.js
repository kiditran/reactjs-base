import React from 'react'
import TheHeader from './TheHeader'
import TheBody from './TheBody'
import TheFooter from './TheFooter'

const TheLayout = () => {
  return (
    <div className="lc-main">
      <TheHeader />

      <TheBody />

      <TheFooter />
    </div>
  )
}

export default TheLayout
