import React from "react";
import { Poll } from "../../../interfaces/Poll";

export default function PollCard () {
    const poll = {} as Poll
    return (
        <div>
            <h3>{poll.name}</h3>
            <div>
                <p>IN FAVOUR: {poll.for}</p>
                <p>AGAINST: {poll.against}</p>
            </div>
        </div>
    )
}