package com.dailycodebuffer.springbootmongodb.collection;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "person")
@JsonInclude(JsonInclude.Include.NON_NULL)

public class Person {

    @Id
    @Indexed(unique = true)
    private int employeeID;
    private String firstName;
    private String middleName;
    private String lastName;
    private String dob;
    private String gender;
    private String martialstatus;

    @Indexed(unique = true)
    private String mobileNumber;

    @Indexed(unique = true)
    private String email;

    @Indexed(unique = true)
    private String aadharNumber;
    private String nationality;
    private String address;
    private String location;
    private int priorExperience;
    private String password;
    private String confirmpassword;
    private String photo;
    private String resume;
    private String userName;
    private Boolean resignation_status=false;
    private double balanceMoney=0.0;
    private double balanceBenifits=0.0;
    private Boolean submittedLaptop=false;
    private Boolean submittedMobile=false;
    private Boolean submittedAccess=false;
    private String access_role;
    private Boolean manager_approval_resign= false;
    private Boolean hr_approval_resign=false;
    private String line_manager_id;
    private String bu_HR_id;
}
