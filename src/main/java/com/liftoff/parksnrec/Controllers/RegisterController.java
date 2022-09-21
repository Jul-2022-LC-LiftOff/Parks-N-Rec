package com.liftoff.parksnrec.Controllers;

import com.liftoff.parksnrec.Models.User;
import com.liftoff.parksnrec.Service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/register")
@CrossOrigin
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        registerService.saveUser(user);
        return "New user is added";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return registerService.getAllUsers();
    }

}
