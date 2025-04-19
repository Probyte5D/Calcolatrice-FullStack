/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.spring;
import org.springframework.web.bind.annotation.*;
/**
 *
 * @author primu
 */
@RestController
@RequestMapping("/api/calculator")
public class CalculatorController {
       @PostMapping("/calculate")
    public double calculate(@RequestBody CalculationRequest request) {
        double result = 0;
        switch (request.getOperator()) {
            case "+":
                result = request.getOp1() + request.getOp2();
                break;
            case "-":
                result = request.getOp1() - request.getOp2();
                break;
            case "*":
                result = request.getOp1() * request.getOp2();
                break;
            case "/":
                if (request.getOp2() != 0) {
                    result = request.getOp1() / request.getOp2();
                } else {
                    throw new ArithmeticException("Cannot divide by zero");
                }
                break;
            default:
                throw new IllegalArgumentException("Invalid operator");
        }
        return result;
    }
}
    
