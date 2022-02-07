import { useState } from 'react'
import Link from 'next/link'

const MainForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <form
            data-js-form
            action='#'
            className='grid grid-cols-[2rem_1fr_1fr_2rem] gap-3 items-center auto-rows-max mt-5'
        >
            <input
                data-js-email
                type='email'
                name='email'
                required
                placeholder='Email address'
                className='peer row-start-1 col-span-full outline-none border-b-2 border-gray-300 px-12 py-3 w-full transition-all invalid:border-red-500 valid:border-emerald-500 placeholder-shown:invalid:border-gray-300'
            />
            <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='far'
                data-icon='user'
                className='svg-inline--fa fa-user fa-w-14 w-5 h-5 row-start-1 col-start-1 opacity-60 peer-focus:opacity-100 ml-5'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
            >
                <path
                    fill='currentColor'
                    d='M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z'
                ></path>
            </svg>

            <svg
                data-js-correct
                version='1.1'
                viewBox='0 0 512 512'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                className='w-5 h-5 row-start-1 col-start-4 justify-self-end peer-valid:visible invisible mr-5'
            >
                <g>
                    <polygon
                        style={{ fill: '#41ad49' }}
                        className='st0'
                        points='434.8,49 174.2,309.7 76.8,212.3 0,289.2 174.1,463.3 196.6,440.9 196.6,440.9 511.7,125.8 434.8,49     '
                    />
                </g>
            </svg>

            <svg
                data-js-wrong
                tabIndex='0'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 28 28'
                style={{ enableBackground: 'new 0 0 28 28' }}
                className='w-5 h-5 row-start-1 col-start-4 justify-self-end invisible peer-invalid:visible peer-placeholder-shown:peer-invalid:invisible mr-5 cursor-pointer'
            >
                <g>
                    <path
                        style={{ fill: '#e20000' }}
                        d='M0,24l4,4l10-10l10,10l4-4L18,14L28,4l-4-4L14,10L4,0L0,4l10,10L0,24z'
                    />
                </g>
            </svg>

            <input
                data-js-password
                type={showPassword ? 'text' : 'password'}
                name='password'
                required
                minLength='5'
                maxLength='16'
                placeholder='Password'
                className='peer row-start-2 col-span-full outline-none border-b-2 px-12 py-3 w-full transition-all border-gray-300 invalid:border-red-500 valid:border-emerald-500 placeholder-shown:invalid:border-gray-300'
            />

            <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='lock'
                className='svg-inline--fa fa-lock fa-w-14 w-5 h-5 row-start-2 col-start-1 ml-5 opacity-60 peer-focus:opacity-100'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
            >
                <path
                    fill='currentColor'
                    d='M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z'
                ></path>
            </svg>

            <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='unlock'
                className='svg-inline--fa fa-unlock fa-w-14 w-5 h-5 row-start-2 col-start-1 ml-5 opacity-60 peer-focus:opacity-100'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
            >
                <path
                    fill='currentColor'
                    d='M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                ></path>
            </svg>

            <svg
                tabIndex='0'
                aria-hidden='true'
                focusable='false'
                data-prefix='far'
                data-icon='eye'
                className='svg-inline--fa fa-eye fa-w-18 w-5 h-5 row-start-2 col-start-4 justify-self-end cursor-pointer mr-5 opacity-60 hover:opacity-100'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
                onClick={() => setShowPassword(!showPassword)}
            >
                <path
                    fill='currentColor'
                    d='M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z'
                ></path>
            </svg>

            <svg
                tabIndex='0'
                aria-hidden='true'
                focusable='false'
                data-prefix='far'
                data-icon='eye-slash'
                className='svg-inline--fa fa-eye-slash fa-w-20 w-5 h-5 row-start-2 col-start-4 justify-self-end cursor-pointer mr-5 opacity-60 hover:opacity-100'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 640 512'
                onClick={() => setShowPassword(!showPassword)}
            >
                <path
                    fill='currentColor'
                    d='M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z'
                ></path>
            </svg>

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

            <button
                className='col-span-2 justify-self-end button'
                type='submit'
                data-js-button
                disabled
            >
                Log in
            </button>
        </form>
    )
}

export default MainForm
