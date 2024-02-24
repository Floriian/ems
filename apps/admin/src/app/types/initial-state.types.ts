import { Error as CustomError } from './error.types';
export interface InitialState<T> {
  isLoading: boolean;
  data: T;
  error: null | CustomError;
}
