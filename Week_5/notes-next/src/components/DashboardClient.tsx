"use client"

import { getNotes } from "@/app/lib/notes";
import { useUser } from "@/context/userContext";
import { NoteCard } from "./NoteCard";
import { Note } from "@/types/types";
import { useState, useEffect } from "react";

export default function DashBoardClient() {
    const [notes, setNotes] = useState<Note[]>([]);
    const { user } = useUser();
    const [selectedTag, setSelectedTag] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [notesByDate, setNotesByDate] = useState<Note[]>([]);
    const [notesByTag, setNotesByTag] = useState<Note[]>([]);
    const [filterApplied, setFilterApplied] = useState(false);
    const [tagFilterApplied, setTagFilterApplied] = useState(false);

    useEffect(() => {

            async function loadNotes(){
            
            if(!user){
                setNotes([])
                return
            }

            const noteArray = await getNotes();

            if(noteArray)
            setNotes(noteArray)
        }

        loadNotes();

    }, [user?.id])

    const userNotes = notes?.filter((note) => note.userId === user?.id);

    function filterByDate(){
       const displayedNotes = userNotes.filter((note) => note.creationDate.startsWith(selectedDate));
       setNotesByDate(displayedNotes)
       setFilterApplied(true)
    }

    function clearFilters(){
        setFilterApplied(false);
        setTagFilterApplied(false);
        setSelectedDate("");
        setSelectedTag("");
        setTagFilterApplied(false);
    }

    function filterByTags(){
        const filteredByTag = userNotes.filter((note) => note.tags.startsWith(selectedTag))
        setNotesByTag(filteredByTag);
        setTagFilterApplied(true);
        setFilterApplied(false)
    }

    let displayedUserNotes = userNotes

    if(filterApplied){
        displayedUserNotes = notesByDate
    }else if(tagFilterApplied){
        displayedUserNotes = notesByTag
    }


    return (
        <>
            <div>
                {displayedUserNotes?.map((note) => 
                    <NoteCard key={note.id} note={note} />
                )}
            </div>  
            
            <label htmlFor="date-filter">Filter By Date:</label>
            <input id="date-filter" type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
            <button type="button" onClick={filterByDate}>Filter</button>
            <label htmlFor="tag-filter">Filter by Tag:</label>
            <input id="tag-filter" type="text" value = {selectedTag} onChange={(e) => setSelectedTag(e.target.value)}/>
            <button type="button" onClick={filterByTags}>Filter</button>
            <button type="button" onClick={clearFilters}>Clear Filters</button>
        </>
    )
}