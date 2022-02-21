import MainForm from '../components/login-form/MainForm'

const LoginForm = () => {
    return (
        <>
            <MainForm />

            <style global jsx>{`
                body,
                #__next {
                    height: 100vh;
                }
            `}</style>
        </>
    )
}

export default LoginForm
