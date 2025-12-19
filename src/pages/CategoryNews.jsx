import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(data)
    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {
        const filteredNews = data.filter(news => news.category_id == id);
        console.log(filteredNews);

        setCategoryNews(filteredNews);

    }, [data, id])

    return (
        <div>
            Category news -{categoryNews.length}
        </div>
    );
};

export default CategoryNews;