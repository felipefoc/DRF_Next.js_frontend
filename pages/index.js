import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'


export default function LoginUser() {
  const loginUser = async event => {
    event.preventDefault()
  
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/token/',
      data: {
        username: event.target.username.value,
        password: event.target.password.value,
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.status === 200) {
        console.log('Success')
        localStorage.setItem('token', response.data.access)
    }},
    (error) => {
      console.log(error);
    })
  }    
  
  
  return (
    <div className={styles.container}>
      <form onSubmit={loginUser}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" autoComplete="username" required />
        <label htmlFor="password">password</label>
        <input id="password" name="password" type="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

