import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import RecipeDetails from '../components/recipeDetails';
import getMealDetails from '../redux/API/Actions/getMealDetails';

const getIngredient = (data) => {
  const result = [];
  for (let i = 1; i <= 20; i += 1) {
    if (data[`strIngredient${i}`] === '') {
      break;
    }
    result.push(data[`strIngredient${i}`]);
  }
  return result;
};

function RecipePage({
  addToViewed, data, error, fetchRecipe, ingredients,
}) {
  const { id } = useParams();

  useEffect(() => {
    fetchRecipe(id);
  }, [id, getMealDetails]);

  return (
    <Container style={{ minHeight: '100vh' }}>
      {error === '' && Object.keys(data).length > 0 && data.idMeal === id && (
      <>
        <RecipeDetails data={data} onViewed={addToViewed} ingredients={ingredients} />
      </>
      )}
    </Container>
  );
}

RecipePage.propTypes = {
  addToViewed: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  data: PropTypes.shape().isRequired,
  fetchRecipe: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(String).isRequired,
};

const mapStateToProps = (state) => {
  const { singleMeal } = state.api;
  const { details } = singleMeal;
  return ({
    data: details,
    error: singleMeal.error,
    ingredients: getIngredient(details),
    viewed: state.view.viewedRecipes,
  });
};

const mapDispatchToProps = (dispatch) => ({

  fetchRecipe: (id) => {
    dispatch(getMealDetails(id));
  },
  addToViewed: (action) => {
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
