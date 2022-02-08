import { useState } from 'react'
import Image from 'next/image'
import EmailInput from '../login-form/EmailInput'
import Button from '../login-form/Button'
import LinkToHomePage from './LinkToHomePage'

const PasswordForm = () => {
    const [emailValue, setEmailValue] = useState('')

    const changeEmailValue = value => {
        setEmailValue(value)
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
            <h1 className='mt-10 lg:mt-20 text-2xl lg:text-4xl font-medium px-5'>
                Password recovery
            </h1>
            <h3 className='px-5 mt-2'>Please enter your email address</h3>
            <form className='group grid grid-cols-[2rem_1fr_1fr_2rem] gap-3 items-center auto-rows-max mt-5'>
                <EmailInput
                    onChangeEmail={changeEmailValue}
                    emailValue={emailValue}
                />
                <Button className='col-span-4 justify-self-end mr-3'>
                    Submit
                </Button>
            </form>
            <LinkToHomePage />
        </main>
    )
}

export default PasswordForm
