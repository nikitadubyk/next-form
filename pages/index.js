import Image from 'next/image'
import Footer from '../components/login-form/Footer'
import MainForm from '../components/login-form/MainForm'

const LoginForm = () => {
    return (
        <>
            <div className='flex flex-col h-full'>
                <section className='container overflow-y-auto flex-[1_0_auto] lg:flex-none'>
                    <div className='mt-10 mx-auto w-14'>
                        <Image
                            src='/abler-logo.svg'
                            alt='logo'
                            width={50}
                            height={50}
                        />
                    </div>

                    <div className='mt-10 sm:w-7/12 sm:mx-auto lg:w-5/12 lg:mt-16'>
                        <h2
                            data-js-title
                            className='text-3xl font-medium px-5 lg:text-4xl xl:text-5xl'
                        >
                            Welcome
                        </h2>
                        <MainForm />
                    </div>
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
