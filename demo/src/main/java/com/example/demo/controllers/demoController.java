package com.example.demo.controllers;

import com.example.demo.database.models.Animal;
import com.example.demo.database.repositories.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class demoController {

    @Autowired
    AnimalRepository animalRepository;

    @GetMapping("/animals")
    public List<Animal> getAnimals() {

        return animalRepository.findAll();
    }

    @GetMapping("/animals/{id}")
    public Animal getAnimals(@PathVariable Long id) {

        return animalRepository.findById(id).orElse(null);
    }

}
