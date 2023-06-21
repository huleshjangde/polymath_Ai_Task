import React from 'react'
import Cookies from 'js-cookie';


const index = () => {
  const isLoggedIn = Cookies.get('isLoggedIn') === 'true';

  return (
    <div>index</div>
  )
}

export default index