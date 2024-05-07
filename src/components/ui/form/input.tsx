import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input as ChakraInput,
} from "@chakra-ui/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options?: {
    labelColor?: string;
  };
}

const defaultOptions = {
  labelColor: "#fff",
};
const Input = ({
  label,
  name,
  type,
  className,
  options = defaultOptions,
  ...props
}: InputProps) => {
  return (
    <div className={className}>
      <FormControl isInvalid={false} _placeholder={"hello"}>
        <FormLabel color={options.labelColor}>{label}</FormLabel>
        <ChakraInput
          bg={"#262727"}
          placeholder={label}
          border={"none"}
          name={name}
          type={type}
        />
        <FormErrorMessage>Wrong password</FormErrorMessage>
      </FormControl>
    </div>
  );
};

export default Input;
