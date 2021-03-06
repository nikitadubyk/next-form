import Head from 'next/head'
import Button from '../components/Button'
import Logo from '../components/Logo'
import { useEffect, useState } from 'react'
import { logout } from '../lib/auth'
import Router from 'next/router'

const Dashboad = () => {
    const [user, setUser] = useState({
        userName: '',
        email: '',
    })

    useEffect(() => {
        async function fetchUserInfo() {
            const res = await fetch('/api/userInfo')

            if (res.status === 200) {
                const json = await res.json()
                setUser(json)
            } else {
                Router.push('/')
            }
        }
        fetchUserInfo()
    }, [])

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Logo className='mt-10' />
            <div className='px-5 text-center mt-10'>
                <h1 className='text-3xl font-medium lg:text-4xl xl:text-5xl'>
                    Welcome, {user.userName}
                </h1>
                <h2 className='text-lg lg:text-xl xl:text-2xl mt-3'>
                    Your email is {user.email}
                </h2>
                <Button className='mt-5' onClick={logout}>
                    Log Out
                </Button>
            </div>
        </>
    )
}

export default Dashboad
