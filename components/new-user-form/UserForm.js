import { useState } from 'react'
import { postData } from '../../services/services'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import Button from '../login-form/Button'
import EmailInput from '../login-form/EmailInput'
import PasswordInput from '../login-form/PasswordInput'
import LinkToHomePage from '../password-form/LinkToHomePage'

const UserForm = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const changeEmailValue = value => setEmailValue(value)
    const changePasswordValue = value => setPasswordValue(value)

    const onSubmit = e => {
        e.preventDefault()
        const data = {
            id: uuidv4(),
            email: emailValue,
            password: passwordValue,
        }
        postData('http://localhost:4000/users', data)

        setEmailValue('')
        setPasswordValue('')
    }

    return (
        <main className='overflow-y-auto text-lg py-5 lg:py-0 lg:pb-5 sm:w-7/12 sm:mx-auto lg:w-5/12 2xl:w-4/12'>
            <div className='w-14 mx-auto mt-5 lg:mt-10'>
                <Image
                    src='/abler-logo.svg'
                    alt='logo'
                    width={50}
                    height={50}
                />
            </div>
            <h1 className='mt-10 lg:mt-20 text-3xl lg:text-4xl font-medium px-5'>
                Create account
            </h1>
            <h3 className='px-5 mt-2'>Please enter your details</h3>
            <form
                className='group grid grid-cols-[2rem_1fr_1fr_2rem] gap-3 items-center auto-rows-max mt-5'
                onSubmit={onSubmit}
            >
                <EmailInput
                    onChangeEmail={changeEmailValue}
                    emailValue={emailValue}
                />
                <PasswordInput
                    onChangePassword={changePasswordValue}
                    passwordValue={passwordValue}
                />
                <Button className='col-span-4 mr-3 justify-self-end'>
                    Sing Up
                </Button>
            </form>
            <LinkToHomePage />
        </main>
    )
}

export default UserForm
