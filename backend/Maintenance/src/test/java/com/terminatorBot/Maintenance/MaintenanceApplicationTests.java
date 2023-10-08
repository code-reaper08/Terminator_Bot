package com.terminatorBot.Maintenance;

import com.terminatorBot.Maintenance.Controller.UserController;
import com.terminatorBot.Maintenance.Model.User;
import com.terminatorBot.Maintenance.Service.UserService;
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
class MaintenanceApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private UserService userService;

	@Test
	void contextLoads() {
	}

	@Test
	void addUserToDBTest() throws Exception {
		User user = new User();
		user.setEmployeeID(1);
		user.setFirstName("John");

		Mockito.when(userService.AddUserToDB(Mockito.any(User.class))).thenReturn(user);

		mockMvc.perform(MockMvcRequestBuilders
						.post("/prev_users")
						.content("{\"employeeID\":1,\"firstName\":\"John\"}")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.employeeID").value(1))
				.andExpect(MockMvcResultMatchers.jsonPath("$.firstName").value("John"));
	}

	@Test
	void getAllResignedUsersTest() throws Exception {
		List<User> users = new ArrayList<>();
		User user1 = new User();
		user1.setEmployeeID(1);
		user1.setFirstName("John");
		users.add(user1);

		User user2 = new User();
		user2.setEmployeeID(2);
		user2.setFirstName("Jane");
		users.add(user2);

		Mockito.when(userService.getAllResignedUsers()).thenReturn(users);

		mockMvc.perform(MockMvcRequestBuilders
						.get("/prev_users")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.length()").value(2))
				.andExpect(MockMvcResultMatchers.jsonPath("$[0].employeeID").value(1))
				.andExpect(MockMvcResultMatchers.jsonPath("$[0].firstName").value("John"))
				.andExpect(MockMvcResultMatchers.jsonPath("$[1].employeeID").value(2))
				.andExpect(MockMvcResultMatchers.jsonPath("$[1].firstName").value("Jane"));
	}

	@Test
	void getResignedEmployeeByIDTest() throws Exception {
		User user = new User();
		user.setEmployeeID(1);
		user.setFirstName("John");

		Mockito.when(userService.getResignedEmployeeByID(1)).thenReturn(user);

		mockMvc.perform(MockMvcRequestBuilders
						.get("/prev_users/1")
						.contentType(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.employeeID").value(1))
				.andExpect(MockMvcResultMatchers.jsonPath("$.firstName").value("John"));
	}
}
