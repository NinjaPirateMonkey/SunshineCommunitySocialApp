export default ( state = {}, action ) => {
    switch( action.type ) {
        case 'HOME_PAGE_LOADED':
            console.log( 'inside reducer' );
            return {
                ...state,
                user: action.data,
            };
        default:
            return state;
    }
};