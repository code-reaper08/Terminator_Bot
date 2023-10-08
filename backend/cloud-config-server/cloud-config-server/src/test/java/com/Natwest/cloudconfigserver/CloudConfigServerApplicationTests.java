package com.Natwest.cloudconfigserver;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootTest
@EnableConfigServer
@EnableEurekaClient
class CloudConfigServerApplicationTests {

	@Test
	void contextLoads() {
		CloudConfigServerApplication.main(new String[] {});
	}

}
