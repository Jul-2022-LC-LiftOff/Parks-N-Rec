package com.liftoff.parksnrec.Service;

import com.liftoff.parksnrec.Models.Notes;
import com.liftoff.parksnrec.Repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class NotesServiceImpl implements NotesService {

    @Autowired
    private NotesRepository notesRepository;

    @Override
    public Notes saveNotes(Notes notes) {
        return notesRepository.save(notes);
    }
}
