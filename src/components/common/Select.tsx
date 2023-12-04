import styled from 'styled-components';

interface SelectProps {
  options: string[];
}

export default function Select({ options }: SelectProps) {
  return (
    <SelectBox>
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </SelectBox>
  );
}

const SelectBox = styled.select`
  width: 200px;
  padding: 1rem 4rem;
`;
