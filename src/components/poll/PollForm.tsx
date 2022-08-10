import React from "react";
import { useState } from "react";

export default function PollForm () {
    const [name, setName ] = useState('');

    const createPoll = () => {
        //run transaction
        //on transaction success...
        //post to api endpoint 
        //new Poll
        //poll name = name
        //walletAddress = owner wallet Address (get from props) 
    }

    return (
        <div>
            <form onSubmit={() => createPoll()}>
                <label>Ask a question...</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
            </form>
        </div>
    )
}