package com.terminatorBot.Maintenance.Repository;

import com.terminatorBot.Maintenance.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {
}
