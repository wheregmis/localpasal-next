import faker from "faker";
import { useEffect, useState } from "react";
import useSWR from "swr";

function FilterComponent({ categories }) {
  return (
    <div className="flex space-x-1 mt-4 ml-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {categories &&
        categories?.map((category) => {
          return (
            <div
              key={category.categoryId}
              className="border-gray-300 shadow-sm border mb-2 px-4 py-2
      rounded-full"
            >
              <button className="  text-sm w-auto truncate text-center mx-2">
                {category.categoryName}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default FilterComponent;
