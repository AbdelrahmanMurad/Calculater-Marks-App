import axios from "axios";
import { Mark } from "../model/mark";

export class Controller {
    /**
     * 1- save = create = postData => "method=post"
     * 2- getData = fetchData = read => "method=get"
     * 3- delete => "method=delete"
     */

    /**
     * @name save
     * @param Mark mark
     * @return Mark mark
     */

    async save(mark) {
        try {
            let response = await axios.post(`https://calculater-b3b16-default-rtdb.firebaseio.com/marks.json`, mark);
            if (response.status == 200) return mark.id = response.data.name;
        } catch (error) {
            return console.log("Error From save Funtion");
        }

    }

    /**
     * @name getData
     * @return [arrayOfMark]
     */

    async getData() {
        try {
            let response = await axios.get(`https://calculater-b3b16-default-rtdb.firebaseio.com/marks.json`);
            if (response.status == 200) {
                let array = [];//array of marks
                let objectV = response.data;//fetch data => dataType is object, so name it objectVariable => objectV.
                for (const objectKey in objectV) {
                    objectV = response.data[objectKey];//pushing objects to the objectVariable => objectV.
                    let m = new Mark();
                    m.id = objectKey;
                    m.name = objectV.name;
                    m.mid = objectV.mid;
                    m.final = objectV.final;
                    m.activities = objectV.activities;
                    array.push(m);
                }
                return array;
            }
        } catch (error) {
            return console.log("Error From getData Funtion");
        }
    }

    /**
     * @name delete
     * @param id
     * @return boolean deleted
     */

    async delete(id) {
        try {
            let response = await axios.delete(`https://calculater-b3b16-default-rtdb.firebaseio.com/marks/${id}.json`);
            return response.status == 200;
        } catch (error) {
            return console.log("Error From delete Funtion");
        }
    }
}