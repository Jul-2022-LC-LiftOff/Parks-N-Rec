package com.liftoff.parksnrec.Models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

public class VisitedParks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;


    @Column(name="parkName")
    public String parkName;

    public Boolean visited;

    public VisitedParks(){

    }

    public VisitedParks(String parkName,Boolean visited){
        this.parkName = parkName;
        this.visited = visited;
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

    public Boolean getVisited() {
        return visited;
    }

    public void setVisited(Boolean visited) {
        this.visited = visited;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VisitedParks that = (VisitedParks) o;
        return id.equals(that.id) && parkName.equals(that.parkName) && visited.equals(that.visited);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, parkName, visited);
    }

    @Override
    public String toString() {
        return "VisitedParks{" +
                "id=" + id +
                ", parkName='" + parkName + '\'' +
                ", visited=" + visited +
                '}';
    }

}
