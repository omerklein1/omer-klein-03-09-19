export default (state = [], data) => {
    switch (data.type) {
        case 'FAVORITES_LIST_READER':
            return data.payload;
    
        default:
            return state;
    };
}