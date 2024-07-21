import React, { useState } from 'react';
import { css } from '@linaria/core';

const categories = ['전체', '생활/주방', '패션잡화', '가공식품','유아동','인테리어','뷰티/미용','디지털/전자기기','티켓/교환권','스포츠/레저'];

const CategorySlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={categorySlider}>
            {categories.map((category, index) => (
                <div
                    key={index}
                    className={`${categoryItem} ${index === activeIndex ? active : ''}`}
                    onClick={() => setActiveIndex(index)}
                >
                    {category}
                </div>
            ))}
        </div>
    );
};

export default CategorySlider;

const categorySlider = css`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    background-color: #f8f8f8;
    padding: 10px 15px;
    margin-top:30px;
`;

const categoryItem = css`
    padding: 8px 16px;
    margin-right: 8px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    color: #333;
`;

const active = css`
    background-color: #ff5a5f;
    color: #fff;
    border-color: #ff5a5f;
`;