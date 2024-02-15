import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';

export function OptionalApiProperty(options?: ApiPropertyOptions | undefined) {
  const isBackend = typeof window === 'undefined';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return isBackend ? ApiProperty(options) : () => {};
}
