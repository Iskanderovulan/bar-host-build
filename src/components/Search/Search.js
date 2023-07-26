import React, { useEffect, useState, useRef, useId } from 'react';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { searchCocktailsAsync } from '../../redux/actions/asyncActions';
import TextField from '@mui/material/TextField';
import Item from '../Item/Item';

const Search = () => {

    const searchParams = new URLSearchParams(window.location.search);
    const foundParams = searchParams.get('search') || '';
    console.log(foundParams)

    const { data } = useSelector(state => state.search)
    const [value, setValue] = useState('' || foundParams)
    const dispatch = useDispatch()
    const inputRef = useRef()
    console.log(data)
    const inputId = useId()

    // console.log(inputRef);

    useEffect(() => {
        dispatch(searchCocktailsAsync(value))
    }, [dispatch, value])

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const items = data?.map(item => (
        <Item key={item.idDrink} item={item} />
    ))

    const handleValue = (e) => {
        setValue(e.target.value)
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('search', e.target.value);
        window.history.pushState({ path: e.target.value }, '', currentUrl.toString());
    }

    return (
        <div>
            <label htmlFor={inputId}>Search</label>
            <TextField
                style={{ marginTop: '30px' }}
                // id="outlined-basic"
                value={value || foundParams}
                label="Outlined"
                variant="outlined"
                id={inputId}
                ref={inputRef}
                onChange={handleValue}
            />

            <div className="wrap">
                {data ? items : <h2>No such a data</h2>}
            </div>
        </div>


    );
};

export default Search;