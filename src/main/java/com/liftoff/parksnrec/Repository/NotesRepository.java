package com.liftoff.parksnrec.Repository;


import com.liftoff.parksnrec.Models.Notes;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotesRepository extends CrudRepository<Notes, Long> {
}
