package com.cogging.cogging.jwt;

import com.cogging.cogging.exceptions.BaseException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/auth")
@RequiredArgsConstructor
public class SecurityController {

    @GetMapping("/denied")
    public BaseException failedSecure(@RequestParam String message){

        return new BaseException(message, null, HttpStatus.NOT_ACCEPTABLE);
    }

}