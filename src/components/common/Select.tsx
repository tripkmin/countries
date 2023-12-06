import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { timer } from 'styles/constants';

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
  font-size: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.background.secondary};
  color: ${props => props.theme.font.primary};
  transition: background-color ${timer.default}, color ${timer.default};
  border-radius: 10px;
  border: none;
`;
