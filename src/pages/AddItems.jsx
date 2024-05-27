import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import FormField from '../component/FormField';
import notification from '../utils/notification';
import { ApiContext } from '../context/context';
import { addItemApi } from '../service/apiService';
import Loading from '../utils/loading';
import { validationSchema } from '../utils/validationSchema';
import { initialValues } from '../utils/initialValues';
import FormButton from '../component/FormButton';

function AddItems() {
    const { apiState, apiDispatch } = useContext(ApiContext);
    const notify = notification();

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            apiDispatch({ type: "REQUEST" });
            await addItemApi(values);
            apiDispatch({ type: "SUCCESS", payload: [] });
            notify("Successfully Added", "SUCCESS");
        } catch (error) {
            apiDispatch({ type: "ERROR", payload: error });
            notify('Error, Please try again!', "ERROR");
            apiDispatch({ type: "ERROR", payload: null });
        } finally {
            setSubmitting(false);
        }
    };

    if (apiState.loading) {
        return <Loading />;
    }

    return (
        <div className="h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 flex flex-col">
                <div className="mt-2 ml-7">
                    <Link to="/" className="text-para text-xl">
                        <span className="text-black font-semibold mr-2 text-3xl">&lt;</span>
                        Users
                    </Link>
                </div>
                <div className="flex-1 flex flex-col items-center py-6 px-6 md:px-36 lg:px-72 gap-4">
                    <h2 className="text-2xl font-normal font-rubik">Item Details</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="w-full flex flex-col gap-5">
                                <FormField id="title" label="ITEM TITLE" name="title" />
                                <FormField id="icon_url" label="ICON URL" name="icon_url" />
                                <FormField id="link" label="LINK" name="link" />
                                <FormField id="description" label="DESCRIPTION" name="description" />
                                <FormField id="category" label="CATEGORY" name="category" />
                                <FormField id="tag" label="TAG" name="tag" as="select">
                                    <option value="" label="Select tag" />
                                    <option value="user" label="User" />
                                    <option value="request" label="Request" />
                                </FormField>
                                <FormButton isSubmitting={isSubmitting}>CREATE</FormButton>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="h-full md:w-1/2 md:block hidden">
                <img className="h-full w-full object-cover object-center" src="login.png" alt="login" />
            </div>
        </div>
    );
}

export default AddItems;
