import React from "react";
import TitleComponent from "../../TitleComponent";
import TextParagraph from "../TextParagraph";
import styles from "./style.module.css";
import Rating from "./Rating";

const Customer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <TitleComponent title="Customer Reviews" />
        </div>
        {/* content */}
        <div className={styles.firstRow}>
          <div className={styles.rateSide}>
            <Rating/>            
            <p className={styles.rateText}>rate of 5</p>
          </div>
          <div className={styles.rightSide}> 
          <div className={styles.share}>Share your thoughts with other customers</div>
          <div >
            <button className={styles.review2}>write review</button>
          </div>
          </div>
         

        
         
        </div>
        <p>Top Customers Reviews</p>
        <div className={styles.rateSide}>
            <Rating/>            
            <p className={styles.rateText}>rate of 5</p>
          </div>
          <p>By Customer Name on February 18, 2017</p>

      </div>


      <TextParagraph
        text="Millions of Americans turn to Lasik 
        Surgery when their vision is less than perfect and they’re
         tired of being tied down to wearing glasses or contacts. What 
         part of the eye is it that may be causing all your vision trouble? 
         Your cornea! When the shape of your cornea is irregular, the image
          on your retina is blurry and out-of-focus. The cornea is a part 
          of your eye that works to focus light and projects an image on the
           retina. This focusing of light is called refraction. The 3 main
            types of refractive errors are myopia (nearsightedness), hyperopia
             (farsightedness) and astigmatism. "
      />
      <div className={styles.wrapper2}>
      <button >show more reviews </button>

      </div>

    </div>
    
  );
};
export default Customer;
