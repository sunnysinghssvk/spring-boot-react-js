package com.spring.backend.controller;

import com.spring.backend.entity.Developer;
import com.spring.backend.service.DeveloperService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/developer")
public class DeveloperController {
    private final DeveloperService developerService;

    @GetMapping("/getAllDeveloper")
    public List<Developer> getAllDevelopers() {
        List<Developer> developers = developerService.getAllDevelopers();
        return developers;
    }

    @GetMapping("/getById/{id}")
    public Developer createNewDeveloper(@PathVariable("id") Long id) {
        Developer developer = developerService.getById(id);
        return developer;
    }

    @DeleteMapping("/deleteById/{id}")
    public boolean deleteDeveloperById(@PathVariable Long id) {
        boolean status = developerService.deleteDeveloperById(id);
        return status;
    }

    @PostMapping("/create")
    public boolean createNewDeveloper(@RequestBody Developer developer) {
        boolean status = developerService.saveDeveloper(developer);
        return status;
    }

    @PutMapping("/update")
    public boolean updateExistingDeveloper(@RequestBody Developer developer) {
        boolean status = developerService.updateDeveloper(developer);
        return status;
    }
}
