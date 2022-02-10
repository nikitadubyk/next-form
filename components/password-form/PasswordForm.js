import { useState } from 'react'
import { getData, patchData } from '../../services/services'
import useInputsValues from '../../hooks/useInputsValues'
import Logo from '../login-form/Logo'
import Form from '../login-form/Form'
import EmailInput from '../login-form/EmailInput'
import Button from '../login-form/Button'
import LinkToHomePage from './LinkToHomePage'

const PasswordForm = () => {
    const { emailValue, changeEmailValue } = useInputsValues()
    const [isRegistered, setIsRegistered] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const generationPassword = len => {
        len = len * -1
        return Math.random().toString(36).slice(len)
    }

    const changePassword = id => {
        const newPassword = generationPassword(10)
        setNewPassword(newPassword)

        patchData('/api/users', id, {
            password: newPassword,
        })
    }

    const isRegisteredUser = users => {
        const isUserInArray = users.filter(user => user.email === emailValue)
        if (isUserInArray.length > 0) {
            setIsRegistered('correct email')
            changePassword(isUserInArray[0].id)
        } else {
            setIsRegistered('wrong email')
        }
    }

    const onSubmit = e => {
        e.preventDefault()
        getData('/api/users').then(data => isRegisteredUser(data))
    }

    const errorMessage = isRegistered === 'wrong email' && (
        <p className='text-center text-red-500 mt-10 px-5'>
            Wrong mail or you are not registered
        </p>
    )
    const correctMessage = isRegistered === 'correct email' && (
        <p className='text-center text-green-500 mt-10 px-5'>
            Your password has been changed to: {newPassword}
        </p>
    )

    return (
        <main className='overflow-y-auto text-lg py-5 lg:py-0 lg:pb-5 sm:w-7/12 sm:mx-auto lg:w-5/12 2xl:w-4/12'>
            <Logo className={'mt-5 lg:mt-10'} />
            <h1 className='mt-10 lg:mt-20 text-2xl lg:text-4xl font-medium px-5'>
                Password recovery
            </h1>
            <h3 className='px-5 mt-2'>Please enter your email address</h3>
            <Form onSubmit={onSubmit}>
                <EmailInput
                    onChangeEmail={changeEmailValue}
                    emailValue={emailValue}
                />
                <Button className='col-span-4 justify-self-end mr-3'>
                    Submit
                </Button>
            </Form>
            {errorMessage}
            {correctMessage}

            <LinkToHomePage />
        </main>
    )
}

export default PasswordForm
