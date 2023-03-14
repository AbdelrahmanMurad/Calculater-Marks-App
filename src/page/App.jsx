import "bootstrap/dist/css/bootstrap.css"
import "../resources/style.css";
import { Form } from "../components/Form";
import { Card } from "../components/Card";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app-context.jsx";
import { Controller } from "../controller/controller";

export let App = () => {

    let appContext = useContext(AppContext);
    let controller = new Controller();

    let read = async () => {
        let dataOfMark = await controller.getData();
        if (dataOfMark.length > 0) {
            appContext.addMarksHandler(dataOfMark);
            console.log(dataOfMark.length);
        }
    }

    // eslint-disable-next-line
    useEffect(() => { read() }, []);


    return (
        <div className="content-wrapper" >
            <section className="form-section">
                <header className="form-header">
                    <article className="form-header_content">
                        <span className="form-title">Average Calculator</span>
                        <p className="form-info">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum
                            consectetur explicabo, molestias, hic aut perferendis, deleniti
                            dolores repellendus natus numquam. Qui laborum alias eligendi, ab
                            voluptas itaque? Exercitationem, minima? Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Suscipit veniam sit quisquam
                            vero quod. Eum velit excepturi id ratione, facere aut sequi
                            architecto tempora a numquam odit quidem totam exercitationem.
                        </p>
                    </article>
                    <figure className="form-header_img">
                        <img
                            src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-2686.jpg?w=2000"
                            alt=""
                        />
                    </figure>
                </header>
                <Form />
            </section>
            <section>
                {appContext.marksHandler.map((element) => {
                    return <Card key={element.id} mark={element} />
                })}
            </section>
        </div>
    );
}

