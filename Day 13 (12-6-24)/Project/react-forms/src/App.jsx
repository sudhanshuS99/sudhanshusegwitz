import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <div className="w-full grid h-screen place-items-center">
      <form
        className="gap-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>CREATE QUESTIONS</h1>
        <div className="mb-4">
          <h1>Question</h1>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="question"
            type="text"
            placeholder="Enter question here"
            {...register("question", {
              required: "This field is required",
              validate: (value) => {
                if (!value.includes("?")) {
                  return "Question must end with a question mark (?)";
                }
                return true;
              },
            })}
          />
          {errors.question && (
            <div className="text-red-500">{errors.question.message}</div>
          )}
        </div>
        <div className="mb-6">
          <h1>Weightage</h1>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="marks"
            type="text"
            placeholder="Enter weightage here"
            {...register("marks", {
              required: "This field is required.",
            })}
          />
          {errors.marks && (
            <div className="text-red-500">{errors.marks.message}</div>
          )}
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default App;
