import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "./Button";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Button as MuiButton,
} from "@mui/material";

const FormTwo = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      buyDecision: "",
      improvements: "",
    },
  });

  const watchBuyDecision = watch("buyDecision");

  // Custom validation for word limit
  const validateWordLimit = (value) => {
    if (value.split(/\s+/).length > 300) {
      return "Maximum 300 words allowed";
    }
    return true;
  };

  const handleImprovementsChange = (e) => {
    const text = e.target.value;
    setValue("improvements", text); // Update form state with the new value
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Add your form submission logic here
    // Redirect to success page or perform other actions
  };

  return (
    <div className="flex justify-center mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-700 text-white shadow-xl p-10 rounded w-full max-w-lg"
      >
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            className="block text-sm font-bold mb-2"
          >
            Will you buy this product?
          </FormLabel>
          <RadioGroup
            {...register("buyDecision", {
              required: "Please select an option",
            })}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel
              value="needs improvement"
              control={<Radio />}
              label="Needs Improvement"
            />
          </RadioGroup>
        </FormControl>

        {watchBuyDecision === "needs improvement" && (
          <div className="mb-4">
            <TextField
              {...register("improvements", {
                required: "Please describe improvements needed",
                validate: validateWordLimit, // Custom validation for word limit
              })}
              onChange={handleImprovementsChange} // Update form state as user types
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              inputProps={{ maxLength: 300 }}
              className={`mt-3 ${errors.improvements ? "border-red-500" : ""}`}
            />
            {errors.improvements && (
              <p className="text-red-500 text-sm mt-1">
                {errors.improvements.message}
              </p>
            )}
          </div>
        )}

        {errors.buyDecision && (
          <p className="text-red-500 text-sm mt-1">
            {errors.buyDecision.message}
          </p>
        )}

        <div>
          <MuiButton
            type="submit"
            variant="contained"
            color="primary"
            className="mt-3"
          >
            Submit
          </MuiButton>
        </div>
      </form>
    </div>
  );
};

export default FormTwo;
