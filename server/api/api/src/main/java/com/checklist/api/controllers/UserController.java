package com.checklist.api.controllers;

import com.checklist.api.domain.user.UserRepository;
import com.checklist.api.domain.user.UserRequestDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository repository;

    @GetMapping
    public ResponseEntity getAllUsers() {
        var allUsers = repository.findAll();
        return ResponseEntity.ok(allUsers);
    }

    @PostMapping
    public ResponseEntity registerUser(@RequestBody @Valid UserRequestDTO data) { //mexer aqui pra verificar se os dados estão vindo do jeito certo

        System.out.println(data);
        return ResponseEntity.ok().build();
    }
}
