import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../features/DashboardSlice';

const AddWidgetSidebar = ({ onClose }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);

  const handleAddWidget = () => {
    if (widgetName.trim() === '' || widgetText.trim() === '' || !selectedCategory) return;
  
    const newWidget = {
      id: Date.now().toString(),
      name: widgetName,
      text: widgetText,
      value: Math.floor(Math.random() * 100), 
    };
  
    dispatch(addWidget({ categoryId: selectedCategory, widget: newWidget }));
    console.log("Widget added:", newWidget); 
    onClose();
  };

  return (
    <div className="position-fixed top-0 right-0 h-100 bg-light p-4 shadow-lg" style={{ width: '300px' }}>
      <h4 className="mb-4">Add Widget</h4>
      <div className="mb-3">
        <label htmlFor="widgetName" className="form-label">Widget Name</label>
        <input
          type="text"
          className="form-control"
          id="widgetName"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="widgetText" className="form-label">Widget Text</label>
        <textarea
          className="form-control"
          id="widgetText"
          rows="3"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        ></textarea>
      </div>

    
      <div className="mb-4">
        <label className="form-label">Select Category</label>
        {categories.map((category) => (
          <div key={category.id} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value={category.id}
              id={`category-${category.id}`}
              checked={selectedCategory === category.id}
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            <label className="form-check-label" htmlFor={`category-${category.id}`}>
              {category.name}
            </label>
          </div>
        ))}
      </div>

      <button className="btn btn-primary w-100" onClick={handleAddWidget}>
        Confirm
      </button>
      <button className="btn btn-secondary w-100 mt-2" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default AddWidgetSidebar;
