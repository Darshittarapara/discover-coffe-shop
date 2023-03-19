export interface ButtonProps {
    type?: "submit" | 'reset' | "button"
    onClick: () => void
    className?: string
    children: JSX.Element | string
}
const Button: React.FC<ButtonProps> = ({
    onClick,
    className = "button",
    type = "button",
    children
}) => {
    return (
        <button type={type} className={className} onClick={() => onClick()}>
            {children}
        </button>
    )
}
export default Button;