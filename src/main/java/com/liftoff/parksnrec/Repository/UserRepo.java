package com.liftoff.parksnrec.Repository;

import com.liftoff.parksnrec.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,Long> {

    User findByEmail(String email);
}
