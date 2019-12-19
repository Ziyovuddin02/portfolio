import React, {Fragment} from 'react'
import Link from 'next/link'
import { IconRight } from './icons'
import { SocialMedia } from './style'
import { Twitter, Facebook, Linkedin, Github, Instagram} from './icons'
import styled from 'styled-components'
const FooterStyle = styled.div`
p{
  font-size: 14px; 
  transition: all 1s ease;
  svg{
    margin-left: 1rem;
    animation-name: forward;
    animation-duration: .5s;
    animation-iteration-count: infinite;
    animation-direction:alternate;
  }
  &:hover {
    @keyframes forward {
      from {
        margin-left: 1rem;
      }
      to {
        margin-left: 2rem;
      }
    }
  }
}

`
const FooterLink = ({children, goto, ...rest}) => {
    return (
      <Fragment>
        <FooterStyle>
            <Link href={`${goto}`}><a><p {...rest}>{children}<IconRight/></p></a></Link>
        </FooterStyle>
        <SocialMedia>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/code_wonders" aria-label="Go To Adenekan Wonderful Twitter Page" title="Twitter Page"><Twitter /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/AdenekanWonderful" aria-label="Go To Adenekan Wonderful Facebook Page" title="Facebook Page"><Facebook /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/codewonders" aria-label="Go To Adenekan Wonderful Linkedin Page" title="Linkedin Page"><Linkedin /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/adenekan41" aria-label="Go To Adenekan Wonderful Github Page" title="Github Page"><Github /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/codewonders" aria-label="Go To Adenekan Wonderful Instagram Page" title="Instagram Page"><Instagram /></a>
        </SocialMedia>
      </Fragment>
        
    )
}

export default FooterLink