import { Select } from "@chakra-ui/react";

interface Props {
  onSelect: (unit: string) => void;
  selectedUnit: string;
}

const UnitSelector = ({ onSelect, selectedUnit }: Props) => {
  return (
    <>
      <Select
        onChange={(event) => onSelect(event.target.value)}
        defaultValue={selectedUnit}
      >
        <option value="celcius">&deg;C</option>
        <option value="fahrenheit">&deg;F</option>
      </Select>
    </>
  );
};

export default UnitSelector;
