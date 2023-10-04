package com.terminatorBot.Resignation.VO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Person {

    private int employeeID;
    private String firstName;
    private String middleName;
    private String lastName;
    private String dob;
    private String gender;
    private String martialstatus;
    private String mobileNumber;
    private String email;
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
