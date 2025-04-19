/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.spring;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
/**
 *
 * @author primu
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {
     @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Aggiunge la configurazione CORS per permettere le richieste da React
        registry.addMapping("/**")  // Permette le richieste a tutte le URL del backend
                .allowedOrigins("http://localhost:3000")  // Permette richieste dal frontend React
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Permette metodi specifici
                .allowedHeaders("*")  // Permette tutte le intestazioni
                .allowCredentials(true);  // Se hai bisogno di inviare i cookie
    }
}
