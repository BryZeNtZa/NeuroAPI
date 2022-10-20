import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
export declare class BadRequestFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost): void;
}
