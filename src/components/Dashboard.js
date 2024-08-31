
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import AddWidgetSidebar from './AddWidgetSidebar';
import WidgetCard from './WidgetCard';
import { removeWidget, searchWidget } from '../features/DashboardSlice';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const categories = useSelector((state) => state.dashboard.categories);
  const searchQuery = useSelector((state) => state.dashboard.searchQuery);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId }));
  };

  const onSearch = (query) => {
    dispatch(searchWidget(query));
  };

  return (
    <div className="container my-4" style={{ backgroundColor: '#cce5ff', padding: '20px', borderRadius: '8px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Search onSearch={onSearch} />
        <button className="btn btn-primary" onClick={toggleSidebar}>
          + Add Widget
        </button>
      </div>

      {categories.map((category) => {
        const filteredWidgets = category.widgets.filter(widget =>
          widget.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
          <div key={category.id} className="mb-5">
            <h2 className="text-dark font-bold mb-4">{category.name}</h2>
            <div className="row">
              {filteredWidgets.length > 0 ? (
                filteredWidgets.map((widget) => (
                  <WidgetCard
                    key={widget.id}
                    title={widget.name}
                    text={widget.text}
                    value={widget.value || 50}
                    onRemove={() => handleRemoveWidget(category.id, widget.id)}
                  />
                ))
              ) : (
                <p className="text-dark">No widgets found.</p>
              )}
            </div>
          </div>
        );
      })}

      {isSidebarOpen && <AddWidgetSidebar onClose={toggleSidebar} />}
    </div>
  );
};

export default Dashboard;
