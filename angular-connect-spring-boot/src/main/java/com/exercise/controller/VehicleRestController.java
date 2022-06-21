package com.exercise.controller;


import com.exercise.model.CarManufacturer;
import com.exercise.model.Location;
import com.exercise.model.TypeVehicle;
import com.exercise.model.Vehicle;
import com.exercise.service.ICarManufactureService;
import com.exercise.service.ILocationService;
import com.exercise.service.ITypeVehicleService;
import com.exercise.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/vehicle")
public class VehicleRestController {
    @Autowired
    private IVehicleService iVehicleService;

    @Autowired
    private ICarManufactureService iCarManufactureService;

    @Autowired
    private ITypeVehicleService iTypeVehicleService;

    @Autowired
    private ILocationService iLocationService;

    @GetMapping(value = "/listVehicle")
    public ResponseEntity<List<Vehicle>> getVehicle() {
        List<Vehicle> vehicleList = this.iVehicleService.findAll();
        if (vehicleList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(vehicleList, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable("id") Integer id) {
        Optional<Vehicle> vehicleOptional = Optional.ofNullable(iVehicleService.findById(id));
        if (!vehicleOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(vehicleOptional.get(), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Vehicle> saveVehicle(@RequestBody Vehicle vehicle) {
        List<CarManufacturer> carManufacturers = this.iCarManufactureService.findAll();
        List<TypeVehicle> typeVehicles = this.iTypeVehicleService.findAll();
        List<Location> locations = this.iLocationService.findAll();


        return new ResponseEntity<>(iVehicleService.saveVehicle(vehicle), HttpStatus.CREATED);
    }

//    @PutMapping("/update")
//    public ResponseEntity<Vehicle> updateVehicle(@RequestBody Vehicle vehicle) {
//        return new ResponseEntity<>(vehicleService.saveVehicle(vehicle), HttpStatus.OK);
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<?> deleteVehicle(@PathVariable("id") Integer id) {
////        Optional<Vehicle> vehicleOptional = Optional.ofNullable(vehicleService.findById(id));
////        if (!vehicleOptional.isPresent()) {
////            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////        }
////        vehicleService.remove(id);
////        return new ResponseEntity<>(vehicleOptional.get(), HttpStatus.NO_CONTENT);
//
//        vehicleService.remove(id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}
