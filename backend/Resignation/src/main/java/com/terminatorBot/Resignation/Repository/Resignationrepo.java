package com.terminatorBot.Resignation.Repository;

import com.terminatorBot.Resignation.Model.Resignation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface Resignationrepo extends MongoRepository<Resignation, Integer> {
}
