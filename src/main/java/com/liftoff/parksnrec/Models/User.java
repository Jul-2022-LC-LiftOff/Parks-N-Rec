package com.liftoff.parksnrec.Models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Objects;


@Entity
@Table
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

//    @NotBlank
//    @Column(name="username")
//    @Size(min = 4, max = 20, message = "Invalid username. Must be between 4 and 20 characters.")
//    private String username;

    @NotBlank
    @Column(name="password")
    @Size(min = 5, max = 30, message = "Invalid password. Must be between 5 and 30 characters.")
    private String password;

    @NotBlank
    @Column(name="email")
    @Email
    private String email;

   public User() {}

    public User (String password, String email) {
//       this.username = username;
       this.password = password;
       this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && password.equals(user.password) && email.equals(user.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, password, email);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
//                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
