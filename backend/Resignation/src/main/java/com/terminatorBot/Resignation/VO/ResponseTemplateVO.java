package com.terminatorBot.Resignation.VO;

import com.terminatorBot.Resignation.Model.Resignation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseTemplateVO {
    private Resignation resignation;
    private Person person;

}
