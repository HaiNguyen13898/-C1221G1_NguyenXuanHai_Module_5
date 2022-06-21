package com.exercise.repository;

import com.exercise.model.TypeVehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITypeVehicleRepository extends JpaRepository<TypeVehicle, Integer> {
}
