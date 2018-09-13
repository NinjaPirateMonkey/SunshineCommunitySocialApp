export default ( state = {}, action ) => {
    switch( action.type ) {
        case 'LOGIN_USER':
            console.log('User logging in', action );
            return {
                ...state,
                user: action.data.user,
            };
        default:
            return state;
    }
};