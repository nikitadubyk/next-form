import Image from 'next/image'

const Logo = ({ className }) => {
    return (
        <div className={`mx-auto w-14 ${className}`}>
            <Image src='/abler-logo.svg' alt='logo' width={50} height={50} />
        </div>
    )
}

export default Logo
