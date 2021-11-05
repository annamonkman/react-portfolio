import React, { useState, useEffect } from 'react'

const Bgcolour = () => {

  const [folioUrlBackgroundColour, setFolioUrlBackgroundColour] = useState('grey')

  const getFolioUrl = window.location.pathname

  useEffect(() => {
    if (getFolioUrl === '/art'){
      console.log('running')
      setFolioUrlBackgroundColour('black')
    } else {
      setFolioUrlBackgroundColour('grey')
    }
  },[getFolioUrl])

  return (

    <div>
      <div style={{ backgroundColour: folioUrlBackgroundColour }}>
        testing
      </div>
    </div>
  )
}

export default Bgcolour
