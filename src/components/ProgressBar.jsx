const ProgressBar = ({ progress }) => {
  return (
    <article className="flex relative justify-center items-center">
      {progress > 0 && (
        <p
         style={{ left: `${progress}%` }}
         className="translate-x-2 z-10 absolute text-black text-center text-md">
          {progress.toFixed(0)}%
        </p>
      )}
      <progress
        id="progress-bar"
        value={progress}
        max="100"
        className="z-0 relative progress-filled:bg-primary progress-unfilled:bg-slate-300 progress-filled:rounded-full progress-unfilled:rounded-full w-full h-6"
      ></progress>
    </article>
  );
};

export default ProgressBar;
