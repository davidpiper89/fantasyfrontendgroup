import { useDispatch } from "react-redux";
import { setModal } from "../../features/footballSlice";

const CloseModal = () => {
  const dispatch = useDispatch();
  return (
    // Button to close Modal
    <button
      className="closeModalButton"
      onClick={() => {
        dispatch(setModal(""));
      }}
    >
      &times;
    </button>
  );
};

export default CloseModal;
