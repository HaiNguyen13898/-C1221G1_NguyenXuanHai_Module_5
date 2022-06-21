package com.exercise.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class TypeVehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idTypeVehicle;
        private String nameTypeVehicle;

    @JsonBackReference
    @OneToMany(mappedBy = "typeVehicle")
    List<Vehicle> vehicleList;
}
