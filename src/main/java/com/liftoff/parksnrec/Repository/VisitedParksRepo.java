package com.liftoff.parksnrec.Repository;

import com.liftoff.parksnrec.Models.VisitedParks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitedParksRepo extends JpaRepository<VisitedParks,Long> {
}
