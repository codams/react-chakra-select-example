import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { Controller, useForm } from "react-hook-form";
import { ChakraProvider } from "@chakra-ui/react";
export default function App() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      select: { value: "02", label: "Deux" },
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <ChakraProvider>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack width={"80%"} marginLeft="10%">
            <FormControl>
              <FormLabel htmlFor="state">Select !</FormLabel>
              {/* https://github.com/csandman/chakra-react-select */}
              <Controller
                name="select"
                control={control}
                render={({ field }: { field: any }) => (
                  <Select
                    {...field}
                    options={[
                      { value: "01", label: "Un" },
                      { value: "02", label: "Deux" },
                    ]}
                  />
                )}
              />
            </FormControl>

            <FormControl paddingTop={6} marginX={10}>
              <Input id="submit" type="submit" />
            </FormControl>
          </VStack>
        </form>
      </div>
    </ChakraProvider>
  );
}
