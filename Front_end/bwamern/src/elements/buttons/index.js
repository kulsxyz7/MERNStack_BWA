import react from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button(props) {
    const className = [props.className]
    if(props.isPrimary) className.push("btn-primary")
    if(props.isLarge) className.push("btn-lg")
    if(props.isSmall) className.push("btn-sm")
    if(props.isBlock) className.push("btn-block")
    if(props.hasShadow) className.push("btn-shadow")

    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    if(props.type === "link") {
        if(props.isExternal) {
            return (
            <a 
                href={props.href}
                className={className.join(" ")}
                style={props.style}
                target={props.target === "_blank" ? "_blank" : undefined}
                rel={props.target ==="_blank" ? "noopener noreferrer" : undefined}
             >
                {props.children}
                </a>
            );
        } 
        else {
            return (
            <Link to={props.href}
                className={className.join(" ")}
                style={props.style} 
                onClick={onClick}>
            {props.children}
            </Link>
            );
        }
    }

    return <button></button>;
}

Button.PropTypes = {
    type: PropTypes.oneOf(["button", "link"]), //oneOf mirip seperti Enum
    onClick: PropTypes.func, //
    href: PropTypes.string,
    target: PropTypes.string, //untuk link external
    className: PropTypes.string, 
    isDisabled: PropTypes.bool, // untuk pengecekan link nya disabled atau tidak
    isLoading: PropTypes.bool, // misalkan klik sesuatu button ada animasi loading
    isSmall: PropTypes.bool, // varian ukuran
    isLarge: PropTypes.bool, // varian ukuran
    isBlock: PropTypes.bool,
    hasShadow: PropTypes.bool //
}