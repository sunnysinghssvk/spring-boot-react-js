package com.spring.backend.controller;

import com.spring.backend.entity.Developer;
import com.spring.backend.service.DeveloperService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/developer")
public class DeveloperController {
    private final DeveloperService developerService;

    @GetMapping("/getAllDeveloper")
    public List<Developer> getAllDevelopers(
            @RequestParam(value = "pageNumber", defaultValue = "1", required = false) Integer pageNumber,
            @RequestParam(value = "pageSize", defaultValue = "5", required = false) Integer pageSize
    ) {
        List<Developer> developers = developerService.getAllDevelopers(pageNumber, pageSize);
        if(developers == null || developers.size() == 0) {
            return developerService.getAllDevelopers(0, pageSize);
        }
        return developers;
    }

    @GetMapping("/getById/{id}")
    public Developer createNewDeveloper(@PathVariable("id") Long id) {
        Developer developer = developerService.getById(id);
        return developer;
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<HttpStatus> deleteDeveloperById(@PathVariable Long id) {
        boolean status = developerService.deleteDeveloperById(id);
        if(status)
            return new ResponseEntity<>(HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping("/create")
    public ResponseEntity<HttpStatus> createNewDeveloper(@RequestBody Developer developer) {
        boolean status = developerService.saveDeveloper(developer);
        if(status)
            return new ResponseEntity<>(HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PutMapping("/update")
    public ResponseEntity<HttpStatus> updateExistingDeveloper(@RequestBody Developer developer) {
        boolean status = developerService.updateDeveloper(developer);
        if(status)
            return new ResponseEntity<>(HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
