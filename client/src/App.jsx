
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const addNote = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/notes",
        {
          title: title,
          content: content
        }
      );

      setNotes((previousNotes) => [
        response.data,
        ...previousNotes
      ]);

      setTitle("");
      setContent("");

      alert("Note added successfully");
    } catch (error) {
      console.error("Error adding note:", error);
      alert("Failed to add note");
    }
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/notes"
      );

      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const deleteNote = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/notes/${id}`
      );

      setNotes((previousNotes) =>
        previousNotes.filter((note) => note._id !== id)
      );
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="container">
      <h1>Student Notes</h1>

      <div className="note-form">
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Note content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={addNote}>Add Note</button>
      </div>

      <h2>My Notes</h2>

      {loading ? (
        <p>Loading...</p>
      ) : notes.length === 0 ? (
        <p>No notes yet — add one above!</p>
      ) : (
        notes.map((note) => (
          <div className="note" key={note._id}>
            <h3>{note.title}</h3>

            <p>{note.content}</p>

            <p className="note-date">
              {new Date(note.createdAt).toLocaleString()}
            </p>

            <button onClick={() => deleteNote(note._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;


