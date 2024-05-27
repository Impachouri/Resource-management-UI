import React from 'react'

const Card = ({ card, searchTerm }) => {

    const highlightSearchTerm = (text, term) => {
        if (!term) return text;
        const regex = new RegExp(`(${term})`, 'gi');
        return text.split(regex).map((part, index) =>
            regex.test(part) ? <mark key={index}>{part}</mark> : part
        );
    };

    return (
        <div className="border border-borderColor p-4 flex flex-col gap-4 rounded-md text-para bg-white">
            <div className="flex gap-7 items-center">
                <div className='w-11 h-11'>
                    <img src={card.icon_url} alt="" className='w-full h-full object-cover rounded' />
                </div>
                <div className="flex flex-col">
                    <p className="text-xl font-medium text-heading">{highlightSearchTerm(card.title, searchTerm)}</p>
                    <p>{card.tag}</p>
                    <p className="text-sm">{card.category}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <a href={card.link} className="text-secnodaryButton">{card.link}</a>
                <p>{card.description}</p>
            </div>
        </div>
    )
}

export default Card;