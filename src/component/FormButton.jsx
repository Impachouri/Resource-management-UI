import React from 'react';

const FormButton = ({ isSubmitting, children }) => (
    <button
        type="submit"
        disabled={isSubmitting}
        className="bg-secnodaryButton w-1/4 self-center text-white font-semibold text-sm py-2 mt-4"
    >
        {isSubmitting ? 'Submitting...' : children}
    </button>
);

export default FormButton;
