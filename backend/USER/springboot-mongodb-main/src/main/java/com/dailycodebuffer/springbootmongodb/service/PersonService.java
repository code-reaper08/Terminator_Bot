package com.dailycodebuffer.springbootmongodb.service;

import com.dailycodebuffer.springbootmongodb.collection.Person;
import com.dailycodebuffer.springbootmongodb.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PersonService
{

    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository)
    {
        this.personRepository = personRepository;
    }
    public Person save(Person person)
    {
        return   personRepository.save(person);

    }
    public Person getUser(int employeeID)
    {
        return personRepository.findById(employeeID).orElse(null);
//        return personRepository.findById(id);
    }

    public List<Person> getAllUsers()
    {
        return personRepository.findAll();
    }

    public Person updateRequest(Person person, int employeeID)
    {
        Optional<Person> existingPerson = (personRepository.findById(employeeID));
        if (existingPerson.isPresent())
        {
            Person personToUpdate = existingPerson.get();
            personToUpdate.setHr_approval_resign(person.getHr_approval_resign());
            personToUpdate.setManager_approval_resign(person.getManager_approval_resign());
            personToUpdate.setSubmittedLaptop(person.getSubmittedLaptop());
            personToUpdate.setSubmittedAccess(person.getSubmittedAccess());
            personToUpdate.setSubmittedMobile(person.getSubmittedMobile());
            personToUpdate.setResignation_status(person.getResignation_status());
            personToUpdate.setPriorExperience(person.getPriorExperience());
            personToUpdate.setAddress(person.getAddress());
            personToUpdate.setResume(person.getResume());

            return personRepository.save(personToUpdate);
        }
        else
        {
            return new Person();
        }
    }

    public void deleteById(int employeeID)
    {
          personRepository.deleteById(employeeID);
    }
}
