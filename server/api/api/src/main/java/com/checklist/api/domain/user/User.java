package com.checklist.api.domain.user;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
@Entity(name = "users")
@EqualsAndHashCode(of = "user_id")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;
    @NotBlank
    @Size(min = 4, max = 20)
    private String  user_name;
    @Email
    @Column(unique = true)
    private String user_email;
    @NotBlank
    @Size(min = 8, max = 8)
    private String user_password;

    public User(UserRequestDTO userRequestDTO) {
        this.user_name = userRequestDTO.user_name();
        this.user_email = userRequestDTO.user_email();
        this.user_password = userRequestDTO.user_password();
    }
}