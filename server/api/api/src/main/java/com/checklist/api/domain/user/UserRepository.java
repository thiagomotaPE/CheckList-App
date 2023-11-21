package com.checklist.api.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    //Os metodos padrão que o jpa tras são:
    //getReferenceById
    //getAllById
    //deleteAllById...
}
