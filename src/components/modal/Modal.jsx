import { useSelector } from "react-redux";
import { selectNotificationMessage } from "../../features/footballSlice";
import ModalContent from "./ModalContent";

const Modal = () => {
  const notificationMessage = useSelector(selectNotificationMessage);

  return (
    <>
      {/* Button to open Modal */}

      {notificationMessage && (
        // Brings in Modal Content
        <ModalContent notificationMessage={notificationMessage} />
      )}
    </>
  );
};

export default Modal;
