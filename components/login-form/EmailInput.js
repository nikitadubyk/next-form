const EmailInput = () => {
    return (
        <>
            <input
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
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 28 28'
                style={{ enableBackground: 'new 0 0 28 28' }}
                className='w-5 h-5 row-start-1 col-start-4 justify-self-end invisible peer-invalid:visible peer-placeholder-shown:peer-invalid:invisible mr-5'
            >
                <g>
                    <path
                        style={{ fill: '#e20000' }}
                        d='M0,24l4,4l10-10l10,10l4-4L18,14L28,4l-4-4L14,10L4,0L0,4l10,10L0,24z'
                    />
                </g>
            </svg>
        </>
    )
}

export default EmailInput
