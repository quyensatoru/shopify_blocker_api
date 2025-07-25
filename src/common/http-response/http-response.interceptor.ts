import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseDto } from './dto/response.dto';

@Injectable()
export class HttpResponseInterceptor<T> implements NestInterceptor<ResponseDto<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseDto<T>> {
    return next.handle().pipe(
      map((data: T) => {
        return new ResponseDto({
          success: true,
          message: 'OK',
          data,
        });
      }),
    );
  }
}
