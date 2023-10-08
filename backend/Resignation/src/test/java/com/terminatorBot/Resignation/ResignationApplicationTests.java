package com.terminatorBot.Resignation;

import com.terminatorBot.Resignation.Model.Resignation;
import com.terminatorBot.Resignation.Service.Resignationservice;
import com.terminatorBot.Resignation.VO.Person;
import com.terminatorBot.Resignation.VO.ResponseTemplateVO;
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
import java.util.Date;
import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
class ResignationApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private Resignationservice resignationservice;

	@Test
	void contextLoads() {
	}

	@Test
	void addResignationTest() throws Exception {
		Resignation resignation = new Resignation();
		resignation.setEmployeeID(1);
		resignation.setFeedback("Goodbye");
		resignation.setReason("Personal reasons");
		resignation.setTimestamp(new Date());

		Mockito.when(resignationservice.addResignation(Mockito.any(Resignation.class))).thenReturn(resignation);

		mockMvc.perform(MockMvcRequestBuilders
						.post("/resign")
						.content("{\"employeeID\":1,\"feedback\":\"Goodbye\",\"reason\":\"Personal reasons\",\"timestamp\":\"2023-10-10T10:00:00.000+0000\"}")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.employeeID").value(1))
				.andExpect(MockMvcResultMatchers.jsonPath("$.feedback").value("Goodbye"))
				.andExpect(MockMvcResultMatchers.jsonPath("$.reason").value("Personal reasons"));
	}

	@Test
	void getResignationsByEmployeeTest() throws Exception {
		List<ResponseTemplateVO> resignations = new ArrayList<>();
		ResponseTemplateVO response1 = new ResponseTemplateVO();
		resignations.add(response1);

		ResponseTemplateVO response2 = new ResponseTemplateVO();
		resignations.add(response2);

		Mockito.when(resignationservice.getResignationsByEmployee()).thenReturn(resignations);

		mockMvc.perform(MockMvcRequestBuilders
						.get("/resign")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.length()").value(2));
	}

	@Test
	void getResignationByPersonTest() throws Exception {
		Resignation resignation = new Resignation();
		resignation.setEmployeeID(1);
		resignation.setFeedback("Goodbye");
		resignation.setReason("Personal reasons");
		resignation.setTimestamp(new Date());

		Person person = new Person();
		person.setEmployeeID(1);

		ResponseTemplateVO response = new ResponseTemplateVO();
		response.setResignation(resignation);
		response.setPerson(person);

		Mockito.when(resignationservice.getResignationByPerson(1)).thenReturn(response);

		mockMvc.perform(MockMvcRequestBuilders
						.get("/resign/get/1")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.resignation.employeeID").value(1))
				.andExpect(MockMvcResultMatchers.jsonPath("$.resignation.feedback").value("Goodbye"))
				.andExpect(MockMvcResultMatchers.jsonPath("$.resignation.reason").value("Personal reasons"));
	}


	@Test
	void deleteResignationByIdTest() throws Exception {
		Mockito.doNothing().when(resignationservice).deleteResignationById(1);

		mockMvc.perform(MockMvcRequestBuilders
						.delete("/resign/1")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk());
		Mockito.verify(resignationservice, Mockito.times(1)).deleteResignationById(1);
	}
}
