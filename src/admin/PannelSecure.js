import React from 'react'
import {auth} from '../util/firebase'
import AdminPannel from './AdminPannel'
import logo from '../assets/logo/logo.svg'
import {Link} from 'react-router-dom'

function PannelSecure() {
  const [user, setUser] = React.useState(0)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  React.useEffect(() => {
		auth.onAuthStateChanged(function(authUser){
			if(authUser){
				setUser(authUser)
			}else{
			}
		})
	}, [])

  const login = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
}
  return (
    <div>
    {
      user ? (
        <AdminPannel />
      ) : (
        <div className="adminLoginPageWrapper">
        <div className="adminAuthForm">
        <div className="seclogo">
        <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <input placeholder="მეილი" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <input placeholder="პაროლი" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button onClick={login}>შესვლა</button>
        </div>
        </div>
      )
    }
    </div>
  )
}

export default PannelSecure
