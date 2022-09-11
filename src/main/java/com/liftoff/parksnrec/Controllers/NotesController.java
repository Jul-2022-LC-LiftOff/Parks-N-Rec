package com.liftoff.parksnrec.Controllers;

import com.liftoff.parksnrec.Models.Notes;
import com.liftoff.parksnrec.Repository.NotesRepository;
import com.liftoff.parksnrec.Service.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
@CrossOrigin
public class NotesController {

    @Autowired
    private NotesService notesService;

    @PostMapping("/addNotes")
    public String add(@RequestBody Notes notes) {
        notesService.saveNotes(notes);
        return "New note was added";
    }

    @GetMapping("/getAllNotes")
    public List<Notes> getAllNotes(){
        return notesService.getAllNotes();
    }
}
