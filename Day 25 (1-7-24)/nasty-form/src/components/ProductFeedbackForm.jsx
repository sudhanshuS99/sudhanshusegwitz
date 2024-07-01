import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import "tailwindcss/tailwind.css";

const ProductFeedbackForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      product: "",
      flavour: "",
      nicotine: "",
      sweetness: "",
      coolness: "",
      buyProduct: "",
      improvement: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const watchBuyProduct = watch("buyProduct");

  return (
    <div className="flex flex-col items-center">
      <Typography variant="h6" gutterBottom className="font-bold text-center">
        Survey 1
      </Typography>

      <div className="w-full max-w-2xl p-4 bg-white rounded shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {["product", "flavour", "nicotine", "sweetness", "coolness"].map(
            (field, index) => (
              <div key={field} className="pb-4 border-b">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl component="fieldset" error={!!errors[field]}>
                      <FormLabel component="legend">
                        {index + 1}. How is {field}?
                      </FormLabel>
                      <Grid container spacing={0} className="space-x-1">
                        {[...Array(10)].map((_, i) => (
                          <Grid
                            item
                            xs={1}
                            key={i + 1}
                            className={`flex justify-center ${
                              i < 3
                                ? "bg-red-500"
                                : i < 6
                                ? "bg-white"
                                : "bg-green-500"
                            }`}
                          >
                            <FormControlLabel
                              value={(i + 1).toString()}
                              control={<Radio />}
                              label={i + 1}
                              {...control.register(field, { required: true })}
                              labelPlacement="top"
                            />
                          </Grid>
                        ))}
                      </Grid>
                      {errors[field] && (
                        <Typography color="error">
                          This field is required
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            )
          )}
        </form>
      </div>

      <div className="w-full max-w-2xl p-4 mt-4 bg-gray-800 text-white rounded shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component="fieldset" error={!!errors.buyProduct}>
                <FormLabel component="legend">
                  Will you buy the product?
                </FormLabel>
                <Controller
                  name="buyProduct"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      {["yes", "no", "needs improvement"].map((option) => (
                        <FormControlLabel
                          key={option}
                          value={option}
                          control={<Radio />}
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  )}
                />
                {errors.buyProduct && (
                  <Typography color="error">This field is required</Typography>
                )}
              </FormControl>
            </Grid>

            {watchBuyProduct === "needs improvement" && (
              <Grid item xs={12}>
                <FormControl component="fieldset" error={!!errors.improvement}>
                  <Controller
                    name="improvement"
                    control={control}
                    rules={{
                      required: watchBuyProduct === "needs improvement",
                      maxLength: 300,
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Please provide your advice"
                        multiline
                        rows={4}
                        className="bg-gray-800 text-white"
                      />
                    )}
                  />
                  {errors.improvement &&
                    errors.improvement.type === "required" && (
                      <Typography color="error">
                        This field is required
                      </Typography>
                    )}
                  {errors.improvement &&
                    errors.improvement.type === "maxLength" && (
                      <Typography color="error">Max length is 300</Typography>
                    )}
                </FormControl>
              </Grid>
            )}
          </Grid>

          <Grid container spacing={2} className="mt-4">
            <Grid item xs={6} className="flex justify-center">
              <Button
                variant="contained"
                color="secondary"
                className="text-sm w-full max-w-xs"
                onClick={() => reset()}
              >
                Reset
              </Button>
            </Grid>
            <Grid item xs={6} className="flex justify-center">
              <Button
                variant="contained"
                color="primary"
                className="text-sm w-full max-w-xs"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default ProductFeedbackForm;
