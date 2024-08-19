import { Select } from "@chakra-ui/react";

interface Props {
  onSelect: (city: string | null) => void;
}

const CitySelector = ({ onSelect }: Props) => {
  return (
    <>
      <Select
        placeholder="Select City"
        onChange={(event) => onSelect(event.target.value)}
      >
        <option value="Manila">Manila</option>
        <option value="Cainta">Cainta</option>
        <option value="London">London</option>
      </Select>
    </>
  );
};

export default CitySelector;
