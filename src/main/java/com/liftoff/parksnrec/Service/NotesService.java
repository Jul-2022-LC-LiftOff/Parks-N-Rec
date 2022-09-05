package com.liftoff.parksnrec.Service;

import com.liftoff.parksnrec.Models.Notes;

import java.util.List;

public interface NotesService {
    public Notes saveNotes (Notes notes);

    public List<Notes> getAllNotes();

}
