import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import ProductData from "../ProdcutDataBox";

const ProductModal = ({productID}) => {
  Modal.setAppElement("#root");
  const [openModal, setOpenModal] = useState(true);
  return (
    <Modal
      style={{ overlay: { backgroundColor: "grey" } }}
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      shouldCloseOnOverlayClick={false}
    >
      <ProductData id={productID}/>
      <h1>{productID}</h1>
      <button onClick={() => setOpenModal(false)}>Close</button>
    </Modal>
  );
};

export default ProductModal;
