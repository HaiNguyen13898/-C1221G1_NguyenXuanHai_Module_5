package com.exercise.controller;


import com.exercise.dto.VehicleDto;
import com.exercise.model.CarManufacturer;
import com.exercise.model.Location;
import com.exercise.model.TypeVehicle;
import com.exercise.model.Vehicle;
import com.exercise.service.ICarManufactureService;
import com.exercise.service.ILocationService;
import com.exercise.service.ITypeVehicleService;
import com.exercise.service.IVehicleService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/vehicle")
public class VehicleRestRestController {
    @Autowired
    private IVehicleService iVehicleService;


    @GetMapping(value = "/list")
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


    @PostMapping(value = "/create")
    public ResponseEntity<List<FieldError>> create(@Validated @RequestBody VehicleDto vehicleDto,
                                                   BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }
        Vehicle vehicle = new Vehicle();
        BeanUtils.copyProperties(vehicleDto, vehicle);
        this.iVehicleService.save(vehicle);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @PutMapping(value = "/update/{id}")
    public ResponseEntity<List<FieldError>> update(@PathVariable int id, @RequestBody Vehicle vehicle) {
        Optional<Vehicle> vehicleOptional = Optional.ofNullable(iVehicleService.findById(id));
        if (!vehicleOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        vehicle.setId(vehicleOptional.get().getId());
        return new ResponseEntity(iVehicleService.save(vehicle), HttpStatus.OK);
    }


    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Vehicle> delete(@PathVariable int id) {
        Optional<Vehicle> vehicleOptional = Optional.ofNullable(iVehicleService.findById(id));
        if (!vehicleOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        this.iVehicleService.remove(id);
        return new ResponseEntity<>(vehicleOptional.get(), HttpStatus.OK);
    }



}
