import Footer from '../components/login-form/Footer'
import MainForm from '../components/login-form/MainForm'
import Logo from '../components/login-form/Logo'

const LoginForm = () => {
    return (
        <>
            <div className='flex flex-col h-full'>
                <section className='container overflow-y-auto flex-[1_0_auto] lg:flex-none'>
                    <Logo className='mt-10' />
                    <MainForm />
                </section>

                <Footer />
            </div>

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
