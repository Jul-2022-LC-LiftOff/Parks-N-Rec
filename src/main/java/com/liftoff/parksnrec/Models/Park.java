package com.liftoff.parksnrec.Models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Objects;

@Entity
public class Park {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @NotBlank
    @Column(name="parkName")
    public String parkName;

    @NotBlank
    @Column(name="visited")
    public Boolean Visited;

    public Park() {
    }


    public Park(String parkName) {
        this.parkName = parkName;
    }


    public Boolean getVisited() {
        return Visited;
    }

    public void setVisited(Boolean visited) {
        Visited = visited;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getParkName() {
        return parkName;
    }

    public void setParkName(String parkName) {
        this.parkName = parkName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Park park = (Park) o;
        return Objects.equals(id, park.id) && Objects.equals(parkName, park.parkName) && Objects.equals(Visited, park.Visited);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, parkName, Visited);
    }

    @Override
    public String toString() {
        return "Park{" +
                "id=" + id +
                ", parkName='" + parkName + '\'' +
                ", Visited=" + Visited +
                '}';
    }
}