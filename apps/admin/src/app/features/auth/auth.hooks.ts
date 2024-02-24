import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAuth } from './auth.selector';
import { setAuth } from './auth.slice';
export const useAuth = () => useAppSelector(getAuth);
export const useLogin = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(setAuth({ isLoggedIn: true }));
};
