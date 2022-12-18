import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import ProductData from "../ProdcutDataBox";
import SharedButton from "../SharedButton";
import { Link } from "react-router-dom";
import styles  from './styles.module.css'

const ProductModal = ({ productID }) => {
  Modal.setAppElement("#root");
  const [openModal, setOpenModal] = useState(true);
  const closeModal= ()=>{
    setOpenModal(false)
  }
  return (
    openModal && (
      <Modal
        style={{ overlay: { backgroundColor: "grey" } }}
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        shouldCloseOnOverlayClick={false}
      >
        <ProductData id={productID}  close={closeModal}/>
        
          <Link to={`${productID}/pro`}><div className={styles.Full}>
            <SharedButton buttonLabel={"View Full product Details"} />
          </div></Link>
        
      </Modal>
    )
  );
};

export default ProductModal;
