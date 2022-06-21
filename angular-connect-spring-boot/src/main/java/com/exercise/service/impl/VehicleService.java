package com.exercise.service.impl;

import com.exercise.model.Vehicle;
import com.exercise.repository.IVehicleRepository;
import com.exercise.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService implements IVehicleService {
    @Autowired
    private IVehicleRepository vehicleRepository;

    @Override
    public List<Vehicle> findAll() {
        return vehicleRepository.findAll();
    }

    @Override
    public Vehicle saveVehicle(Vehicle vehicle) {
        vehicleRepository.save(vehicle);
        return vehicle;
    }

    @Override
    public Vehicle findById(int id) {
        return vehicleRepository.findById(id).orElse(null);
    }

    @Override
    public void update(Vehicle vehicle) {
        vehicleRepository.save(vehicle);
    }

//    @Override
//    public void remove(Integer id) {
//        vehicleRepository.delete(id);
//    }
}
