import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'],
    SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonLink
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const CheckButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <a href={buttonLink} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${CheckButtonSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </a>
    )
}