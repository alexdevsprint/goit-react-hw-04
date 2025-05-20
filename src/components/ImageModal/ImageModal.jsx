import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({isOpen, image, onRequestClose}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Image Preview"
    >
      {image && (
        <div className={css.wrapper}>
          <img src={image} alt="preview" />
        </div>
      )}
    </Modal>
  );
}
