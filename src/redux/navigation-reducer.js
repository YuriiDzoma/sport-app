

let initialState = {
    navbar: [
        {id: 1, title: 'Profile', url: 'profile/', logotype: ''},
        {id: 2, title: 'Training', url: 'training/', logotype: ''},
        {id: 3, title: 'Friends', url: 'friends/', logotype: ''},
    ]
}

export const navigationReducer = (state = initialState, action) => {
    return state;
}
export default navigationReducer;