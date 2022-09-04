package com.liftoff.parksnrec.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Notes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long park_id;

    private long author_id;


    private String note;

    public Notes() {};

    public Notes(String note) {
        this.note = note;
    }

    public long getPark_id() {
        return park_id;
    }

    public long getAuthor_id() {
        return author_id;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Notes notes = (Notes) o;
        return park_id == notes.park_id && author_id == notes.author_id && note.equals(notes.note);
    }

    @Override
    public int hashCode() {
        return Objects.hash(park_id, author_id, note);
    }


    @Override
    public String toString() {
        return "Notes{" +
                "park_id=" + park_id +
                ", author_id=" + author_id +
                ", note='" + note + '\'' +
                '}';
    }
}
