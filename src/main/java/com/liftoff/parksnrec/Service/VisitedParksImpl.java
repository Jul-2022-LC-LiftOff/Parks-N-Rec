package com.liftoff.parksnrec.Service;

import com.liftoff.parksnrec.Models.VisitedParks;
import com.liftoff.parksnrec.Repository.VisitedParksRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class VisitedParksImpl implements VisitedParksService {
    @Autowired
    private VisitedParksRepo visitedParksRepo;

    @Override
    public VisitedParks saveParks(VisitedParks visitedParks) {
        return visitedParksRepo.save(visitedParks);
    }

//    @Override
//    public List<VisitedParks> getAllUsers(){
//        return visitedParksRepo.findAll();
//    }
//}

    @Override
    public List<VisitedParks> getAllParks(){
        return visitedParksRepo.findAll();
    }
}
