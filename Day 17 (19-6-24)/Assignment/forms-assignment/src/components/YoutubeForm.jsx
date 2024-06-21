import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;
const YoutubeForm = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;
  renderCount++;

  const onSubmit = (data) => {
    console.log("form submitted", data);
  };

  return (
    <div>
      <h1>Youtube Form : {renderCount / 2}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="question">Question</label>
        <input type="text" id="question" {...register("question")} />

        <label htmlFor="weightage">Weightage</label>
        <input type="text" id="weightage" {...register("weightage")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
