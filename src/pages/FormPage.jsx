import React from 'react'
import { useDispatch } from 'react-redux'
import { userInfo } from '../store/userSlice'

const FormPage = () => {
  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.elements.name.value
    const surname = e.target.elements.surname.value
    const email = e.target.elements.email.value

    dispatch(userInfo({name, surname, email}))
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='inputs'>
        Имя
        <input type="text" name='name' placeholder='Name' />
        Фамилия
        <input type="text" name='surname' placeholder='Surname' />
        Почта
        <input type="email" name='email' placeholder='Email' />
        <button type='submit' >Готово</button>
      </form>
    </>
  )
}

export default FormPage