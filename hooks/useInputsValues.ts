import { useState } from 'react'

const useInputsValues = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [userName, setUserName] = useState('')

    const changeEmailValue = (value: string) => setEmailValue(value)
    const changePasswordValue = (value: string) => setPasswordValue(value)
    const changeUserName = (value: string) => setUserName(value)

    return {
        emailValue,
        passwordValue,
        userName,
        setEmailValue,
        setPasswordValue,
        setUserName,
        changeEmailValue,
        changePasswordValue,
        changeUserName,
    }
}

export default useInputsValues
