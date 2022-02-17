import MainForm from '../components/login-form/MainForm'

const LoginForm = () => {
    return (
        <>
            <MainForm />

            {/* I had to write it that way, as I don't need 100vh on the other pages :( */}
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
