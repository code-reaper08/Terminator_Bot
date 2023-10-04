package com.terminatorBot.Maintenance.Service;

import com.terminatorBot.Maintenance.Model.User;
import com.terminatorBot.Maintenance.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User AddUserToDB(User exEmployee) {
        return userRepository.save(exEmployee);
    }

    public List<User> getAllResignedUsers() {
        return userRepository.findAll();
    }

    public User getResignedEmployeeByID(int id) {
        return userRepository.findById(id).orElse(null);
    }
}
