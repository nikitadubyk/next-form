import { useState } from 'react'
import { postData } from '../../services/requests'
import { v4 as uuidv4 } from 'uuid'
import useInputsValues from '../../hooks/useInputsValues'
import Head from 'next/head'
import Form from '../login-form/Form'
import Logo from '../login-form/Logo'
import Button from '../login-form/Button'
import UserNameInput from './UserNameInput'
import EmailInput from '../login-form/EmailInput'
import PasswordInput from '../login-form/PasswordInput'
import LinkToHomePage from '../password-form/LinkToHomePage'

const UserForm = () => {
    const {
        emailValue,
        passwordValue,
        userName,
        setEmailValue,
        setPasswordValue,
        setUserName,
        changeEmailValue,
        changePasswordValue,
        changeUserName,
    } = useInputsValues()

    const [error, setError] = useState(false)
    const [createdAccount, setCreatedAccount] = useState(false)

    const cleanState = () => {
        setCreatedAccount(false)
        setError(false)
    }

    type Data = {
        [key: string]: string
    }

    const onSubmit = e => {
        e.preventDefault()
        cleanState()
        const data: Data = {
            id: uuidv4(),
            email: emailValue,
            password: passwordValue,
            userName: userName,
        }

        postData('/api/users', data)
            .then(res => setCreatedAccount(true))
            .catch(e => setError(true))

        setEmailValue('')
        setPasswordValue('')
        setUserName('')
    }

    return (
        <>
            <Head>
                <title>Create Account</title>
            </Head>
            <main className='overflow-y-auto text-lg py-5 lg:py-0 lg:pb-5 sm:w-7/12 sm:mx-auto lg:w-5/12 2xl:w-4/12'>
                <Logo className={'mt-5 lg:mt-10'} />
                <h1 className='mt-10 lg:mt-20 text-3xl lg:text-4xl font-medium px-5'>
                    Create account
                </h1>
                <h3 className='px-5 mt-2'>Please enter your details</h3>
                <Form onSubmit={onSubmit}>
                    <EmailInput
                        onChangeEmail={changeEmailValue}
                        emailValue={emailValue}
                    />
                    <PasswordInput
                        onChangePassword={changePasswordValue}
                        passwordValue={passwordValue}
                    />
                    <UserNameInput
                        onChangeUserName={changeUserName}
                        userNameValue={userName}
                    />
                    <Button className='col-span-4 mr-3 justify-self-end'>
                        Sing Up
                    </Button>
                </Form>
                {createdAccount && (
                    <p className='text-center text-green-500 mt-10 px-5'>
                        You have successfully created an account!
                    </p>
                )}
                {error && (
                    <p className='text-center text-red-500 mt-10 px-5'>
                        Oops, something went wrong. Try again.
                    </p>
                )}
                <LinkToHomePage />
            </main>
        </>
    )
}

export default UserForm