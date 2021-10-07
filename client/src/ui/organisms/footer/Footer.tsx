import styled from '@emotion/styled';
import TextWrap from '../../atom/typography/TextWrap';
import breakpoint from '../../configs/breakpoint';
import footerLinks from './footerLinks';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='footer-inner-wrap'>
        {footerLinks.map((footerlink, index) => (
          <div className='link-box' key={index + footerlink.title}>
            <TextWrap fontSize='h3'>{footerlink.title}</TextWrap>
            <ul>
              {footerlink.links.map((link) => (
                <li key={link.link}>
                  <a href={link.url}>{link.link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  padding-block: 2rem;
  .footer-inner-wrap {
    padding-inline: 1rem;
    max-width: 100%;
    width: 100%;
    display: flex;
    column-gap: 15%;
    row-gap: 1rem;
    flex-direction: column;
    .link-box {
      ul {
        padding-top: 0.75rem;
        li {
          list-style: none;
          padding-bottom: 0.75rem;
          a {
            color: ${({ theme }) => theme.primary.white + 'bd'};
            text-decoration: none;
            transition: all 0.23s ease-in;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 21px;
            &:hover {
              color: ${({ theme }) => theme.primary.white + 'f1'};
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  @media (min-width: ${breakpoint.tab}px) {
    .footer-inner-wrap {
      max-width: 85%;
      margin: 0 auto;
      flex-direction: row;
    }
  }
`;
