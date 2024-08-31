
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../features/DashboardSlice';

const AddWidget = ({ categoryId }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now(),
      name,
      text,
    };
    dispatch(addWidget({ categoryId, widget: newWidget }));
    setName('');
    setText('');
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button
        onClick={handleAddWidget}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Widget
      </button>
    </div>
  );
};

export default AddWidget;
