package com.cogging.cogging.exceptions;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class BaseExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {BaseException.class})
    protected ResponseEntity<Object> handleBaseException(BaseException ex, ServletWebRequest request) {
        HttpStatus status = ex.getStatus();
        ErrorResponse errorResponse = new ErrorResponse(status.value(), ex.getMessage(), ex.getThrownAt());
        return handleExceptionInternal(ex, errorResponse, new HttpHeaders(), status, request);
    }
}
