package com.liftoff.parksnrec.Controllers;

import com.liftoff.parksnrec.Repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller

public class NotesController {

    @Autowired
    private NotesRepository notesRepository;
}
