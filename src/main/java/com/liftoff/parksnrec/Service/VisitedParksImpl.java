package com.liftoff.parksnrec.Service;

import com.liftoff.parksnrec.Models.VisitedParks;
import com.liftoff.parksnrec.Repository.VisitedParksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VisitedParksImpl implements VisitedParksService{

    @Autowired
    private VisitedParksRepo visitedParksRepo;

    @Override
    public VisitedParks saveParks(VisitedParks visitedParks) {
        return visitedParksRepo.save(visitedParks);
    }

    @Override
    public List<VisitedParks> getAllUsers(){
        return visitedParksRepo.findAll();
    }
}
