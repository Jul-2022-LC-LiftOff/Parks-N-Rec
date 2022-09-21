package com.liftoff.parksnrec.Service;

import com.liftoff.parksnrec.Models.User;
import com.liftoff.parksnrec.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RegisterServiceImpl implements RegisterService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public User saveUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}
