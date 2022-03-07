import React, { useState, useEffect } from "react";
//mui components
import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";

//redux
import { useDispatch, useSelector } from "react-redux";
import { alertToggleFalse } from "../../store/alerts/alert";

const Alerts = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alerts.alert);
  const [alertType, setAlertType] = useState("error");
  const [checked, setChecked] = useState();
  useEffect(() => {
    setAlertType(alert.type);
    setChecked(alert.state);
    if (alert.state) {
      setTimeout(() => {
        dispatch(alertToggleFalse());
      }, 3000);
    }
  }, [alert]);
  return (
    <div className="absolute flex justify-center items-start mt-2 ml-ml50% z-100 -translate-x-1/2">
      <Box sx={{ display: "flex" }}>
        <Grow in={checked}>
          <Alert
            onClose={() => {
              dispatch(alertToggleFalse());
            }}
            variant="filled"
            severity={alertType || "error"}
          >
            {alert.message}
          </Alert>
        </Grow>
      </Box>
    </div>
  );
};

export default Alerts;
