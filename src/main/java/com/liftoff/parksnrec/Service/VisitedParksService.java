package com.liftoff.parksnrec.Service;

import com.liftoff.parksnrec.Models.VisitedParks;

import java.util.List;

public interface VisitedParksService {

    public VisitedParks saveParks(VisitedParks visitedParks);

    public List<VisitedParks> getAllParks();
}
