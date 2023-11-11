package com.cogging.cogging.exceptions;


import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.http.HttpStatus;

import java.util.Date;
@Data
@EqualsAndHashCode(callSuper=true)
public class BaseException extends RuntimeException {
    protected HttpStatus status;
    protected Date thrownAt;

    public BaseException(String message, Throwable cause, HttpStatus status) {
        super(message, cause);

        this.status = status;
        if (status == null) {
            this.status = HttpStatus.CONFLICT;
        }

        this.thrownAt = new Date();
    }
}
