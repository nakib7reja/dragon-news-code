import React from 'react';
import swImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'




const QZone = () => {
    return (
        <div className='bg-base-200  p-3'>
            <h2 className="font-bold mb-5">QZone</h2>
            <div className="space-y-8">
                <img src={swImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;