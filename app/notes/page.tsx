/* "use client";

import { useState } from "react";
import NoteList from "@/components/NoteList/NoteList";
import { getNotes, Note } from "@/lib/api";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleClick = async () => {
    const response = await getNotes();
    if (response?.notes) {
      setNotes(response.notes);
    }
  };

  return (
    <section>
      <h1>Notes List</h1>
      <button onClick={handleClick}>Get my notes</button>
      {notes.length > 0 && <NoteList notes={notes} />}
    </section>
  );
};

export default Notes; */

import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function NotesPage() {
  const page = 1;
  const perPage = 12;
  const search = "";

  const data = await fetchNotes(page, perPage, search);

  return (
    <NotesClient initialData={data} initialPage={page} initialSearch={search} />
  );
}
