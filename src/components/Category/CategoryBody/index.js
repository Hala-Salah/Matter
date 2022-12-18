import React, {useContext } from "react";
import styles from "./styles.module.css";
import Products from "../../Products";
import {ProductsContext, CategoryContext} from '../../../App'
const CategoryBody = (props) => {
  const ProductData = useContext(ProductsContext);
  const categories = useContext(CategoryContext);

  if (ProductData && categories) {
    return (
      <div className={styles.body}>
        <div className={styles.leftSection}>
          <h1 className={styles.filters}>Filters</h1>
          {categories.map((category, ind) => {
            return (
              <div key={ind}>
                <button
                  className={props.category===category?styles.selected:styles.category}
                  onClick={() => props.filteredChange(`${category}`)}
                >
                  {category}
                </button>
              </div>
            );
          })}
        </div>

        <Products productsData={props.filtered} />
      </div>
    );
  }
};

export default CategoryBody;
