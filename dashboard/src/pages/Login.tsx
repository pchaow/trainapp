import { useFrappeAuth } from "frappe-react-sdk";
import { ChangeEventHandler, useState } from "react"

type ILoginForm = {
    username: string;
    password: string;
}

export default function LoginPage() {

    const [loginForm, setLoginForm] = useState({} as ILoginForm)
    const {
        currentUser,
        isValidating,
        isLoading,
        login,
        logout,
        updateCurrentUser,
        getUserCookie,
    } = useFrappeAuth();

    const [error, setError] = useState(null as null | any)

    const updateLoginForm = (e: any) => {
        setLoginForm({
            ...loginForm, [e.target.name]: e.target.value
        })
    }

    const doLogin = () => {
        login({
            username: loginForm.username,
            password: loginForm.password
        }).catch(err => { setError(err) })
    }


    if (isLoading) return <div>loading...</div>;

    if (currentUser) return (
        <>
            {currentUser}
            <button className="bg-blue-500 p-1" type="button" onClick={logout}>logout</button>
        </>
    )

    console.log(error)

    return (
        <>
            {JSON.stringify(error)}
            <label>username : </label>
            <input className="border-1 border-black" type="text" name="username"
                value={loginForm.username}
                onChange={updateLoginForm} />
            <br />
            <label>password : </label>
            <input type="password" name="password" className="border-1 border-black"
                value={loginForm.password}
                onChange={updateLoginForm} />
            <br />
            <button className="bg-blue-500 p-1" type="button" onClick={doLogin}>LOGIN</button>
        </>
    )
}