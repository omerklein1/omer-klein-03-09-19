export default (state = true, data) => {
    switch (data.type) {
        case 'CONVERT_DONE':
            return !data.payload;

        default:
            return state;
    };
}