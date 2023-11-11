package com.cogging.cogging.exceptions;

import lombok.Data;

import java.util.Date;


@Data
public class ErrorResponse {
    private int statusCode;
    private String message;
    private Date thrownAt;

    public ErrorResponse(int statusCode, String message, Date thrownAt) {
        this.statusCode = statusCode;
        this.message = message;
        this.thrownAt = thrownAt;
    }
}
