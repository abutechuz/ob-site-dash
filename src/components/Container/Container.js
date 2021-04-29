import React from 'react'
import './Container.scss'

function Container({ children, className, props }) {
    return (
        <div className={`container ${className ? className : ''}`} {...props}>
            {children}
        </div>
    )
}

export default Container