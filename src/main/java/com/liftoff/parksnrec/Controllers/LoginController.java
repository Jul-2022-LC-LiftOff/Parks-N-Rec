package com.liftoff.parksnrec.Controllers;

import com.liftoff.parksnrec.Models.User;
import com.liftoff.parksnrec.Repository.UserRepo;
import com.liftoff.parksnrec.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    @Autowired
    private LoginService loginService;
    private final UserRepo userRepo;

    public LoginController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @PostMapping("/add")
    public String add(@RequestBody User user) {
        loginService.saveUser(user);
        return "New user is added";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return loginService.getAllUsers();
    }

    @PostMapping("/hi")
    ResponseEntity<User> getUserByEmail(@RequestBody User user) {
        var hi = loginService.login(user);
        if(hi.getPassword().equals(user.getPassword())){
            user.setPassword("");
            return new ResponseEntity<User>(user, HttpStatus.OK);
        }
        return new ResponseEntity<User>(new User(), HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepo.findById(id)
                .map(user -> {
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return userRepo.save(user);
                }).orElseGet(() -> {
                    newUser.setId(id);
                    return userRepo.save(newUser);
                });
    }
}
