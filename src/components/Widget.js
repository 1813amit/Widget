
import React from 'react';

const Widget = ({ widget, onRemove }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold">{widget.name}</h3>
    <p className="text-gray-700">{widget.text}</p>
    <button
      onClick={onRemove}
      className="text-red-500 mt-4 hover:underline"
    >
      Remove
    </button>
  </div>
);

export default Widget;
