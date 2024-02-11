import { UseFormProps, useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
export const useEMSForm = (props: UseFormProps, schema: any) =>
  useForm({ ...props, resolver: classValidatorResolver(schema) });
