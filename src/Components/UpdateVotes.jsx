import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchReviewVotes } from "../Utility/api";

const UpdateVotes = ({ votes }) => {
  const { review_id } = useParams();
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [err, setErr] = useState(null);
  const [disableUpVote, setUpVoteDisable] = useState(false);
  const [disableDownVote, setDownVoteDisable] = useState(false);

  const handleUpVote = () => {
    setCurrentVotes((currVotes) => currVotes + 1);
    setErr(null);
    handleUpVoteDisable();
    patchReviewVotes(review_id, 1).catch((err) => {
      setCurrentVotes((currVotes) => currVotes - 1);
      setErr("Something went wrong, please try again.");
    });
  };

  if (err) return <p>{err}</p>;

  const handleDownVote = () => {
    setCurrentVotes((currVotes) => currVotes - 1);
    setErr(null);
    handleDownVoteDisable();
    patchReviewVotes(review_id, -1).catch((err) => {
      setCurrentVotes((currVotes) => currVotes + 1);
      setErr("Something went wrong, please try again.");
    });
    if (err) return <p>{err}</p>;
  };

  const handleUpVoteDisable = () => {
    setUpVoteDisable(true);
  };

  const handleDownVoteDisable = () => {
    setDownVoteDisable(true);
  };

  return (
    <section>
      <p>Votes: {currentVotes}</p>
      <button disabled={disableUpVote} onClick={handleUpVote}>
        Up Vote
      </button>
      <button disabled={disableDownVote} onClick={handleDownVote}>
        Down Vote
      </button>
    </section>
  );
};

export default UpdateVotes;
