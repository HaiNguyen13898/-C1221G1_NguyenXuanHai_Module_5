package com.exercise.controller;

import com.exercise.model.CarManufacturer;
import com.exercise.model.Location;
import com.exercise.service.ILocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/location")
public class LocationRestController {
    @Autowired
    private ILocationService iLocationService;

    @GetMapping(value = "/list")
    public ResponseEntity<List<Location>> getLocation() {
        List<Location> locations = this.iLocationService.findAll();
        if (locations.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(locations, HttpStatus.OK);
    }
}
