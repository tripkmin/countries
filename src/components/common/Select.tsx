import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface SelectProps {
  options: string[];
  optionHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ options, optionHandler }: SelectProps) {
  return (
    <SelectBox onChange={optionHandler}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
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
