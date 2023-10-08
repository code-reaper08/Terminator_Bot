package com.Natwest.cloudgateway;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootTest
@EnableEurekaClient
@CrossOrigin(origins = "*")
class CloudGatewayApplicationTests {

	@Test
	void contextLoads() {
		CloudGatewayApplication.main(new String[] {});
	}

}
