import React, { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import Card from "../component/Card";
import notification from '../utils/notification';
import { ApiContext } from '../context/context';
import { fetchDataApi } from '../service/apiService';
import Loading from "../utils/loading";

const Home = () => {
    const { apiState, apiDispatch } = useContext(ApiContext);
    const notify = notification();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('');
    const itemsPerPage = 6;

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        try {
            apiDispatch({ type: "REQUEST" });
            const response = await fetchDataApi();
            apiDispatch({ type: "SUCCESS", payload: response.data });
            notify("Data Loaded Successfully", "SUCCESS");
        } catch (error) {
            apiDispatch({ type: "ERROR", payload: error });
            notify('Error in Loading Data, Please try again.', "ERROR");
        }
    };

    const filteredData = useMemo(() => {
        return apiState.data
            .filter(card => card.tag.toLowerCase().includes(activeTab))
            .filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [apiState.data, activeTab, searchQuery]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);



    const handleNextPage = useCallback(() => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }, [currentPage, totalPages]);

    const handlePreviousPage = useCallback(() => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }, [currentPage]);

    const handleSearch = useCallback((event) => {
        const { value } = event.target;
        setSearchQuery(value);
        setCurrentPage(1);
    }, []);

    const handleActiveTab = useCallback((tab) => {
        setActiveTab(tab);
        setCurrentPage(1);
    }, []);


    if (apiState.loading) {
        return <Loading />;
    }

    return (<div className="backdrop-blur-lg h-full w-full px-[10%] py-[3%] text-heading flex flex-col gap-7">
        <TabNavigation activeTab={activeTab} handleActiveTab={handleActiveTab} />
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
        {apiState.error ? (
            <ErrorState message={apiState.error.message} retryFunction={fetchData} />
        ) : (
            <div className="md:h-full w-full grid grid-cols-2 md:grid-cols-3 gap-9">
                {currentItems.map((card, id) => (
                    <Card key={id} card={card} searchTerm={searchQuery} />
                ))}
            </div>
        )}
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
        />
    </div>
    );
};

const TabNavigation = ({ activeTab, handleActiveTab }) => (
    <div className="w-full h-12 flex items-center justify-center">
        <div className="w-[60%] h-full flex border border-borderColor rounded-md font-semibold text-xl">
            <button
                onClick={() => handleActiveTab('')}
                className={`h-full flex-1 p-2 border-r border-borderColor rounded-l-md ${activeTab === "" ? "bg-secnodaryButton text-white" : "bg-[#D7DFE93D]"}`}
            >
                Resource
            </button>
            <button
                onClick={() => handleActiveTab('request')}
                className={`h-full flex-1 p-2 border-r border-borderColor ${activeTab === "request" ? "bg-secnodaryButton text-white" : "bg-[#D7DFE93D]"}`}
            >
                Request
            </button>
            <button
                onClick={() => handleActiveTab('user')}
                className={`h-full flex-1 p-2 ${activeTab === "user" ? "bg-secnodaryButton text-white" : "bg-[#D7DFE93D]"}`}
            >
                User
            </button>
        </div>
    </div>
);

const SearchBar = ({ searchQuery, handleSearch }) => (
    <div className="w-full h-10">
        <div className="h-full w-1/2">
            <label className="relative">
                <span className="absolute inset-y-0 left-1 top-2 flex items-center justify-center pl-2">
                    <svg className="h-6 w-6 fill-slate-300" viewBox="0 0 20 20">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.05888 4.77944C8.05888 6.59063 6.59063 8.05888 4.77944 8.05888C2.96826 8.05888 1.5 6.59063 1.5 4.77944C1.5 2.96826 2.96826 1.5 4.77944 1.5C6.59063 1.5 8.05888 2.96826 8.05888 4.77944ZM7.58708 8.64771C6.79881 9.22083 5.8286 9.55888 4.77944 9.55888C2.13983 9.55888 0 7.41905 0 4.77944C0 2.13983 2.13983 0 4.77944 0C7.41905 0 9.55888 2.13983 9.55888 4.77944C9.55888 5.82859 9.22084 6.79878 8.64773 7.58704L12.001 10.9403L10.9403 12.001L7.58708 8.64771Z" fill="#171F46" />
                    </svg>
                </span>
                <input
                    value={searchQuery}
                    onChange={handleSearch}
                    className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-10 pr-3 shadow-sm sm:text-lg"
                    placeholder="Search"
                    type="text"
                    name="search"
                />
            </label>
        </div>
    </div>
);

const ErrorState = ({ message, retryFunction }) => (
    <div className="md:h-full w-full flex flex-col gap-4 items-center justify-center text-2xl text-red-400">
        {message}
        <button className="bg-red-500 text-white p-2 rounded-md" onClick={retryFunction}>Try again</button>
    </div>
);

const Pagination = ({ currentPage, totalPages, handlePreviousPage, handleNextPage }) => (
    <div className="flex items-center justify-center w-full mt-4 gap-10">
        <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-md bg-secnodaryButton text-white"
        >
            Previous
        </button>
        <span className="font-semibold text-xl">{currentPage} / {totalPages}</span>
        <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-md bg-secnodaryButton text-white"
        >
            Next
        </button>
    </div>
);

export default Home;
