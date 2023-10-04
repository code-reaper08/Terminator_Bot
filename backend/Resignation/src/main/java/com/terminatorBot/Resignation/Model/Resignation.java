package com.terminatorBot.Resignation.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Builder
@Data
@Document(collection = "employee")
@NoArgsConstructor
@AllArgsConstructor

public class Resignation {

    @Id
    private int employeeID;
    private String feedback;
    private String reason;
    private Date timestamp;

}
