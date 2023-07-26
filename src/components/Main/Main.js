import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktailsAsync, getCategoriesAsync } from '../../redux/actions/asyncActions';
import Item from '../Item/Item'
import Categories from '../Categories/Categories'
import Header from '../Header/Header';
import { Snackbar } from '@mui/material';

const Main = () => {
    const dispatch = useDispatch()
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const { data, categories, category } = useSelector(state => state.main)
    const { isLoading, error } = useSelector(state => state.loader)
    const searchParams = new URLSearchParams(window.location.search);
    const foundParams = searchParams.get('category');
    console.log(foundParams)

    useEffect(() => {
        Promise.all([
            dispatch(getCocktailsAsync(
                foundParams
                    ? foundParams
                    : 'Ordinary_Drink'
            )),
            dispatch(getCategoriesAsync())
        ])
    }, [dispatch, foundParams])



    const items = data?.map(item => (
        <Item key={item.idDrink} item={item} />
    ))
    const getCocktailsByCategoryUI = (e) => {
        dispatch(getCocktailsAsync(e.target.value))
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('category', e.target.value);
        window.history.pushState({ path: e.target.value }, '', currentUrl.toString());
        setOpenSnackbar(true);
        setTimeout(() => setOpenSnackbar(false), 2000);
    }

    if (isLoading) return <h2>Loading.....</h2>
    if (error) return <h2>{error}</h2>

    return (

        <section>
            <div className="container">
                <h2>MAIN</h2>
                <Categories
                    categories={categories}
                    getCocktailsByCategoryUI={getCocktailsByCategoryUI}
                    category={category}
                />
                <div className='row gy-5 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4'>
                    {items}
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={openSnackbar}
                    message="Category has changed"
                // autoHideDuration={2000}
                />
            </div>

        </section>


    );
};

export default Main;


