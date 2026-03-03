'use client'

interface ButtonProps {
    onClick?: () => void
    type?: "button" | "submit"
    disabled?: boolean
    loading?: boolean
    children: React.ReactNode
}

const Button = ({onClick, type = "button", disabled, loading, children}: ButtonProps) => {
    const component = (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400 w-full"
        >
            {loading ? "Processing..." : children}
        </button>
    )

    return component;
}

export default Button;