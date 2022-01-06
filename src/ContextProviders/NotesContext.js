import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";
import { colours } from "../components/Helpers/Colours";
const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notesList, setNotesList] = useState({
        "7fb5f11e-b884-4854-a968-e7fd054c56e9": {
            uuid: "7fb5f11e-b884-4854-a968-e7fd054c56e9",
            title: "Books to Read",
            body:
                "This is a list of books I intend to read in the year 2022. I have been reading books since I was young but I usually tend to forget book recomendations when someone gives me some. Lord of the Rings, Psychology of Money, The Unheard, The Kind Worth Killing, Show Your Work!, Animal Farm, Bad Blood, Hitchhikers Guide to the Galaxy, The Simpsons and their mathematical secrets, Becoming, The Trojan War, Kaizen, The Code Breaker, Eleven Minutes, That Long Silence",
            label: "Todo",
            colour: "rgb(78, 33, 150, 0.4)",
            pinned: true,
            lastModified: Date.now(),
            lastEdited: Date.now(),
        },
        "e88d054c56e9-7fb5f11e-b884-4854-a968": {
            uuid: "e88d054c56e9-7fb5f11e-b884-4854-a968",
            title: "Diary Entry",
            body:
                "This a diary entry that you can edit into some thing you would like to write about. You may write about Highlights of your day, What you are greatful for, Self-care, work, family, thoughts, feelings or just doodle away. You can also rant, vent and write about absolutely anything! ",
            label: "Diary",
            colour: "rgb(32, 44, 148, 0.4)",
            pinned: false,
            lastModified: Date.now(),
            lastEdited: Date.now(),
        },
    });

    const [note, setNote] = useState({
        uuid: v4(),
        title: "",
        body: "",
        label: "",
        colour: colours.Default,
        pinned: false,
        lastModified: Date.now(),
        lastEdited: Date.now(),
    });
    const [editNote, setEditNote] = useState({});

    const [newNoteFlag, setNewNoteFlag] = useState(false);
    const [editModal, setEditModal] = useState(false);

    function addNote() {
        const title = note.title.trim();
        const body = note.body.trim();
        if (title.length || body.length) {
            setNotesList((currentNotes) => ({
                [note.uuid]: note,
                ...currentNotes,
            }));
        }
        setNote({
            uuid: v4(),
            title: "",
            body: "",
            label: "",
            colour: colours.Default,
            pinned: false,
            lastModified: Date.now(),
            lastEdited: Date.now(),
        });
        setNewNoteFlag(false);
    }

    return (
        <NotesContext.Provider
            value={{
                notesList,
                setNotesList,
                note,
                setNote,
                editNote,
                setEditNote,
                newNoteFlag,
                setNewNoteFlag,
                editModal,
                setEditModal,
                addNote,
            }}
        >
            {children}
        </NotesContext.Provider>
    );
}

export function useNotes() {
    return useContext(NotesContext);
}