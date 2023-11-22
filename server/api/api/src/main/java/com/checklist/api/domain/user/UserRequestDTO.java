package com.checklist.api.domain.user;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserRequestDTO(
        @NotBlank
        @Size(min = 4, max = 20, message = "Seu nome deve conter no minimo 4 caracteres")
        String user_name,
        @Email
        @Column(unique = true)
        String user_email,
        @NotBlank
        @Size(min = 8, max = 8, message = "Sua senha deve conter no minimo 8 caracteres")
        String user_password
) {}
