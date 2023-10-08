package com.dailycodebuffer.springbootmongodb;

import com.dailycodebuffer.springbootmongodb.collection.Person;
import com.dailycodebuffer.springbootmongodb.controller.PersonController;
import com.dailycodebuffer.springbootmongodb.service.PersonService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
class SpringbootMongodbApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PersonService personService;

    @Test
    void contextLoads() {
    }

    @Test
    void savePersonTest() throws Exception {
        Person person = new Person();
        person.setEmployeeID(1);
        person.setFirstName("John");

        Mockito.when(personService.save(Mockito.any(Person.class))).thenReturn(person);

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/person")
                        .content("{\"employeeID\":1,\"firstName\":\"John\"}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.employeeID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.firstName").value("John"));
    }

    @Test
    void getAllUsersTest() throws Exception {
        List<Person> people = new ArrayList<>();
        Person person1 = new Person();
        person1.setEmployeeID(1);
        person1.setFirstName("John");
        people.add(person1);

        Person person2 = new Person();
        person2.setEmployeeID(2);
        person2.setFirstName("Jane");
        people.add(person2);

        Mockito.when(personService.getAllUsers()).thenReturn(people);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/person")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.length()").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].employeeID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].firstName").value("John"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].employeeID").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].firstName").value("Jane"));
    }

    @Test
    void getUserByIdTest() throws Exception {
        Person person = new Person();
        person.setEmployeeID(1);
        person.setFirstName("John");

        Mockito.when(personService.getUser(1)).thenReturn(person);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/person/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.employeeID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.firstName").value("John"));
    }

    @Test
    void updatePersonTest() throws Exception {
        Person person = new Person();
        person.setEmployeeID(1);
        person.setFirstName("John");

        Mockito.when(personService.updateRequest(Mockito.any(Person.class), Mockito.eq(1))).thenReturn(person);
        
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/person/updateRequest/1")
                        .content("{\"employeeID\":1,\"firstName\":\"John\"}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.employeeID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.firstName").value("John"));
    }
}
