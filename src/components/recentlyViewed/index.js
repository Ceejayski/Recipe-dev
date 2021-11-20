import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function RecentlyViewed() {
  const data = useSelector((state) => state.view.viewedRecipes);
  return (
    <>
      {data.length > 0 && (
        <>
          <h3 className="mt-5 mb-3">Recently Viewed Recipes</h3>
          <div className="row gx-1">
            {data.map((item) => (
              <div className="col-2" key={item.id}>
                <Link to={`/recipe/${item.id}`}>
                  <div className="card">
                    <img src={item.pic} className="card-img" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default RecentlyViewed;
