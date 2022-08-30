package com.liftoff.parksnrec.Controllers;

import com.liftoff.parksnrec.Models.User;
import com.liftoff.parksnrec.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        loginService.saveUser(user);
        return "New user is added";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return loginService.getAllUsers();
    }

}
