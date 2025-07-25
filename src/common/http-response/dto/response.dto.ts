export class ResponseDto<T> {
  success: boolean;

  message: string;

  data: T;

  constructor(partial: Partial<ResponseDto<T>>) {
    Object.assign(this, partial);
  }
}
