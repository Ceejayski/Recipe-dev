import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import CategoryFilter from '../categoryFilter';
import getAllMealsinCat from '../../redux/API/Actions/allMeals';
import { UPDATE_CATEGORY } from '../../redux/API/Actions';
import MealDetails from '../MealDetails';

function CategoryRecipe({
  options, list, dispatch, filter, current, loading,
}) {
  const handleFilterChange = (e) => {
    const category = e.target.value;
    dispatch(category);
    filter(category);
  };

  useEffect(() => {
    dispatch(options[0]);
    filter(options[0]);
  }, [options]);

  return (
    <Container className="mt-5">
      <div className="mt-5 d-flex justify-content-between">
        <div className="items mt-3">
          <CategoryFilter
            options={options}
            current={current}
            onChange={handleFilterChange}
          />
        </div>
        <div className="items mt-3">
          <h3>{list.category}</h3>
        </div>
        <div className="items mt-3" />
      </div>
      {!loading && (
        <>
          <div className="mt-4 row">
            {list.products.map((product) => (
              <div className="col-md-3 mb-4" key={product.idMeal}>
                <MealDetails data={product} tags={false} />
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
}

CategoryRecipe.propTypes = {
  options: PropTypes.arrayOf(String).isRequired,
  current: PropTypes.string.isRequired,
  list: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { allMeals } = state.api;
  return (
    {

      list: allMeals,
      current: allMeals.category,
      loading: allMeals.pending,
    }
  );
};
const mapDispatchToProps = {
  dispatch: getAllMealsinCat,
  filter: UPDATE_CATEGORY,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryRecipe);
