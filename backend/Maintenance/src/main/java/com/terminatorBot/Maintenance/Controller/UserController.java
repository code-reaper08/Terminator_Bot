package com.terminatorBot.Maintenance.Controller;

import com.terminatorBot.Maintenance.Model.User;
import com.terminatorBot.Maintenance.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prev_users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User AddUserToDB(@RequestBody User ex_employee) {
        return userService.AddUserToDB(ex_employee);
    }

    @GetMapping
    public List<User> getAllResignedUsers(){
        return userService.getAllResignedUsers();
    }

    @GetMapping("/{id}")
    public User getResignedEmployeeByID(@PathVariable int id){
        return userService.getResignedEmployeeByID(id);
    }
}
