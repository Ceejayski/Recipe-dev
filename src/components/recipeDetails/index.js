import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import addRecipeToViewed from '../../redux/views/view.actions';

export default function RecipeDetails({
  data, ingredients, onViewed,
}) {
  const view = { id: data.idMeal, name: data.strMeal, pic: `${data.strMealThumb}/preview` };
  const viewed = addRecipeToViewed(view);

  useEffect(() => {
    onViewed(viewed);
  }, [data]);

  return (
    <>

      <div className="mt-5">
        <div className="mt-5">
          <h2 className="text-center mb-4 pt-4">{data.strMeal}</h2>
          <div className="bg-white">
            <div className="row gx-1 mb-0">
              <div className="col-7">
                <img src={data.strMealThumb} alt="meal" className="img-fluid " />
              </div>
              <div className="col-5 bg-white py-3 px-3">
                <p className="lead">
                  {' '}
                  {data.strMeal}
                  {' '}
                  is from the
                  {' '}
                  {data.strArea}
                  {' '}
                  Cuisines and also can be classified into the
                  {' '}
                  {data.strCategory}
                  {' '}
                  Category
                </p>
                <h3 className="ps-3">
                  <u>Ingredients and Measur</u>
                  ements
                </h3>
                <div className="ps-4 py-1">

                  {ingredients.map((item, index) => (
                    <p className="lead" key={Math.random() * 1000}>
                      <span className="me-2">
                        {index + 1}
                        .)
                      </span>
                      <span>
                        {item}
                        {' '}
                        {data[`strMeasure${index}`]}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="py-5 px-5">
              <h3 className="text-center mb-5">
                {' '}
                <u>Procedures</u>
              </h3>

              {data.strInstructions !== undefined && (

              <p className="lead text-center">
                {parse(data.strInstructions.replace(/(?:\r\n|\r|\n)/g, '<br />'))}
              </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
RecipeDetails.propTypes = {
  data: PropTypes.shape().isRequired,
  ingredients: PropTypes.arrayOf(String).isRequired,
  onViewed: PropTypes.func.isRequired,
};
