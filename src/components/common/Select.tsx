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
  width: 100px;
  font-size: 1.2rem;
  padding: 1rem;
  border: 1px solid #aaa;
  border-radius: 10px;
`;
