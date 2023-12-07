import styled from 'styled-components';
import { timer } from 'styles/constants';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  border-radius: 10px;
  fill: ${props => props.theme.font.secondary};
  color: ${props => props.theme.font.primary};
  background-color: ${props => props.theme.background.button};
  transition: background-color ${timer.default}, color ${timer.default},
    fill ${timer.default}, transform ${timer.fast};
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${props => props.theme.background.buttonHover};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const FlatButton = styled.button`
  fill: ${props => props.theme.font.primary};
  background-color: ${props => props.theme.background.secondary};
  transition: background-color ${timer.default}, fill ${timer.default},
    transform ${timer.fast};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;
