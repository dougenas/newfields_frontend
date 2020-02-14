import axios from "axios";
import { push } from "connected-react-router";

export const addVote = ({vote}) => (dispatch) => {
    axios({
        method: "POST",
        url: "https://localhost:8000/api/",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ vote: vote })
    })
    .then(() => {
        dispatch(push("/"));
    })
    .catch(err => console.log(err))
}