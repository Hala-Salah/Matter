import React from "react";

const LeftCategorySection = () => {
  return (
    <div className={styles.leftSection}>
      <h1 className={styles.filters}>Filters</h1>
      {allCategories.map((category, index) => {
        return (
          <>
            <div key={index}>
              <button
                className={styles.category}
                onClick={() => filterProducts(`${category}`)}
              >
                {category}
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default LeftCategorySection;
