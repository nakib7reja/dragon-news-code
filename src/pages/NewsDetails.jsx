import React from 'react';
import Header from '../components/Header';

const NewsDetails = () => {
    return (
        <div>
            <header className=''>
            <Header></Header>
            </header>
            <main className='w-11/12 mx-auto'>
                <section>
                    <h2 className='font-bold mb-5'>News Details</h2>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;