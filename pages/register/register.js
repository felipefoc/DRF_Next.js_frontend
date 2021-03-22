import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'


export default function RegisterUser() {
  const registerUser = async event => {
    event.preventDefault()
  
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/createuser/',
      data: {
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
        password2: event.target.password2.value,   
      }
    });
    
  }
  
  return (
    <div className={styles.container}>
      <form onSubmit={registerUser}>
        <label htmlFor="first_name">Name</label>
        <input id="first_name" name="first_name" type="text" autoComplete="first_name" required />
        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" name="last_name" type="text" autoComplete="last_name" required />
        <label htmlFor="username">username</label>
        <input id="username" name="username" type="text" autoComplete="username" required />
        <label htmlFor="email">email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
        <label htmlFor="password">password</label>
        <input id="password" name="password" type="password" required />
        <label htmlFor="password2">password2</label>
        <input id="password2" name="password2" type="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

