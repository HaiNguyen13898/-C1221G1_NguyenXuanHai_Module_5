package com.exercise.repository;

import com.exercise.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILocationRepository extends JpaRepository<Location, Integer> {
}
