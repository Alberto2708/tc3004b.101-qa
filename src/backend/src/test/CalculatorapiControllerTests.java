package com.example.calculatorapi;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import io.micrometer.core.annotation.TimedSet;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class CalculatorapiControllerTests {

    @Autowired
    private TestRestTemplate restTemplate;


    @Test
    public void testAdd(){
        ResponseEntity<Calculatorapi> response = restTemplate.getForEntity("/add?num1=5&num2=3", Calculatorapi.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("8.0", response.getBody().getResult());
    }
    
    @Test 
    public void testSub(){
        ResponseEntity<Calculatorapi> response = restTemplate.getForEntity("/subtract?num1=5&num2=3", Calculatorapi.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("2.0", response.getBody().getResult());
    }
}
