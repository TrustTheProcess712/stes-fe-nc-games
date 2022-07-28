import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchReviewVotes } from "../Utility/api";

const UpdateVotes = ({ votes }) => {
  const { review_id } = useParams();
  const [currentVotes, setCurrentVotes] = useState(0);
  const [err, setErr] = useState(null);

  const userHasUpVoted = currentVotes === 1;
  const userHasDownVoted = currentVotes === -1;

  const handleVote = (vote) => {
    setCurrentVotes((currVotes) => currVotes + vote);
    setErr(null);

    patchReviewVotes(review_id, vote).catch((err) => {
      setCurrentVotes((currVotes) => currVotes - vote);
      setErr("Something went wrong, please try again.");
    });
  };

  return (
    <section>
      <p>Votes: {votes + currentVotes}</p>
      <button disabled={userHasUpVoted} onClick={() => handleVote(1)}>
        Up Vote
      </button>
      <button disabled={userHasDownVoted} onClick={() => handleVote(-1)}>
        Down Vote
      </button>
    </section>
  );
};

export default UpdateVotes;
