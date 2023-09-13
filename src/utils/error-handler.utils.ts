import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { Request, Response } from 'express';
import { type } from 'os';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus()
    const error = exception.getResponse();

    response
      .status(status)
      .json({
        statusCode: status,
        error,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}