const Quiz = () => {
  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-primary via-purple-100 to-primary p-1 m-1">
      <div className="flex flex-col h-full w-full bg-black p-6 rounded-xl">
        <h1 className="text-6xl md:text-8xl font-black text-center text-indigo-300 mb-6">
          ¡Quiz!
        </h1>
        <h2 className="text-3xl md:text-4xl text-indigo-300">
          <div className="bg-gradient-to-br from-primary via-purple-100 to-primary rounded-full inline-flex p-1 mb-6 mx-3">
            <button className="bg-black text-indigo-300 rounded-full px-4">
              1
            </button>
          </div>
          Question
        </h2>
        <section className="text-center h-auto flex flex-col justify-center items-center">
          <ul className="w-3/4 md:text-2xl">
            <li className="bg-gradient-to-br from-primary via-purple-100 to-primary p-1 mb-6 rounded-full">
              <p className="bg-black text-indigo-300 py-3 rounded-full">
                Answer 1
              </p>
            </li>
            <li className="bg-gradient-to-br from-primary via-purple-100 to-primary p-1 mb-6 rounded-full">
              <p className="bg-black text-indigo-300 py-3 rounded-full">
                Answer 2
              </p>
            </li>
            <li className="bg-gradient-to-br from-primary via-purple-100 to-primary p-1 mb-6 rounded-full">
              <p className="bg-black text-indigo-300 py-3 rounded-full">
                Answer 3
              </p>
            </li>
            <li className="bg-gradient-to-br from-primary via-purple-100 to-primary p-1 mb-6 rounded-full">
              <p className="bg-black text-indigo-300 py-3 rounded-full">
                Answer 4
              </p>
            </li>
          </ul>
          <div className="self-end bg-gradient-to-br from-primary via-purple-100 to-primary rounded-full p-1 mb-3">
            <button className="bg-black text-indigo-300 px-12 py-3 rounded-full text-xl md:text-2xl">
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Quiz;
