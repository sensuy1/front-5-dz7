import React from 'react'
import { useSelector } from 'react-redux'

const ShowPage = () => {
  const user = useSelector((state) => state.user.user)
  return (
    <div className='users_profile'>
      <div>
        <span>Имя: </span>
        <span>{user.name}</span>
      </div>
      <div>
        <span>Фамилия: </span>
        <span>{user.surname}</span>
      </div>
      <div>
        <span>Емайл: </span>
        <span>{user.email}</span>
      </div>
    </div>
  )
}

export default ShowPage
