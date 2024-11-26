import React, { useEffect } from 'react'

function Home() {

  useEffect(() => {

    let interval = setInterval(() => {
      console.log("Hello React")
    }, 1000);

    //Dispose function!
    return () => {
      clearInterval(interval)
    }

  }, [])
  

  return (
    <h1>Home Page</h1>
  )
}

export default Home