import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList, setNoteList] = useState([]);

  function addNote(newNote) {
    setNoteList(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNoteList(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {noteList.map((noteItem, index) => {return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>})}
      <Footer />
    </div>
  );
}

export default App;
