import axios from "axios";
import { push } from "connected-react-router";

export const addVote = ({vote}) => (dispatch) => {
    axios({
        method: "POST",
        url: "https://localhost:8000/votes",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ vote: vote })
    })
    .then(() => {
        dispatch(push("/votes"));
    })
    .catch(err => console.log(err))
}

export default addVote;


export const getVote = ({vote}) => (dispatch) => {
    axios({
        method: "GET",
        url: "https://localhost:8000/votes",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ vote: vote })
    })
    .then(() => {
        dispatch(push("/votes"));
    })
    .catch(err => console.log(err))
}

