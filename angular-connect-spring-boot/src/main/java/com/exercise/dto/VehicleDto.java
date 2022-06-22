package com.exercise.dto;

import com.exercise.model.CarManufacturer;
import com.exercise.model.Location;
import com.exercise.model.TypeVehicle;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VehicleDto {
    private int id;
    private String licensePlates;
    private String email;
    private String phoneNumber;
    private String timeStart;
    private String timeFinish;
    private TypeVehicle typeVehicle;
    private CarManufacturer carManufacturer;
    private Location location;
    private Location location2;

}
