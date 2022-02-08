import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='flex-[0_0_auto] w-full bg-gray-300 mt-10 lg:relative lg:bg-transparent lg:w-80 lg:mx-auto lg:mt-10 xl:w-96 2xl:w-[29.5rem]'>
            <div className='flex justify-between py-3 px-5 lg:px-3 xl:px-0'>
                <div className='group rounded-full p-1 bg-white cursor-pointer items-center justify-center w-6 shadow-xl lg:shadow-none'>
                    <svg
                        tabIndex='0'
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='globe'
                        className='svg-inline--fa fa-globe fa-w-16 opacity-60 transition-all group-hover:opacity-100 w-4 h-4'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 496 512'
                    >
                        <path
                            fill='currentColor'
                            d='M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z'
                        ></path>
                    </svg>
                </div>
                <Link href='/new-user'>
                    <a className='cursor-pointer font-medium text-gray-600 text-s lg:text-base opacity-60 hover:opacity-100'>
                        New user
                        <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='sign-in-alt'
                            className='svg-inline--fa fa-sign-in-alt fa-w-16 w-5 h-5 inline-block ml-2'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                        >
                            <path
                                fill='currentColor'
                                d='M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z'
                            ></path>
                        </svg>
                    </a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
