import React from 'react'

const FormField = ({ id, label, type, name, value, onChange }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#7E858E]" htmlFor={id}>{label}</label>
            <input className="border h-10 border-[#D7DFE9] px-2" type={type} name={name} id={id} onChange={onChange} value={value} />
        </div>
    );
};

export default FormField