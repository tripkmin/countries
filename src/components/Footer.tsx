import { IconFrontEndMentor, IconGithub } from 'assets/icons';
import styled from 'styled-components';
import { size, timer } from 'styles/constants';
import { FlatButton } from './common/Button';

export default function Footer() {
  return (
    <FooterBox>
      <p>© 2023, Powered by Vercel</p>
      <IconBox>
        <a
          href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
          target="_blank"
          title="Frontend Mentor Challenge Page">
          <IconButton>
            <IconFrontEndMentor />
          </IconButton>
        </a>
        <a
          href="https://github.com/tripkmin/countries"
          target="_blank"
          title="Minoff Github Repository">
          <IconButton>
            <IconGithub />
          </IconButton>
        </a>
      </IconBox>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  margin: 0 auto;
  padding: 2rem 0;
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  fill: ${props => props.theme.font.primary};
  color: ${props => props.theme.font.primary};
  background-color: ${props => props.theme.background.primary};
  border-top: 1px solid ${props => props.theme.border.primary};
  transition: all ${timer.default};

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
    padding: 2rem 1.2rem;
  }
`;

const IconBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconButton = styled(FlatButton)`
  width: 40px;
  height: 40px;
`;
