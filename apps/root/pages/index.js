import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'


export default function Home() {
  const router = useRouter()
  const [state, setState] = React.useState({
    accountName: "",
    username: "",
    password: ""
  })

  const handleChangeAccName = (e) => {
    setState({
      ...state,
      accountName: e.target.value
    })
  }

  const handleChangeUserName = (e) => {
    setState({
      ...state,
      username: e.target.value
    })
  }

  const handleChangePass = (e) => {
    setState({
      ...state,
      password: e.target.value
    })
  }

  const handleSubmit = () => {
    const data = {
      accountName: state.accountName,
      username: state.username,
      password: state.password
    }

    localStorage.setItem("user", JSON.stringify(data))
    router.push("/home");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card" style={{padding: "1rem"}}>
                <div className="form-row">
                  <div className="form-group mb-3">
                    <input className="form-control" placeholder="Account name" onChange={handleChangeAccName} />
                  </div>
                </div>
                {/* <div className="form-row">
                  <div className="form-group mb-3">
                    <input className="form-control" placeholder="username" onChange={handleChangeUserName} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group mb-3">
                    <input className="form-control" placeholder="Password" type="password" onChange={handleChangePass} />
                  </div>
                </div> */}

                <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
