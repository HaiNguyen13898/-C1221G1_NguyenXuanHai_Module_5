package com.exercise.repository;

import com.exercise.model.CarManufacturer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarManufacturerRepository extends JpaRepository<CarManufacturer, Integer> {
}
