import { SignInDto, SignUpDto } from '@ems/validation';
import { axiosInstance } from '../instance';
export const auth = {
  signIn: async (dto: SignInDto) => {
    return await axiosInstance.post<boolean>('/auth/sign-in', dto);
  },
  signUp: async (dto: SignUpDto) => {
    return await axiosInstance.post<boolean>('/auth/sign-up', dto);
  },
  refresh: async () => {
    return await axiosInstance.post<{
      access_token: string;
      refresh_token: string;
    }>('/auth/refresh');
  },
  signOut: async () => {
    return await axiosInstance.post('/auth/logout');
  },
};
