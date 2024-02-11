import { Box } from "@mui/material";
import { useForm } from "react-hook-form"
import { classValidatorResolver } from "@hookform/resolvers/class-validator"
import { useEMSForm } from "../../../hooks";
import { useEffect } from "react";
import { SignInDto } from "@ems/validation";
export function LoginPage() {
  useEffect(() => console.log(SignInDto))
  return <Box>
  </Box>
}
