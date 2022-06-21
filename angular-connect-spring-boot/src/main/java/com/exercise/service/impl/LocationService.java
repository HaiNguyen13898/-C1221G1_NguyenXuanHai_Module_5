package com.exercise.service.impl;

import com.exercise.model.Location;
import com.exercise.repository.ILocationRepository;
import com.exercise.service.ILocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService implements ILocationService {
    @Autowired
    private ILocationRepository locationRepository;

    @Override
    public List<Location> findAll() {
        return locationRepository.findAll();
    }
}
