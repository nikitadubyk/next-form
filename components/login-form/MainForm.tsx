import { useState } from 'react'
import useInputsValues from '../../hooks/useInputsValues'
import Head from 'next/head'
import Logo from './Logo'
import Form from './Form'
import Link from 'next/link'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import Button from './Button'
import Footer from './Footer'
import Router from 'next/router'

const MainForm = () => {
    const {
        emailValue,
        changeEmailValue,
        passwordValue,
        setPasswordValue,
        changePasswordValue,
    } = useInputsValues()
    const [errorMessage, setErrorMessage] = useState('')

    type Data = {
        email: string
        password: string
    }

    const onSubmit = async e => {
        e.preventDefault()

        const body: Data = {
            email: emailValue,
            password: passwordValue,
        }

        console.log('BODY IN MAINFORM', body)

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
        } catch (error: any) {
            console.log(error.message)
            setErrorMessage(error.message)
        }
    }

    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <div className='flex flex-col h-full'>
                <section className='container overflow-y-auto flex-[1_0_auto] lg:flex-none'>
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
                                isError={
                                    errorMessage === 'Wrong password' && true
                                }
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
                </section>

                <Footer />
            </div>
        </>
    )
}

export default MainForm