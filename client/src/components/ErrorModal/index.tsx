import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { COLORS } from "constants/colors.constants";
import { RootStateOrAny, useSelector } from "react-redux";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: COLORS.RED,
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 2,
  color: COLORS.CREME,
  ["@media (max-width:600px)"]: {
    width: 200,
  },
};

export const ErrorModal = () => {
  const hasError = useSelector((state: RootStateOrAny) => state.error.hasError);

  return (
    <Modal
      open={hasError}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Something went wrong!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Please reload this page or enter later.
        </Typography>
      </Box>
    </Modal>
  );
};
