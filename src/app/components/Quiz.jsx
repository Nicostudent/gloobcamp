const Quiz = () => {
  return (
    <section className="border px-6 md:w-3/4 w-full py-6 rounded-2xl text-primary border-primary mx-2 md:mx-0">
      <h1 className="text-6xl md:text-8xl text-center mb-6">¡Quiz!</h1>
      <h2 className="text-3xl md:text-4xl mb-6">
        <span className="me-2 text-white bg-primary rounded-md p-4 py-1 font-medium ring-1 ring-inset ring-purple-700/10">
          1
        </span>
        Question
      </h2>
      <section className="text-center h-auto flex flex-col justify-center items-center">
        <ul className="w-3/4 md:text-2xl">
          <li className="border border-primary mb-3 py-3 rounded">Answer 1</li>
          <li className="border border-primary mb-3 py-3 rounded">Answer 2</li>
          <li className="border border-primary mb-3 py-3 rounded">Answer 3</li>
          <li className="border border-primary mb-3 py-3 rounded">Answer 4</li>
        </ul>
        <div className="self-end">
          <button className="bg-primary text-white rounded-md p-4 font-medium text-xl">
            Submit
          </button>
        </div>
      </section>
    </section>
  );
};

export default Quiz;
