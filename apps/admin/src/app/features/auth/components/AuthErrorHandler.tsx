import { HttpStatusCode } from "axios";
import { AuthAlert } from "./AuthAlert"
interface Props {
  statusCode?: HttpStatusCode;
}


export function AuthErrorHandler({ statusCode }: Props) {
  if (statusCode === HttpStatusCode.BadRequest) return <AuthAlert show={!!statusCode}>Invalid crendentials</AuthAlert>
  if (statusCode === HttpStatusCode.NotFound) return <AuthAlert show={!!statusCode}>Invalid crendentials</AuthAlert>
  if (statusCode === HttpStatusCode.InternalServerError) return <AuthAlert show={!!statusCode}>Server unavailable</AuthAlert>
  return null;
}
