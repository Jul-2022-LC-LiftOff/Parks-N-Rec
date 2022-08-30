package com.liftoff.parksnrec.Controllers;

import com.liftoff.parksnrec.Models.User;
import com.liftoff.parksnrec.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LoginController {

    @Autowired
    private UserRepo userRepo;

    @GetMapping("/")
    public String getPage() { return "Welcome";}

    @GetMapping("/users")
    public List<User> getUsers() {return userRepo.findAll(); }

    @PostMapping("/users/{id}")
    public String saveLogin(User user) {
        userRepo.save(user);
        return "Login saved...";
    }

}
