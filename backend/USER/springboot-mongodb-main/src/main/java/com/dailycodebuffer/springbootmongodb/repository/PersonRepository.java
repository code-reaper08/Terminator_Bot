package com.dailycodebuffer.springbootmongodb.repository;

import com.dailycodebuffer.springbootmongodb.collection.Person;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;

@Repository
public interface PersonRepository extends MongoRepository<Person, Integer> {
   // Person getUser(int employeeID);
   // Person updateRequest(int employeeID);

}
