import Link from 'next/link'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import Button from './Button'

const MainForm = () => {
    return (
        <form className='group grid grid-cols-[2rem_1fr_1fr_2rem] gap-3 items-center auto-rows-max mt-5'>
            <EmailInput />
            <PasswordInput />

            <Link href='/forgot-password'>
                <a className='col-span-2 justify-self-start opacity-60 hover:opacity-100 block ml-5 text-sm'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                        focusable='false'
                        data-icon='exclamation-circle'
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

            <Button className='col-span-2 justify-self-end mr-5'>Log in</Button>
        </form>
    )
}

export default MainForm
