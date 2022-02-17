interface IEmailInputProps {
    onChangeEmail: Function
    emailValue: string
    isError?: boolean
}

const EmailInput = ({
    onChangeEmail,
    emailValue,
    isError,
}: IEmailInputProps) => {
    return (
        <>
            <input
                style={isError ? { borderColor: 'red' } : {}}
                type='email'
                name='email'
                required
                placeholder='Email address'
                className='peer row-start-1 col-span-full outline-none border-b-2 border-gray-300 px-12 py-3 w-full transition-all invalid:border-red-500 valid:border-emerald-500 placeholder-shown:invalid:border-gray-300'
                onChange={e => onChangeEmail(e.target.value)}
                value={emailValue}
            />

            <svg
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
                className='svg-inline--fa fa-user fa-w-14 w-7 h-7 row-start-1 col-start-1 opacity-60 peer-focus:opacity-100 ml-4'
            >
                <title />
                <g>
                    <path d='M28,13a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v8a3,3,0,0,0,.88,2.12A3,3,0,0,0,6,25H26a3,3,0,0,0,2.12-.88A3,3,0,0,0,29,22V14A1,1,0,0,0,28,13Z' />
                    <path d='M15.4,18.8a1,1,0,0,0,1.2,0L28.41,9.94a1,1,0,0,0,.3-1.23,3.06,3.06,0,0,0-.59-.83A3,3,0,0,0,26,7H6a3,3,0,0,0-2.12.88,3.06,3.06,0,0,0-.59.83,1,1,0,0,0,.3,1.23ZM6,9H26a.9.9,0,0,1,.28,0L16,16.75,5.72,9A.9.9,0,0,1,6,9Z' />
                </g>
            </svg>

            <svg
                style={isError ? { visibility: 'hidden' } : {}}
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
                        points='434.8,49 174.2,309.7 76.8,212.3 0,289.2 174.1,463.3 196.6,440.9 196.6,440.9 511.7,125.8 434.8,49'
                    />
                </g>
            </svg>

            <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 28 28'
                style={isError ? { visibility: 'visible' } : {}}
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
