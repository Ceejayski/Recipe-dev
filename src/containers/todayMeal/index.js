import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getRandomMeals from '../../redux/API/Actions/getRandomMeals';
import MealDetails from '../../components/MealDetails';

function TodayMeals(props) {
  const { randomMeal, products } = props;
  useEffect(() => {
    if (products.length < 5) {
      let i = 0;

      while (i <= 9) {
        randomMeal();
        i += 1;
      }
    }
  }, []);
  return (
    <>
      <h3 className="mt-5 text-center">Recipes of the Day</h3>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-4 col-md-3 mt-5" key={product.idMeal}>
            <MealDetails data={product} />
          </div>
        ))}
      </div>
    </>
  );
}

TodayMeals.propTypes = {
  randomMeal: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = {
  randomMeal: getRandomMeals,
};

const mapStateToProps = (state) => {
  const { randomMeals } = state.api;
  return ({
    pending: randomMeals.pending,
    products: randomMeals.meals,
    error: randomMeals.error,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TodayMeals);
