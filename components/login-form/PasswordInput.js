import { useState } from 'react'

const PasswordInput = ({ onChangePassword, passwordValue }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                required
                minLength='5'
                maxLength='16'
                placeholder='Password'
                className='row-start-2 col-span-full outline-none border-b-2 px-12 py-3 w-full transition-all border-gray-300 invalid:border-red-500 valid:border-emerald-500 placeholder-shown:invalid:border-gray-300'
                onChange={e => onChangePassword(e.target.value)}
                value={passwordValue}
            />

            <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='lock'
                className='svg-inline--fa fa-lock fa-w-14 w-5 h-5 row-start-2 col-start-1 ml-5 opacity-60 '
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
                className='svg-inline--fa fa-unlock fa-w-14 w-5 h-5 row-start-2 col-start-1 ml-5 opacity-60 '
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
        </>
    )
}

export default PasswordInput
