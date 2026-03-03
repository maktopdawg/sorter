'use client'

interface InputFieldProps {
    type: string
    placeholder: string
    value: string
    onChange: (val: string) => void
    required?: boolean
}

const InputField = ({type, placeholder, value, onChange, required}: InputFieldProps) => {
    const component = (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border p-2 rounded w-full"
        />
    )

    return component;
}

export default InputField;