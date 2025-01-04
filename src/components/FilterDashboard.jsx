import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";

function FilterDashboard({ onFilterApply }) {
  const [filterVisible, setFilterVisible] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [activePreset, setActivePreset] = useState("");

  const setPredefinedRange = (type) => {
    const today = new Date();
    let startDate, endDate;

    switch (type) {
      case "today":
        startDate = new Date(today);
        endDate = new Date(today);
        break;
      case "yesterday":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 1);
        endDate = new Date(startDate);
        break;
      case "thisWeek":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - today.getDay());
        endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);
        break;
      case "lastWeek":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - today.getDay() - 7);
        endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);
        break;
      case "thisMonth":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case "lastMonth":
        startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        endDate = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      default:
        startDate = new Date(today);
        endDate = new Date(today);
    }

    setDateRange([{ startDate, endDate, key: "selection" }]);
    setActivePreset(type); // Set active preset
  };

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    setActivePreset(""); // Reset active preset
  };

  const handleApplyFilter = () => {
    if (!dateRange[0]?.startDate || !dateRange[0]?.endDate) {
      alert("Please select a valid date range before applying the filter.");
      return;
    }
    onFilterApply({
      startDate: dateRange[0].startDate,
      endDate: dateRange[0].endDate,
    });
    setFilterVisible(false);
    console.log("Filter applied:", dateRange);
  };

  return (
    <div className="relative">
      {/* Open Filter Button */}
      <button
        onClick={() => setFilterVisible(!filterVisible)}
        className="bg-primary text-white my-3 px-4 py-2 rounded-lg shadow-md flex justify-center items-center gap-2"
      >
        <IoFilter className="text-2xl" />
        <p className="text-xl">{activePreset ? `Filter: ${activePreset}` : "Filter"}</p>
      </button>

      {/* Filter Panel */}
      {filterVisible && (
        <div className="absolute top-15 left-0 bg-white shadow-lg rounded-lg p-4 z-50 w-1/2">
          <div className="flex gap-4">
            {/* Preset Buttons */}
            <div className="flex flex-col gap-2">
              {["today", "yesterday", "thisWeek", "lastWeek", "thisMonth", "lastMonth"].map(
                (type) => (
                  <button
                    key={type}
                    className={`px-4 py-2 rounded-lg ${
                      activePreset === type
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-black hover:bg-gray-200"
                    }`}
                    onClick={() => setPredefinedRange(type)}
                  >
                    {type}
                  </button>
                )
              )}
            </div>
            {/* Custom Date Picker */}
            <div>
              <DateRange
                editableDateInputs={true}
                onChange={handleSelect}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                className="w-full"
              />
            </div>
          </div>

          {/* Apply Button */}
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg w-full"
            onClick={handleApplyFilter}
          >
            Apply Filter
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterDashboard;
