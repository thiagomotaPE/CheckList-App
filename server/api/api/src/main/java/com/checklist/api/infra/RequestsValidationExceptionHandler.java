package com.checklist.api.infra;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;


import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
public class RequestsValidationExceptionHandler {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public List<ErrorHandler> handle(MethodArgumentNotValidException exception) {

        List<FieldError>  fieldErrorList = exception.getBindingResult().getFieldErrors();

        List<ErrorHandler> list = new ArrayList<>();

        fieldErrorList.forEach(error -> {
            list.add(new ErrorHandler(error.getDefaultMessage()));
        });

        return list;
    }
}
