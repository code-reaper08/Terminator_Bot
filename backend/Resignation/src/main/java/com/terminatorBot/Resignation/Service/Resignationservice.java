package com.terminatorBot.Resignation.Service;

import com.terminatorBot.Resignation.Model.Resignation;
import com.terminatorBot.Resignation.Repository.Resignationrepo;
import com.terminatorBot.Resignation.VO.Person;
import com.terminatorBot.Resignation.VO.ResponseTemplateVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.ArrayList;
import java.util.List;


@Service
public class Resignationservice {
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    Resignationrepo resignationrepo;
    public Resignation addResignation(Resignation resignation) {
        return resignationrepo.save(resignation);
    }

    public List<Resignation> getAllResignation() {
        return resignationrepo.findAll();
    }

    public Resignation getResignationById(int employeeID) {
        return resignationrepo.findById(employeeID).get();
    }

    public void deleteResignationById(int employeeID) {
        resignationrepo.deleteById(employeeID);
    }



    public ResponseTemplateVO getResignationByPerson(int employeeID) {
        ResponseTemplateVO vo = new ResponseTemplateVO();
       Resignation resignation=resignationrepo.findById(employeeID).orElse(null);
       vo.setResignation(resignation);
       vo.setPerson(restTemplate.getForObject("http://USER-SERVICE/person/"+employeeID, Person.class));


       return vo;
    }

    public List<ResponseTemplateVO> getResignationsByEmployee() {
        List<ResponseTemplateVO> responseList = new ArrayList<>();

        // Fetch the list of resignations for the given employee
        List<Resignation> resignations = resignationrepo.findAll();

        for (Resignation resignation : resignations) {
            ResponseTemplateVO vo = new ResponseTemplateVO();
            vo.setResignation(resignation);
            vo.setPerson(restTemplate.getForObject("http://USER-SERVICE/person/" + resignation.getEmployeeID(), Person.class));

            responseList.add(vo);
        }

        return responseList;
    }
}
