package com.exercise.service.impl;

import com.exercise.model.TypeVehicle;
import com.exercise.repository.ITypeVehicleRepository;
import com.exercise.service.ITypeVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeVehicleService implements ITypeVehicleService {
    @Autowired
    private ITypeVehicleRepository typeVehicleRepository;

    @Override
    public List<TypeVehicle> findAll() {
        return typeVehicleRepository.findAll();
    }
}
