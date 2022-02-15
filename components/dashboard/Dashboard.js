import Head from 'next/head'
import Logo from '../login-form/Logo'
import Button from '../login-form/Button'
import { useEffect, useState } from 'react'
import { getUserByEmail } from '../../services/requests'
import { logout } from '../../lib/auth'
import Router from 'next/router'

const Dashboard = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        async function fetchUserInfo() {
            const userInfo = JSON.parse(localStorage.getItem('userId'))

            if (userInfo == undefined || Date.now() > userInfo.exp * 1000) {
                return Router.push('/')
            }

            await getUserByEmail('/api/users/', userInfo.id).then(setUser)
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
                <Button className='mt-5' onClick={logout}>Log Out</Button>
            </div>
        </>
    )
}

export default Dashboard
