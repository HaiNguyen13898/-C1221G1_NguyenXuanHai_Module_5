package com.exercise.controller;

import com.exercise.model.CarManufacturer;
import com.exercise.model.Vehicle;
import com.exercise.service.ICarManufactureService;
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
@RequestMapping("/carManufacture")
public class CarManufacturerRestController {
    @Autowired
    private ICarManufactureService iCarManufactureService;

    @GetMapping(value = "/list")
    public ResponseEntity<List<CarManufacturer>> getCarM() {
        List<CarManufacturer> carManufacturers = this.iCarManufactureService.findAll();
        if (carManufacturers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(carManufacturers, HttpStatus.OK);
    }

}
