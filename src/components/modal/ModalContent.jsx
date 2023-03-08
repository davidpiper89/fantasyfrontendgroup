import CloseModal from "./CloseModal";
import "./ModalStyling.css";

const ModalContent = ({ notificationMessage }) => {
  const messageArray = Object.values(notificationMessage);

  return (
    <div className="modal-container">
      <div className="modal-content">
        {/* Button to close Modal in seperate component  */}
        <div className="modalCloseButton">
          <CloseModal />
        </div>
        {/* Content of Modal */}
        {/* If an object, map over the contents and return each in a <p>, other just return messsage */}
        {typeof notificationMessage === "object" ? (
          messageArray.map((notificationMessage) => {
            return <p>{notificationMessage}</p>;
          })
        ) : (
          <p>{notificationMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ModalContent;
