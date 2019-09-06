export default (state = false, data) => {
    switch (data.type) {
        case 'CHANGE_HOME_STATE':
            return data.payload;

        default:
            return state;
    };
}