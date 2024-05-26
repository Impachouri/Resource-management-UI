import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../component/FormField';
import notification from '../utils/notification';
import { ApiContext } from '../context/context';
import { addItemApi } from '../service/apiService';
import Loading from '../utils/loading';

function AddItems() {

    const { apiState, apiDispatch } = useContext(ApiContext);

    const [formData, setFormData] = useState({
        title: "Nickelson and Sons",
        icon_url: "http://loremflickr.com/640/480",
        link: "https://gaseous-pod.net",
        description: "Eligendi cum eligendi nemo accusamus natus vero dolor.",
        category: "Automotive",
        tag: "request",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const notify = notification();

    const handleSubmit = (e) => {
        e.preventDefault();
        apiDispatch({ type: "REQUEST" });
        addItemApi(formData).then((response) => {
            console.log(response.data)
            apiDispatch({ type: "SUCCESS", payload: [] })
            notify("Successfully Added", "SUCCESS");
        }).catch((error) => {
            apiDispatch({ type: "ERROR", payload: error })
            notify('Error, Please try again!', "ERROR")
            apiDispatch({ type: "ERROR", payload: null })
        });
    }

    if (apiState.loading) {
        return <Loading />
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
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                        <FormField id="title" label="ITEM TITLE" type="text" name="title" value={formData.title} onChange={handleChange} />
                        <FormField id="icon_url" label="ICON URL" type="text" name="icon_url" value={formData.icon_url} onChange={handleChange} />
                        <FormField id="link" label="LINK" type="text" name="link" value={formData.link} onChange={handleChange} />
                        <FormField id="description" label="DESCRIPTION" type="text" name="description" value={formData.description} onChange={handleChange} />
                        <FormField id="category" label="CATEGORY" type="text" name="category" value={formData.category} onChange={handleChange} />
                        <FormField id="tag" label="TAG" type="text" name="tag" value={formData.tag} onChange={handleChange} />
                        <button className="bg-secnodaryButton w-1/4 self-center text-white font-semibold text-sm py-2 mt-4">CREATE</button>
                    </form>
                </div>
            </div>
            <div className="h-full md:w-1/2 md:block hidden">
                <img className="h-full w-full object-cover object-center" src="login.png" alt="login" />
            </div>
        </div>
    );
}

export default AddItems;
