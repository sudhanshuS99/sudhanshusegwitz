import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import React, { useState } from "react";

const YoutubeForm = () => {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: {
      questions: [{ question: "", weightage: "" }],
    },
  });
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = (data) => {
    console.log("form submitted", data);
  };

  const addQuestion = () => {
    append({ question: "", weightage: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {fields.map((item, index) => (
          <div key={item.id} className="form-control">
            <label htmlFor={`question[${index}]`}>Question {index + 1}</label>
            <input
              type="text"
              id={`question[${index}]`}
              {...register(`questions[${index}].question`, {
                required: "Question is required",
              })}
            />
            <p className="error">
              {errors.questions?.[index]?.question?.message}
            </p>

            <label htmlFor={`weightage[${index}]`}>Weightage {index + 1}</label>
            <input
              type="text"
              id={`weightage[${index}]`}
              {...register(`questions[${index}].weightage`, {
                required: "Weightage is required",
              })}
            />
            <p className="error">
              {errors.questions?.[index]?.weightage?.message}
            </p>

            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={addQuestion}>
          Add Question
        </button>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
