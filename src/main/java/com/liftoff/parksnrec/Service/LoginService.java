package com.liftoff.parksnrec.Service;

import com.liftoff.parksnrec.Models.User;

import java.util.List;

public interface LoginService {

    public User saveUser(User user);

    public List<User> getAllUsers();
}
