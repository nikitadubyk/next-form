import { useState } from 'react'
import useInputsValues from '../hooks/useInputsValues'
import Logo from '../components/Logo'
import Form from '../components/Form'
import Link from 'next/link'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Router from 'next/router'

const LoginForm = () => {
    const {
        emailValue,
        changeEmailValue,
        passwordValue,
        setPasswordValue,
        changePasswordValue,
    } = useInputsValues()
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async e => {
        e.preventDefault()

        const body = {
            email: emailValue,
            password: passwordValue,
        }

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-type': 'application/json; charset=utf-8' },
                body: JSON.stringify(body),
            })

            if (res.status === 200) {
                Router.push('/dashboard')
            } else {
                const req = await res.json()
                req.errorMessage === 'Wrong email' && setPasswordValue('')
                setErrorMessage(req.errorMessage)
            }
        } catch (error) {
            console.log(error.message)
            setErrorMessage(error.message)
        }
    }

    return (
        <Layout title='Home Page' className='flex flex-col h-full'>
            <div className='container overflow-y-auto flex-[1_0_auto] lg:flex-none'>
                <Logo className='mt-10' />
                <div className='mt-10 sm:w-7/12 sm:mx-auto lg:w-5/12 lg:mt-16'>
                    <h2 className='text-3xl font-medium px-5 lg:text-4xl xl:text-5xl'>
                        {errorMessage ? errorMessage : 'Welcome'}
                    </h2>
                    <Form onSubmit={onSubmit}>
                        <EmailInput
                            onChangeEmail={changeEmailValue}
                            emailValue={emailValue}
                            isError={errorMessage === 'Wrong email' && true}
                        />
                        <PasswordInput
                            onChangePassword={changePasswordValue}
                            passwordValue={passwordValue}
                            isError={errorMessage === 'Wrong password' && true}
                        />

                        <Link href='/forgot-password'>
                            <a className='col-span-2 justify-self-start opacity-60 hover:opacity-100 block ml-5 text-sm'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    aria-hidden='true'
                                    focusable='false'
                                    role='img'
                                    className='h-6 w-6 inline-block mr-1'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                    />
                                </svg>
                                Forgot password
                            </a>
                        </Link>

                        <Button
                            className='col-span-2 justify-self-end mr-5'
                            isError={errorMessage && true}
                        >
                            {errorMessage ? 'Retry' : 'Log in'}
                        </Button>
                    </Form>
                </div>
            </div>

            <Footer />
            <style global jsx>{`
                body,
                #__next {
                    height: 100vh;
                }
            `}</style>
        </Layout>
    )
}

export default LoginForm
