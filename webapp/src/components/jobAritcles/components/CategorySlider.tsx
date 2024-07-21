import React, { useState } from 'react';
import { css } from '@linaria/core';

const categories = ['전체', '생활/주방', '패션잡화', '가공식품'];

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

// CSS styles using linaria
const categorySlider = css`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    background-color: #fff;
    padding: 10px 0;
`;

const categoryItem = css`
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:not(.active):hover {
        background-color: #f1f1f1;
    }
`;

const active = css`
    background-color: #ff5a5f;
    color: #fff;
`;
