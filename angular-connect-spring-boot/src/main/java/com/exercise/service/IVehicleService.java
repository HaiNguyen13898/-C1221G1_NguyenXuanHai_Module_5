package com.exercise.service;

import com.exercise.model.Vehicle;

import java.util.List;

public interface IVehicleService {
    List<Vehicle> findAll();

    Vehicle save(Vehicle vehicle);

    Vehicle findById(int id);

    void remove(Integer id);
}
