package com.checklist.api.controllers;

import com.checklist.api.domain.user.User;
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
    public ResponseEntity registerUser(@RequestBody @Valid UserRequestDTO data) {
        User newUser = new User(data);
        repository.save(newUser);
        return ResponseEntity.ok().build();
    }
}
