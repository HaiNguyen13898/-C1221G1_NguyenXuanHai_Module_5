package com.exercise.service.impl;

import com.exercise.model.CarManufacturer;
import com.exercise.repository.ICarManufacturerRepository;
import com.exercise.service.ICarManufactureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarManufactureService implements ICarManufactureService {
    @Autowired
    private ICarManufacturerRepository carManufacturerRepository;

    @Override
    public List<CarManufacturer> findAll() {
        return carManufacturerRepository.findAll();
    }
}
