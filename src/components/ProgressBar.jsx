const ProgressBar = ({ progress }) => {
  return (
    <article>
      <progress
        id="progress-bar"
        value={progress}
        max="100"
        className="progress-filled:bg-primary progress-unfilled:bg-slate-300 my-12 progress-unfilled:rounded-lg progress-filled:rounded-lg w-full"
      ></progress>
    </article>
  );
};

export default ProgressBar;
