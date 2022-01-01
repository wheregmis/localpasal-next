import faker from "faker";
import { useEffect, useState } from "react";

function FilterComponent() {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setFilters(suggestion);
  }, []);

  return (
    <div className="flex space-x-1 p-3 overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {filters.map((profile) => {
        return (
          <div>
            <div
              className="border-gray-300 shadow-sm border mb-2 px-4 py-2
      rounded-full"
            >
              <button className="  text-sm w-auto truncate text-center mx-2">
                {profile.username}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FilterComponent;
