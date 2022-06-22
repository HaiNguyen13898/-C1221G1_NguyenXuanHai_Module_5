package com.exercise.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String licensePlates;
    private String email;
    private String phoneNumber;
    private String timeStart;
    private String timeFinish;

    @ManyToOne
    @JoinColumn(name = "type_vehicle", referencedColumnName = "id")
    private TypeVehicle typeVehicle;

    @ManyToOne
    @JoinColumn(name = "car_manufacturer", referencedColumnName = "id")
    private CarManufacturer carManufacturer;

    @ManyToOne
    @JoinColumn(name = "destination", referencedColumnName = "id")
    private Location location;

    @ManyToOne
    @JoinColumn(name = "point_of_departure", referencedColumnName = "id")
    private Location location2;



}
