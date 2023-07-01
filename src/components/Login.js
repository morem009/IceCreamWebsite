import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import './css/style.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext'
const Login = () => {
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          navigate('/Login')
        })
      .catch(err => alert(err.message))
    }else{
      alert("You have Sucessfully Logged In")   
      navigate('/Homepage')
    }
    })
    .catch(err => setError(err.message))
  }

  return (
    <div>
           {/* Header */}
    <div className="jumbotron jumbotron-fluid page-header" style={{'marginTop': '20px'}}>
        <div className="container text-center py-5">
            <h1 className="text-white display-3 mt-lg-5">Login</h1>
            <div className="d-inline-flex align-items-center text-white">
                <p className="m-0"><Link className="text-white" to="/Homepage">Home</Link></p>
                <i className="fa fa-circle px-3"></i>
                <p className="m-0">Login</p>
            </div>
        </div>
    </div>
      <div className="container py-5">
      <div className="row justify-content-center">
      <div className='auth'>
        <h1>Log in</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={login} name='login_form'>
          <input 
          class="form-control p-4"
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>

          <input 
          class="form-control p-4"
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <button className="btn btn-secondary mt-2" type='submit'>Login</button>
        </form>
        <p>
          Don't have and account? 
          <Link to='/register'>Create one here</Link>
        </p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login
