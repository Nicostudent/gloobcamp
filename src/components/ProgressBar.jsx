const ProgressBar = ({ progress }) => {
  console.log(progress);
  
  return (
    <article>
      <div className="flex w-full justify-center mt-10">
        {progress > 0 && <p className="text-center text-2xl text-black">{`%${Math.round(progress)}`}</p>}
      </div>
      <progress
        id="progress-bar"
        value={progress}
        max="100"
        className="progress-filled:bg-primary progress-unfilled:bg-slate-300 mb-12 progress-unfilled:rounded-lg progress-filled:rounded-lg w-full"
      >
      </progress>   
    </article>
  );
};

export default ProgressBar;