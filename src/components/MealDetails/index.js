import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MealDetails({ data, tags }) {
  return (
    <div className="meal-details">
      <Link to={`/recipe/${data.idMeal}`}>
        <Card bg="white" className="rounded">
          <Card.Img variant="top" src={data.strMealThumb} />
          <Card.Body>
            <Card.Title>{data.strMeal}</Card.Title>
          </Card.Body>
          {tags && (
          <ListGroup variant="flush">
            {data.strCategory !== undefined && (
            <ListGroup.Item>
              <div className="details d-flex justify-content-between">
                <p className="mb-0 list-title">Main Ingredient</p>
                <p className="mb-0" style={{ maxWidth: '60%' }}>{data.strCategory}</p>
              </div>
            </ListGroup.Item>
            )}
            {(data.strTags !== null) && (
            <ListGroup.Item>
              <div className="details d-flex justify-content-between">
                <p className="mb-0 list-title">Tags</p>
                <p className="mb-0" style={{ maxWidth: '70%' }}>{data.strTags}</p>
              </div>
            </ListGroup.Item>
            )}
            {data.strArea !== undefined && (
            <ListGroup.Item>
              <div className="details d-flex justify-content-between">
                <p className="mb-0 list-title">Localization</p>
                <p className="mb-0" style={{ maxWidth: '70%' }}>{data.strArea}</p>
              </div>
            </ListGroup.Item>
            )}
          </ListGroup>
          )}
        </Card>
      </Link>
    </div>
  );
}

MealDetails.defaultProps = {
  tags: true,
};

MealDetails.propTypes = {
  data: PropTypes.shape().isRequired,
  tags: PropTypes.bool,
};

export default MealDetails;
