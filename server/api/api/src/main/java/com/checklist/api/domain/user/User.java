package com.checklist.api.domain.user;

import jakarta.persistence.*;
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
    private String  user_name;
    @Column(unique = true)
    private String user_email;
    private String user_password;
}