import { InputProps } from '@/Modal/Modal';
import React from 'react';

const Input: React.FC<InputProps> = ({
    type = "number",
    placeHolder,
    name,
    value,
    onChangeHandler
}) => {
    return (
        <input
            type={type}
            placeholder={placeHolder}
            name={name}
            value={value}
            onChange={(e) => onChangeHandler(e.target.value)}
        />
    )
};
export default Input