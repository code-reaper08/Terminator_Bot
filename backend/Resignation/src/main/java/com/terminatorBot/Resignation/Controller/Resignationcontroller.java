package com.terminatorBot.Resignation.Controller;

import com.terminatorBot.Resignation.Model.Resignation;
import com.terminatorBot.Resignation.Service.Resignationservice;
import com.terminatorBot.Resignation.VO.ResponseTemplateVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("resign")
@CrossOrigin("*")
public class Resignationcontroller {
    @Autowired
    Resignationservice resignationservice;

    @PostMapping
    public Resignation addResignation(@RequestBody Resignation resignation){
        return resignationservice.addResignation(resignation);
    }
//    @GetMapping
//    public List<Resignation> getAllResignation(){
//        return resignationservice.getAllResignation();
//    }

    @GetMapping("/getAll")
    public List<ResponseTemplateVO> getResignationsByEmployee() {
        return resignationservice.getResignationsByEmployee();
    }

//    @GetMapping("/{id}")
//    public Resignation getResignationById(@PathVariable("id") int employeeID){
//        return resignationservice.getResignationById(employeeID);
//
//    }

    @GetMapping("/get/{id}")
    public ResponseTemplateVO getResignationByPerson(@PathVariable("id") int employeeID){
        return resignationservice.getResignationByPerson(employeeID);

    }

    @DeleteMapping("/{id}")
    public void deleteResignationById(@PathVariable("id") int employeeID){
        resignationservice.deleteResignationById(employeeID);
    }


}
