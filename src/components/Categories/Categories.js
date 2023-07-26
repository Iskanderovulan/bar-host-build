import React from 'react';

const Categories = ({ categories, getCocktailsByCategoryUI, category }) => {
    return (
        <select value={category} onChange={getCocktailsByCategoryUI}>
            {categories?.map(el => {
                const { strCategory } = el
                return (
                    <option key={strCategory} value={strCategory}>{strCategory}</option>
                )
            })}
        </select>
    );
};

export default Categories;