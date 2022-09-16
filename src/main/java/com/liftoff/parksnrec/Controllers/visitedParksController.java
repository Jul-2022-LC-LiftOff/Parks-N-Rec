package com.liftoff.parksnrec.Controllers;

import com.liftoff.parksnrec.Models.VisitedParks;
import com.liftoff.parksnrec.Service.VisitedParksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class visitedParksController {
    @Autowired
    private VisitedParksService visitedParksService;

    @PostMapping("/add")
    public String add(@RequestBody VisitedParks visitedparks){
        visitedParksService.saveParks(visitedParks);
        return "New user is added";
    }

    @GetMapping("/getAll")
    public List<VisitedParks> getAllUsers(){
        return visitedParksService.getAllParks();
    }
}
