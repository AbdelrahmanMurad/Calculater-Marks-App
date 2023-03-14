import { createContext, useState } from "react";

export let AppContext = createContext(
    {
        marksHandler: [],
        addMarkHandler: (mark) => { },
        removeMarkHandler: (id) => { },
        addMarksHandler: (marks) => { }
    }
);

export let AppContextProvider = (props) => {
    let [marks, setMarks] = useState([]);

    let addMark = (newState) => {
        setMarks((prevState) => {
            return [newState, ...prevState];
        });
    }

    let removeMark = (id) => {
        let filteredMarks = marks.filter((element) => element.id !== id);
        setMarks(filteredMarks);
    }

    let addMarks = (marks) => {
        setMarks(marks);
    }

    return (
        <AppContext.Provider value={
            {
                marksHandler: marks,
                addMarkHandler: addMark,
                removeMarkHandler: removeMark,
                addMarksHandler: addMarks,
            }
        }>
            {props.children}
        </AppContext.Provider>
    )
}