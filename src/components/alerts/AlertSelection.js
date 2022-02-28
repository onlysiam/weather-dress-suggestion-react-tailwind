//mui components
import { Alert } from "@mui/material";
//redux
import { useDispatch } from "react-redux";
import { authAlertToggleFalse } from "../../store/authAlerts";
const AlertSelection = ({ alertType }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {alertType === "success" ? (
        <Alert
          onClose={() => {
            dispatch(authAlertToggleFalse());
          }}
          variant="filled"
          severity="success"
        >
          Successfully Logged In.
        </Alert>
      ) : (
        ""
      )}
      {alertType === "error" ? (
        <Alert onClose={() => {}} variant="filled" severity="error">
          Incorrect Username/Password.
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
};

export default AlertSelection;
