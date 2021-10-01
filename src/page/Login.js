// Libs
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// Components
import LoginForm from '../Form/LoginForm'

const Login = props => {

    const [token, setToken] = useState('')

    const formValue = useSelector(state => state.formValue)
    const login = useSelector(state => state.login)
    const users = useSelector(state => state.users)

    const history = useHistory()

    useEffect(() => {
        (async() => {

            const token = await localStorage.getItem('token')

            if (token) history.push('/listAnswer')
        })()
    }, [])

    return (
        <div className="container-fluid p-3 mb-2 bg-warning">
            {!users.token &&
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col border border-secondary shadow-lg p-3 mb-5 bg-info rounded">
                        {users.user_normal || users.msg ? <div><h1 className="text-danger">Please Check email or password</h1></div> : null}

                        <h1 className="text-center text-white">
                            Login
                        </h1>
                        <LoginForm onSubmitLogin={() => login(formValue, history)} />

                    </div>
                    <div className="col">

                    </div>
                </div>

            }
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
    
}

export default Login