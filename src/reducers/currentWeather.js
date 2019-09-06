export default (
  state = [], data) => {
  switch (data.type) {
    case 'CURRENT_WEATHER_READER':
      return data.payload;

    case 'CURRENT_WEATHER_ERROR':
      return data.payload;

    default:
      return state;
  };
}