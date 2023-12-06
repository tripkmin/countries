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
  background-color: ${props => props.theme.background.secondary};
  transition: background-color ${timer.default}, color ${timer.default},
    fill ${timer.default};
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
`;
