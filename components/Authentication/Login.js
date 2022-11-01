import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";


const Login = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
                        <h2>Login</h2>
             <button onClick={() => signIn('google')}>Login with Google</button>
             <button onClick={() => signIn('facebook')}>Login with Facebook</button>
             <button onClick={() => signIn('github')}>Login with GitHub</button>

        </>
    )
}

export default Login