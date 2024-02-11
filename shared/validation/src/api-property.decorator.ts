import { ApiPropertyOptions } from '@nestjs/swagger';

const ApiProperty = await import('@nestjs/swagger').ApiProperty;

export function OptionalApiProperty(options?: ApiPropertyOptions | undefined) {
  const isBackend = typeof window === 'undefined';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return isBackend ? ApiProperty(options) : () => {};
}
