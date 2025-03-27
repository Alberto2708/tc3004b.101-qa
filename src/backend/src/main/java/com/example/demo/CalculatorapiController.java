package com.example.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class CalculatorapiController {

    private static final String template = "%s";

    @GetMapping("/add")
    public Calculatorapi add(@RequestParam(value = "num1") double a, @RequestParam(value = "num2") double b) {
        return new Calculatorapi(String.format(template, a + b));
    }

    @GetMapping("/subtract")
    public Calculatorapi subtract(@RequestParam(value = "num1") double a, @RequestParam(value = "num2") double b) {
        return new Calculatorapi(String.format(template, a - b));
    }

    
    
}
