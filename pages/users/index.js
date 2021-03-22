import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from 'axios'


export default function AllUsers({}) {
  const users = async event=> {  
    axios({
      method: 'GET',
      url: 'http://localhost:8000/api/users/',
      headers: {
        'Content-Type': 'application/json',
        'Atuhenticate': 'Bearer '+ localStorage.getItem('token')
      }
    }).then((response) => {
      if (response.status === 200) {
        console.log('Success')
    }},
    (error) => {
      console.log(error);
    })
  }    
  
  
  return (
    <div className={styles.container}>
        <h1>oi</h1>
    </div>
  )
}

