import Card from "../component/Card"
import { useState, useEffect, useContext } from "react";
import notification from '../utils/notification';
import { ApiContext } from '../context/context';
import { fetchDataApi } from '../service/apiService';
import Loading from "../utils/loading";
import { fakeApi } from "../utils/fakeApi";

const Home = () => {

    // const cardsData = [
    //     {
    //         "title": "Nickelson and Sons",
    //         "icon_url": "http://loremflickr.com/640/480",
    //         "link": "https://gaseous-pod.net",
    //         "description": "Eligendi cum eligendi nemo accusamus natus vero dolor.",
    //         "category": "Automotive",
    //         "tag": "request",
    //         "id": "1"
    //     },
    //     {
    //         "title": "Parker LLC",
    //         "icon_url": "https://images.unsplash.com/photo-1549776904-3ec1fcd4b13b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8NjQwKjQ4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://unkempt-driver.net",
    //         "description": "Fuga consequuntur sed.",
    //         "category": "Music",
    //         "tag": "user",
    //         "id": "2"
    //     },
    //     {
    //         "title": "Strosin - Langosh",
    //         "icon_url": "https://images.unsplash.com/photo-1512093266765-564111bfb15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fDY0MCo0ODB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://good-rutabaga.org",
    //         "description": "Ut voluptatibus natus sed doloribus quasi illo praesentium.",
    //         "category": "Beauty",
    //         "tag": "request",
    //         "id": "3"
    //     },
    //     {
    //         "title": "Marvin Group",
    //         "icon_url": "https://images.unsplash.com/photo-1553656168-a0327b277c6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fDY0MCo0ODB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://hefty-specialty.info",
    //         "description": "Quisquam ex voluptatem maiores nobis nostrum iusto nihil excepturi ut.",
    //         "category": "Sports",
    //         "tag": "user",
    //         "id": "4"
    //     },
    //     {
    //         "title": "Keeling and Sons",
    //         "icon_url": "https://images.unsplash.com/photo-1654707037713-5a2309e321a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fDY0MCo0ODB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://spanish-seaweed.info",
    //         "description": "Voluptatem sunt pariatur et animi quas.",
    //         "category": "Computers",
    //         "tag": "request",
    //         "id": "5"
    //     },
    //     {
    //         "title": "Block, Schamberger and Orn",
    //         "icon_url": "https://images.unsplash.com/photo-1654707036993-92323d675321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8NjQwKjQ4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         "link": "https://handy-frustration.info",
    //         "description": "Rerum minus deleniti voluptatibus molestias vitae.",
    //         "category": "Outdoors",
    //         "tag": "request",
    //         "id": "6"
    //     },
    //     {
    //         "title": "Hermiston - Turcotte",
    //         "icon_url": "https://images.unsplash.com/photo-1564286804252-85b3ec2e9752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8NjQwKjQ4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         "link": "https://regal-communication.org",
    //         "description": "Minima ipsam corporis.",
    //         "category": "Books",
    //         "tag": "user",
    //         "id": "7"
    //     },
    //     {
    //         "title": "Parker - Fay",
    //         "icon_url": "https://images.unsplash.com/photo-1567015879523-fdef92821626?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8NjQwKjQ4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         "link": "https://roasted-squid.name",
    //         "description": "Consequatur ratione necessitatibus hic distinctio ex.",
    //         "category": "Kids",
    //         "tag": "user",
    //         "id": "8"
    //     },
    //     {
    //         "title": "Schmidt Inc",
    //         "icon_url": "https://images.unsplash.com/photo-1528754652061-5d4a6e39dcb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8NjQwKjQ4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         "link": "https://frosty-arch-rival.org",
    //         "description": "Quasi sit pariatur aut et.",
    //         "category": "Music",
    //         "tag": "user",
    //         "id": "9"
    //     },
    //     {
    //         "title": "Littel Inc",
    //         "icon_url": "https://images.unsplash.com/photo-1528559188038-3ea5a6ab80d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8NjQwKjQ4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         "link": "https://green-variety.net",
    //         "description": "Mollitia dolore qui optio maxime et dignissimos.",
    //         "category": "Movies",
    //         "tag": "request",
    //         "id": "10"
    //     },
    //     {
    //         "title": "Schmidt - Fritsch",
    //         "icon_url": "http://loremflickr.com/640/480",
    //         "link": "https://forceful-carnation.biz",
    //         "description": "Eos possimus aperiam inventore minima qui dolor.",
    //         "category": "Electronics",
    //         "tag": "request",
    //         "id": "11"
    //     },
    //     {
    //         "title": "Orn - Flatley",
    //         "icon_url": "https://images.unsplash.com/photo-1654707037243-f181a4f2246a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NjQwKjQ4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://oddball-cause.biz",
    //         "description": "Ut doloribus aut id voluptatem culpa molestias error totam.",
    //         "category": "Home",
    //         "tag": "user",
    //         "id": "12"
    //     },
    //     {
    //         "title": "McKenzie and Sons",
    //         "icon_url": "https://images.unsplash.com/photo-1560625172-015b4d1f3364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8NjQwKjQ4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://raw-handrail.org",
    //         "description": "Sit repudiandae in fugiat cupiditate exercitationem omnis.",
    //         "category": "Tools",
    //         "tag": "request",
    //         "id": "13"
    //     },
    //     {
    //         "title": "Gutkowski, Herzog and Schneider",
    //         "icon_url": "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b3V0ZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://heavenly-pressroom.biz",
    //         "description": "Quia et a possimus sit.",
    //         "category": "Beauty",
    //         "tag": "user",
    //         "id": "14"
    //     },
    //     {
    //         "title": "Kshlerin - Toy",
    //         "icon_url": "https://images.unsplash.com/photo-1445108771252-d1cc31a02a3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b3V0ZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://wicked-monastery.biz",
    //         "description": "Temporibus earum fuga.",
    //         "category": "Home",
    //         "tag": "request",
    //         "id": "15"
    //     },
    //     {
    //         "title": "Okuneva - Williamson",
    //         "icon_url": "https://images.unsplash.com/photo-1467385829985-2b0fb82b5193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "https://impressionable-mutton.net",
    //         "description": "Repudiandae dignissimos impedit rerum.",
    //         "category": "Beauty",
    //         "tag": "user",
    //         "id": "16"
    //     },
    //     {
    //         "title": "Harvey LLC",
    //         "icon_url": "https://images.unsplash.com/photo-1554322662-5b660295377d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "https://good-natured-icicle.name",
    //         "description": "Quibusdam aut maiores nam quis similique id exercitationem.",
    //         "category": "Music",
    //         "tag": "request",
    //         "id": "17"
    //     },
    //     {
    //         "title": "Jacobs, White and Keeling",
    //         "icon_url": "https://images.unsplash.com/photo-1542685295-b280fd4d2c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://educated-epee.com",
    //         "description": "Enim qui sit repellendus id sed laudantium omnis iure dolorum.",
    //         "category": "Kids",
    //         "tag": "request",
    //         "id": "18"
    //     },
    //     {
    //         "title": "Lang, Ullrich and Koepp",
    //         "icon_url": "https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "https://joyous-phrasing.com",
    //         "description": "Placeat unde perspiciatis.",
    //         "category": "Health",
    //         "tag": "request",
    //         "id": "19"
    //     },
    //     {
    //         "title": "Durgan - Langworth",
    //         "icon_url": "https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://unfit-lawyer.info",
    //         "description": "A quod qui rerum molestiae quas id saepe vero doloribus.",
    //         "category": "Jewelery",
    //         "tag": "request",
    //         "id": "20"
    //     },
    //     {
    //         "title": "Stracke Group",
    //         "icon_url": "https://images.unsplash.com/photo-1542176281-363d7e8c1c04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://formal-wax.com",
    //         "description": "Ea est laboriosam odit aut quia voluptates laudantium.",
    //         "category": "Outdoors",
    //         "tag": "request",
    //         "id": "21"
    //     },
    //     {
    //         "title": "Yundt, Cremin and Stokes",
    //         "icon_url": "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "https://unlined-battleship.name",
    //         "description": "Sit numquam accusamus natus dolor.",
    //         "category": "Sports",
    //         "tag": "user",
    //         "id": "22"
    //     },
    //     {
    //         "title": "Orn - Lehner",
    //         "icon_url": "https://images.unsplash.com/photo-1521127683823-528266543c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "https://dense-dynasty.biz",
    //         "description": "Velit culpa sint rerum quia id beatae impedit.",
    //         "category": "Computers",
    //         "tag": "request",
    //         "id": "23"
    //     },
    //     {
    //         "title": "Gerlach - Schmidt",
    //         "icon_url": "https://images.unsplash.com/photo-1541420937988-702d78cb9fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://feline-brake.name",
    //         "description": "Deleniti maxime aut vel quo vel vero non.",
    //         "category": "Electronics",
    //         "tag": "request",
    //         "id": "24"
    //     },
    //     {
    //         "title": "Mayert Inc",
    //         "icon_url": "https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://general-cheese.name",
    //         "description": "Omnis debitis amet enim consequatur nemo sit exercitationem alias porro.",
    //         "category": "Baby",
    //         "tag": "request",
    //         "id": "25"
    //     },
    //     {
    //         "title": "Blick - Donnelly",
    //         "icon_url": "https://images.unsplash.com/photo-1506184155123-73f3a6dfc2fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://extroverted-sister.biz",
    //         "description": "Maiores est fugit quidem ducimus similique nihil.",
    //         "category": "Kids",
    //         "tag": "user",
    //         "id": "26"
    //     },
    //     {
    //         "title": "Lindgren - Volkman",
    //         "icon_url": "https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://brilliant-peak.net",
    //         "description": "Occaecati aut quis eius tenetur sed et voluptates sint quaerat.",
    //         "category": "Outdoors",
    //         "tag": "request",
    //         "id": "27"
    //     },
    //     {
    //         "title": "Lakin Inc",
    //         "icon_url": "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://hasty-tooth.com",
    //         "description": "Dolor dolores modi occaecati temporibus ipsa aut necessitatibus laborum.",
    //         "category": "Games",
    //         "tag": "request",
    //         "id": "28"
    //     },
    //     {
    //         "title": "Price - Douglas",
    //         "icon_url": "https://images.unsplash.com/photo-1499915174960-6f5340157928?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG91dGRvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://worse-couch.org",
    //         "description": "Dolorem ut dolorem ea itaque repellendus ut quasi et.",
    //         "category": "Jewelery",
    //         "tag": "user",
    //         "id": "29"
    //     },
    //     {
    //         "title": "Sipes, Romaguera and Mitchell",
    //         "icon_url": "https://images.unsplash.com/photo-1654707036961-4967bee4fcae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fDY0MCo0ODB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    //         "link": "http://ornate-chipmunk.com",
    //         "description": "Nisi ea tenetur quas et.",
    //         "category": "Sports",
    //         "tag": "request",
    //         "id": "30"
    //     }
    // ]

    const { apiState, apiDispatch } = useContext(ApiContext);
    const notify = notification();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('');
    const itemsPerPage = 6;

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        console.log(apiState)
    }, [apiState])

    const fetchData = () => {
        apiDispatch({ type: "REQUEST" });
        console.log("requuest called")
        fakeApi().then((response) => {
            apiDispatch({ type: "SUCCESS", payload: response })
            notify(response, "SUCCESS");
        }).catch((error) => {
            apiDispatch({ type: "ERROR", payload: error })
            notify('Error in Loading Data, Please try again!', "ERROR")
        });
        // fetchDataApi().then((response) => {
        //     apiDispatch({ type: "SUCCESS", payload: response })
        //     notify(response, "SUCCESS");
        // }).catch((error) => {
        //     apiDispatch({ type: "ERROR", payload: error })
        //     notify('Error in Loading Data, Please try again!', "ERROR")
        // });
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSearch = event => {
        const { value } = event.target;
        setSearchQuery(value);
        setCurrentPage(1);
    };

    const activeData = apiState.data?.filter(card =>
        card.tag.toLowerCase().includes(activeTab)
    )

    const filteredData = activeData.filter(card =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    if (apiState.loading) {
        return (
            <Loading />
        );
    }

    return (
        <div className=" backdrop-blur-lg h-full w-full px-[10%] py-[3%] text-heading flex  flex-col gap-7">
            {/* User tab */}
            <div className="w-full h-12 flex items-center justify-center">
                <div className="w-[60%] h-full flex border border-borderColor rounded-md font-semibold text-xl">
                    <button onClick={() => setActiveTab('')} className={`h-full flex-1 p-2 border-r border-borderColor rounded-l-md ${activeTab === "" ? "bg-secnodaryButton text-white" : "bg-[#D7DFE93D]"} `}>
                        Resource
                    </button>
                    <button onClick={() => setActiveTab('request')} className={`h-full flex-1 p-2 border-r border-borderColor  ${activeTab === "request" ? "bg-secnodaryButton text-white" : "bg-[#D7DFE93D]"}`}>
                        Request
                    </button>
                    <button onClick={() => setActiveTab('user')} className={`h-full flex-1 p-2 ${activeTab === "user" ? "bg-secnodaryButton text-white" : "bg-[#D7DFE93D]"}`}>
                        User
                    </button>
                </div>
            </div>
            {/* Search bar */}
            <div className="w-full h-10">
                <div className="h-full w-1/2">
                    <label className="relative block">
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                            />
                                {/* <img src="search.svg" alt="search" /> */}
                            </svg>
                        </span>
                        <input value={searchQuery}
                            onChange={handleSearch} className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-lg" placeholder="Search" type="text" name="search" />
                    </label>
                </div>
            </div>
            {/* Resource tab */}

            {apiState.error ?
                <div className="md:h-full w-full flex flex-col gap-4  items-center justify-center text-2xl text-red-400">
                    {apiState.error.message}
                    <button className="bg-red-500 text-white p-2 rounded-md" onClick={fetchData}>Try again</button>
                </div> :
                <div className="md:h-full w-full grid grid-cols-2 md:grid-cols-3  gap-9">
                    {currentItems?.map((card, id) =>
                        <Card key={id} card={card} />
                    )}
                </div>
            }

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
        </div>
    )
}

export default Home

