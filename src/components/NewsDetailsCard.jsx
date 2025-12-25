import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const { category_id, image_url, title, details } = news
    return (
        <div className='py-5 pr-10'>
            <img className='w-full rounded-2xl mx-auto' src={image_url} alt="" />
            <h2 className="font-bold text-2xl my-5">{title}</h2>
            <p className="text-xl leading-loose">{details}</p>

            <Link className='m-5 btn btn-secondary' to={`/category/${category_id}`}>{'<-'} All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;