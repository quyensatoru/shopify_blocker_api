import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomHttpException extends HttpException {
    constructor(
        message: string,
        statusCode: number = HttpStatus.BAD_REQUEST,
        data: any = null,
    ) {
        super(
            {
                success: false,
                message,
                data,
            },
            statusCode,
        );
    }
}
