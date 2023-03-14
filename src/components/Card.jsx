import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { Controller } from "../controller/controller";

export let Card = (props) => {

    let appContext = useContext(AppContext);
    let controller = new Controller();

    let onDeleteHandler = async () => {
        let deleted = await controller.delete(props.mark.id);
        if (deleted) {
            appContext.removeMarkHandler(props.mark.id);
            console.log("deleted");
        }

    }

    return (
        <section className="card">
            <article className="card-top-content">
                <div className="card-top-content-leading">
                    <span className="name-first-char">S</span>
                    <div className="student-info">
                        <span>{props.mark.name}</span>
                        <span>{props.mark.id}r</span>
                    </div>
                </div>
                <button className="delete-btn">
                    <i className="fa-solid fa-xmark delete-row" onClick={onDeleteHandler}></i>
                </button>
            </article>
            <article className="card-marks">
                <section className="mark-info">
                    <span>Mid-Term</span>
                    <span>{props.mark.mid}</span>
                </section>
                <section className="mark-info">
                    <span>Final-Term</span>
                    <span>{props.mark.final}</span>
                </section>
                <section className="mark-info">
                    <span>Activities</span>
                    <span>{props.mark.activities}</span>
                </section>
            </article>
        </section>
    );
}
