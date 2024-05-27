import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormField = ({ id, label, name }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#7E858E]" htmlFor={id}>{label}</label>
            <Field
                className="border h-10 border-[#D7DFE9] px-2"
                type="text"
                name={name}
                id={id}
            />
            <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
        </div>
    );
};

export default FormField;
