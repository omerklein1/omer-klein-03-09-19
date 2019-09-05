export default (state = true, data) => {
    switch (data.type) {
        case 'CHANGE_THE_LIGHT':
            return !data.payload;

        default:
            return state;
    };
}