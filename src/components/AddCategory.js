import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWidget } from '../store/dashboardSlice';

const AddCategory = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleCheckboxChange = (categoryId, widgetId, isChecked) => {
    if (!isChecked) {
      dispatch(removeWidget({ categoryId, widgetId }));
    }
    
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          {category.widgets.map((widget) => (
            <div key={widget.id}>
              <input
                type="checkbox"
                checked={true}
                onChange={(e) =>
                  handleCheckboxChange(
                    category.id,
                    widget.id,
                    e.target.checked
                  )
                }
              />
              <label>{widget.name}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AddCategory;
