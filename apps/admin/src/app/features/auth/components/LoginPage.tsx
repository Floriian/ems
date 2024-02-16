import { Box } from "@mui/material";
import { useEMSForm } from "../../../hooks";
import { useEffect } from "react";
import { SignInDto } from "@ems/validation";

export function LoginPage() {
  useEffect(() => console.log(SignInDto))
  return <Box>
  </Box>
}
