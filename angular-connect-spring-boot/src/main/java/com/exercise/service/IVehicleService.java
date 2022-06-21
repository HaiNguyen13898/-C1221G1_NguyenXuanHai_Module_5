package com.exercise.service;

import com.exercise.model.Vehicle;

import java.util.List;

public interface IVehicleService {
    List<Vehicle> findAll();

    Vehicle saveVehicle(Vehicle vehicle);

    Vehicle findById(int id);

    void update(Vehicle vehicle);

//    void remove(Integer id);
}
