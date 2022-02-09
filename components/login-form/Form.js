import React from 'react'

const Form = ({ className, children, onSubmit }) => {
    return (
        <form
            className={`group grid grid-cols-[2rem_1fr_1fr_2rem] gap-3 items-center auto-rows-max mt-5 ${className}`}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}

export default Form
