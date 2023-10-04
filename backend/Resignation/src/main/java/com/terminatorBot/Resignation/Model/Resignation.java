package com.terminatorBot.Resignation.Model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "employee")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Resignation {

    @Id
    @Indexed(unique = true)
    private int employeeID;
    private String feedback;
    private String reason;
    private Date timestamp;

}
