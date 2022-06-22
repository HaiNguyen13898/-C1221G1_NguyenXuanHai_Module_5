package com.exercise.controller;

import com.exercise.model.Location;
import com.exercise.model.TypeVehicle;
import com.exercise.service.ITypeVehicleService;
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
@RequestMapping("/typeVehicle")
public class TypeVehicleRestController {
    @Autowired
    private ITypeVehicleService iTypeVehicleService;

    @GetMapping(value = "/list")
    public ResponseEntity<List<TypeVehicle>> getTypeVihecle() {
        List<TypeVehicle> typeVehicles = this.iTypeVehicleService.findAll();
        if (typeVehicles.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(typeVehicles, HttpStatus.OK);
    }
}
