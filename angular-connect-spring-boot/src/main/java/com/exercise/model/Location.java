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
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idLocation;
    private String nameLocation;


    @JsonBackReference
    @OneToMany(mappedBy = "location")
    private List<Vehicle> vehicleList;

    @JsonBackReference
    @OneToMany(mappedBy = "location2")
    private List<Vehicle> vehicleList2;

}
