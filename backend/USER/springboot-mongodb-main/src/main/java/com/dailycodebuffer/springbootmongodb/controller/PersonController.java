package com.dailycodebuffer.springbootmongodb.controller;

import com.dailycodebuffer.springbootmongodb.collection.Person;
import com.dailycodebuffer.springbootmongodb.service.PersonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping("/person")
@CrossOrigin("*")

public class PersonController {

    @Autowired
    private PersonService personService;

    @PostMapping
    public Person save(@RequestBody Person person) {
        return personService.save(person);
    }
    @GetMapping
    public List<Person> getAllUsers(){
        return personService.getAllUsers();
    }

//    @GetMapping
//    public List<Person> getAllUsers(@RequestParam("id") String id) {
//        return personService.getAllUsers(id);
//    }
    @GetMapping("/{id}")
    public Person getUser(@PathVariable int id){
        return personService.getUser(id);
    }


    @PutMapping("/updateRequest/{id}")
    public Person updateRequest(@RequestBody Person person,@PathVariable("id") int employeeID){
        return personService.updateRequest(person,employeeID);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id") int employeeID){
        personService.deleteById(employeeID);
    }

//    @PutMapping("/updateRequest/{id}")
//    public Person updateRequest(@RequestBody Person person,@PathVariable("id") int employeeID){
//        return personService.updateRequest(person,employeeID);
//    }

//    @PutMapping("/updateemp/{id}")
//    public Employeeinfo updateEmployee(@RequestBody Employeeinfo employee, @PathVariable int id){
//        return employeeServices.updateEmployee(employee, id);
//
//    }


//    @DeleteMapping("/{id}")
//    public void delete(@PathVariable String id) {
//        personService.delete(id);
//    }
//
//    GET http://localhost:4000/users -> get all users
//            - Read any user by ID
//    GET http://localhost:4000/users/:id -> get user by ID
//            - Update any user by ID
//    PUT http://localhost:4000/users/:id -> update user by ID
//            - connected to users (cluster) DB01


}
