import styled from 'styled-components';
import { size } from 'styles/constants';

export default function Footer() {
  return (
    <FooterBox>
      <p>© 2023 Powered by Next.js, Vercel</p>
      <button></button>
      <button></button>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  margin: 0 auto;
  padding: 2rem 0;
  width: 1100px;
  border-top: 1px solid #eee;

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
    padding: 2rem 1.2rem;
  }
`;
