package com.liftoff.parksnrec.Controllers;


import com.liftoff.parksnrec.Models.VisitedParks;
import com.liftoff.parksnrec.Service.VisitedParksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class VisitedParksController {

    @Autowired
    private VisitedParksService visitedParksService;

    @PostMapping("/parkAdded")
    public String add(@RequestBody VisitedParks visitedParks){
        visitedParksService.saveParks(visitedParks);
        return "New visited park is added";
    }

    @GetMapping("/getAll")
    public List<VisitedParks> getAllParks(){
        return visitedParksService.getAllParks();
    }
}
