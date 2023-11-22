package com.checklist.api.domain.user;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserRequestDTO(
        @NotBlank
        @Size(min = 4, max = 20)
        String user_name,
        @Email
        @Column(unique = true)
        String user_email,
        @NotBlank
        @Size(min = 8, max = 8)
        String user_password
) {}
