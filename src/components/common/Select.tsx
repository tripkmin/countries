import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { size, timer } from 'styles/constants';

interface SelectProps {
  value: string;
  options: string[];
  optionHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ value, options, optionHandler }: SelectProps) {
  return (
    <SelectBox value={value} onChange={optionHandler}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectBox>
  );
}

const SelectBox = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  background-color: ${props => props.theme.background.secondary};
  color: ${props => props.theme.font.primary};
  transition: background-color ${timer.default}, color ${timer.default};
  border-radius: 10px;
  border: none;

  @media screen and (max-width: ${size.desktop}) {
    font-size: 0.9rem;
  }
`;
