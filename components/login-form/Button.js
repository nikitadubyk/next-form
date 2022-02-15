const Button = ({ children, className, onClick = () => {}}) => {
    return (
        <button
            className={`h-11 border bg-green-600 text-white rounded-full px-5 transition-all group-invalid:border group-invalid:border-gray-400 group-invalid:text-gray-400 group-invalid:bg-transparent hover:text-white hover:bg-green-700 ${className}`}
            type='submit'
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
