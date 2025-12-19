import React from "react";
import { FaShareAlt, FaEye, FaStar, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        image_url,
        details,
    } = news;

    return (
        <div className=" rounded-2xl shadow-md space-y-4">
            {/* Author Section */}
            <div className="flex items-center justify-between rounded-t-2xl bg-base-200 p-5">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-base">{author.name}</h3>
                        <p className="text-sm text-gray-500">
                            {new Date(author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <FaRegBookmark className="text-gray-500 text-2xl cursor-pointer"></FaRegBookmark>
                    <FaShareAlt className="text-gray-500 text-xl cursor-pointer" />
                </div>
            </div>
            <div className="p-5">

                {/* Title */}
                <h2 className="text-xl font-bold leading-snug">{title}</h2>

                {/* Thumbnail / Main Image */}
                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-56 object-cover rounded-xl"
                />

                {/* Details */}
                <p className="text-gray-700 text-sm">
                    {details.slice(0, 200)}...
                </p>
                <button className="text-orange-500 font-semibold">Read More</button>

                {/* Rating & Views */}
                <div className="flex justify-between items-center pt-2 border-t">
                    <div className="flex items-center gap-1 text-orange-400">
                        <FaStar /> <span className="font-semibold">{rating.number}</span>
                    </div>

                    <div className="flex items-center gap-1 text-gray-600">
                        <FaEye /> <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;