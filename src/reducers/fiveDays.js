export default (
  state = [], data) => {
  switch (data.type) {
    case 'FIVE_DAYS_READER':
      return data.payload;

    case 'FIVE_DAYS_ERROR':
      return [...data.payload];

    default:
      return state;
  };
}