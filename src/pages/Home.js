import React from "react";
import Button from '@mui/material/Button';
import axios from "axios";



function Home() {

    const [answer, setAnswer] = React.useState(null);

    function RequestDoctors() {

        console.log("Onclick working")
        axios.get("http://localhost:3000/api")
            // .then((res) => console.log("res: ", res.data.answer))
            .then((res) => setAnswer(res.data.answer))
            .catch(console.log)

    }



    return (
        <div>
            <h1>Home</h1>
            <Button variant="contained" onClick={RequestDoctors}>
                Send request
            </Button>

            <h1>{!answer ? "Loading..." : answer}</h1>

        </div>
    );
}

export default Home