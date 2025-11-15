import { useState } from 'react'
import { useRouter } from 'next/router'

export default function LoginPage () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  return (
    <form
      className="login-form"
      onSubmit={(event) => {
        event.preventDefault()
        if (username !== 'admin' || password !== 'foodie123') {
          return
        }
        localStorage.setItem('jwt', 'fake-jwt-token')
        router.push('/menu')
      }}
    >
      <input
        placeholder='username'
        value={username}
        onChange={(event) => {
          setUsername(event.target.value)
        }}
      />
      <input
        placeholder='password'
        value={password}
        onChange={(event) => {
          setPassword(event.target.value)
        }}
      />
      <button>Login</button>
    </form>
  )
}