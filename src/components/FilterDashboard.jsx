import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";

function FilterDashboard({ onConfirm }) {
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
    compare: {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "compare",
    },
  });

  const handleDateChange = (item) => {
    setState((prevState) => ({
      ...prevState,
      ...item,
    }));
  };

  const handleConfirm = () => {
    // Call the onConfirm prop to notify the parent component
    onConfirm(state);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Select Date Range</h3>
      <DateRangePicker
        onChange={handleDateChange}
        months={1}
        minDate={addDays(new Date(), -300)}
        maxDate={addDays(new Date(), 900)}
        direction="vertical"
        scroll={{ enabled: true }}
        ranges={[state.selection, state.compare]}
      />
      <div className="mt-4">
        <h4 className="text-lg font-medium">Selected Dates</h4>
        <p>
          <strong>Start Date (Selection):</strong>{" "}
          {state.selection.startDate ? state.selection.startDate.toLocaleDateString() : "None"}
        </p>
        <p>
          <strong>End Date (Selection):</strong>{" "}
          {state.selection.endDate ? state.selection.endDate.toLocaleDateString() : "None"}
        </p>
        <p>
          <strong>Start Date (Compare):</strong>{" "}
          {state.compare.startDate ? state.compare.startDate.toLocaleDateString() : "None"}
        </p>
        <p>
          <strong>End Date (Compare):</strong>{" "}
          {state.compare.endDate ? state.compare.endDate.toLocaleDateString() : "None"}
        </p>
      </div>
      <div className="mt-4 flex justify-end gap-4">
        <button
          onClick={handleConfirm}
          className="bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default FilterDashboard;
