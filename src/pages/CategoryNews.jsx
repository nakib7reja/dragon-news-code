import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/homelayouts/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(data)
    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {
        if (id == 0) {
            setCategoryNews(data)
            return;
        }
        if (id == 1) {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews)
            return;
        }

        const filteredNews = data.filter(news => news.category_id == id);
        console.log(filteredNews);

        setCategoryNews(filteredNews);

    }, [data, id])

    return (
        <div>
           <h2 className='font-bold text-2xl'> Dragon news ({categoryNews.length} news found)</h2>

            <div className="grid grid-cols-1 gap-5 mt-5">
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;