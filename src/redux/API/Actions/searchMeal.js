const getQueryResults = (inputvalue, callback) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURI(inputvalue.trim())}`)
    .then((res) => res.json())
    .then((res) => {
      const options = res.meals !== null ? res.meals.map(
        (object) => (({
          idMeal: value,
          strMeal: label,
          strMealThumb: icon,
        }) => ({ value, label, icon }))(object),
      ) : [];
      callback(options);
    }).catch((error) => {
      callback(error);
    });
};

export default getQueryResults;
