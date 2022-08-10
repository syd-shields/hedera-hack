import React from "react";
import { useState } from "react";
import { Poll } from "../../../interfaces/Poll";

export default function PollVote() {
  const poll = {} as Poll;
  const [vote, setVote] = useState("");

  const submitVote = (vote) => {
    if (vote === "for") {
      //send a vote for to the dao
    } else if (vote === "against") {
      //send a vote against to the dao
    }
  };
  return (
    <div>
      <h3>{poll.name}</h3>
      <div>
        <form onSubmit={() => submitVote(vote)}>
          <p>IN FAVOUR: {poll.for}</p>
          <button onClick={(e) => setVote("for")}></button>
          <p>AGAINST: {poll.against}</p>
          <button onClick={(e) => setVote("against")}></button>
        </form>
      </div>
    </div>
  );
}
