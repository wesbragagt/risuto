// import decode from 'jwt-decode';

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return { loggedIn: false, registered: true, message: action.payload.message };

        case 'REGISTER_FAILURE':
            return { loggedIn: false, message: action.payload.message };

        case 'LOGIN_SUCCESS':
            const token = action.payload.token.split(' ')[1];
            localStorage.setItem('token', token);
            return { loggedIn: true };

        case 'LOGIN_FAILURE':
            return { loggedIn: false, message: action.payload.error };

        case 'LOGOUT':
            localStorage.removeItem('token');
            return { loggedIn: false };

        default:
            return state;
    }
};
