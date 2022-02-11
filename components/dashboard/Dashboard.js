import Head from 'next/head'
import Logo from '../login-form/Logo'
import Button from '../login-form/Button'

const Dashboard = ({ userName, userEmail }) => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Logo className='mt-10' />
            <div className='px-5 text-center mt-10'>
                <h1 className='text-3xl font-medium lg:text-4xl xl:text-5xl'>
                    Welcome, {userName}
                </h1>
                <h2 className='text-lg lg:text-xl xl:text-2xl mt-3'>
                    Your email is {userEmail}
                </h2>
                <Button className='mt-5'>Log Out</Button>
            </div>
        </>
    )
}

export default Dashboard
