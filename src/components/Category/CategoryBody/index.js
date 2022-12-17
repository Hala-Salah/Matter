import React , {useContext} from "react";
import styles from "./styles.module.css";
import {ProductsContext} from '../../../App'

const CategoryBody = (props) => {
    const ProductData = useContext(ProductsContext);
   
if(ProductData){
    const categoryArray = [...new Set(ProductData.map(item => item.category))];
    return (
        <div className={styles.body}>
          <div className={styles.leftSection}>
            <h1 className={styles.filters}>Filters</h1>
            {categoryArray.map((category , index)=>{
                return(
<>                    <h1 key={index} className={props.category ===category ?styles.selected : styles.ca}>{category}</h1>
<hr />
</>                    
                )
            })}
          </div>
          <div className={styles.rightSection}></div>
        </div>
      );
}

  
};

export default CategoryBody;
