import * as actionTypes from './actionTypes';
// import axios from '../../axios-orders';

export const addIngredient = ( name ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = ( name ) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
       dispatch(setIngredients(
           {salad:1, bacon:1, cheese:1, meat:1}
       ));
    };
    // return dispatch => {
    //     axios.get( 'https://react-hooks-update.firebaseio.com/ingredients.json' )
    //         .then( response => {
    //            dispatch(setIngredients({response.data}));
    //         } )
    //         .catch( error => {
    //             dispatch(fetchIngredientsFailed());
    //         } );
    // };
};
