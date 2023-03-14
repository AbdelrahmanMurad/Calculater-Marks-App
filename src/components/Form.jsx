import { useContext, useRef } from "react";
import { FormGroup } from "./FormGroup";
import { AppContext } from "../context/app-context";
import { Mark } from "../model/mark.js";
import { Controller } from "../controller/controller";

export let Form = () => {

    let nameRef = useRef();
    let midRef = useRef();
    let finalRef = useRef();
    let activitiesRef = useRef();
    let appContext = useContext(AppContext);

    let check = () => {
        if (
            nameRef.current.value !== "" &&
            midRef.current.value !== "" &&
            finalRef.current.value !== "" &&
            activitiesRef.current.value !== ""
        ) {
            return true;
        } else {
            alert("Please, Enter The Requierd Data !");
            return false;
        }
    }

    let clear = () => {
        return (
            nameRef.current.value = "",
            midRef.current.value = "",
            finalRef.current.value = "",
            activitiesRef.current.value = ""
        );
    }

    let dataOfMark = () => {
        return new Mark(
            nameRef.current.value,
            midRef.current.value,
            finalRef.current.value,
            activitiesRef.current.value,
        );
    }

    let onSubmitHandler = async (event) => {
        event.preventDefault();
        if (check()) {
            let mark = dataOfMark();
            let controller = new Controller();
            let id = await controller.save(mark);
            if (id != null) {
                mark.id = id;
                appContext.addMarkHandler(mark);
            }
        }
        clear();
    }


    return (
        <form className="marks-form" onSubmit={onSubmitHandler}>
            <FormGroup label="Student Name" type="text" placeholder="Enter Student Name" ref={nameRef} />
            <FormGroup label="Mid Term" type="number" placeholder="Enter Mid" ref={midRef} />
            <FormGroup label="Final" type="number" placeholder="Enter Final" ref={finalRef} />
            <FormGroup label="Activities" type="number" placeholder="Enter Activities" ref={activitiesRef} />

            <button type="submit" className="form-btn">SAVE</button>
        </form>
    );
}   