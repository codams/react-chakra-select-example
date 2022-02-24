import { FormControl, FormLabel } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { Controller, useForm } from "react-hook-form";
//import "./styles.css";

const DATA = [
  { value: "01", label: "un" },
  { value: "02", label: "deux" }
];

export const MySelect = ({ control, data }: { control: any; data: [] }) => {
  return (
    <FormControl>
      <FormLabel htmlFor="state">State</FormLabel>
      {/* https://github.com/csandman/chakra-react-select */}
      {/* <Select options={statesFormatted} /> */}
      <Controller
        name="state"
        control={control}
        render={({ field }: { field: any }) => (
          <Select {...field} options={data} />
        )}
      />
    </FormControl>
  );
};

export const MyForm = ({ stateData }: { stateData: any }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: { DATA }
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MySelect data={stateData} control={control} />
    </form>
  );
};

export default function App() {
  return (
    <div className="App">
      <MyForm stateData={DATA} />
    </div>
  );
}
