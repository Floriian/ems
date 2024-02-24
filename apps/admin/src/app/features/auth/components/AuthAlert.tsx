import { Alert } from "@mui/material";
import React from "react";

interface Props {
  show: boolean;
  children: React.ReactNode
}
/**
 * Simple error wrapper for error messages in Authentication.
 */
export function AuthAlert({ show, children }: Props) {
  return <Alert severity="error" sx={{ width: '100%', display: show !== undefined ? 'flex' : 'none' }}>{children}</Alert>
}
