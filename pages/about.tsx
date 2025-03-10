/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="Men Haqimda">
      <PageSection>
        <PageWrapper className="mb-5" aria-label="Men haqimdagi ma'lumotlar">
          <h1 className="intro__text">Men Haqimda.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <Link href="/projects">
                  Frontend Dasturchi{' '}
                  <small>
                    <Github />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  id="cardHover"
                  className="float-right"
                >
                  Loyihalarni Ko'rish
                </Link>
                <p>
                  Men Frontend dasturchiman, qo'shimcha ravishda Backend va AI bilan ishlash tajribasiga egaman. Hozirda turli korxonalarga web-saytlar, Telegram botlar va keng qamrovli IT xizmatlarini muvaffaqiyatli taqdim etib kelmoqdaman.  
                </p>
              </li>
              <li>
                <Link href="/projects">
                  O'qituvchi{' '}
                  <small>
                    <Product />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  id="cardHover"
                  className="float-right"
                >
                  O'quvchilarim
                </Link>
                <p>
                  Jadidlar o'quv markazi va Ziyo Ta'lim markazlarida boshlang'ich dasturlash bilimlarini o'rgataman. O'quvchilarga o'z bilim va ko'nikmalarimni ulashish menga zavq bag'ishlaydi.
                </p>
              </li>
              <li>
                <Link href="/contact">
                  Bog'lanish{' '}
                  <small>
                    <Dribble />
                  </small>
                </Link>
                <Link
                  href="/contact"
                  id="cardHover"
                  className="float-right"
                >
                  Murojaat Qilish
                </Link>
                <p>
                  Agar ko'proq ma'lumot olishni istasangiz yoki biror loyiha ustida ishlashni xohlasangiz, bog'laning. Siz bilan hamkorlik qilishdan mamnun bo'laman! 
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper className="mb-5" aria-label="Talim">
          <article>
            <h4>Ta'lim.</h4>
            <ul className="timeline">
              <li>
                <Link href="https://tuit.uz/">
                  Toshkent Axborot Texnologiyalari Universiteti{' '}
                  <small>2021 - 2025</small>
                </Link>
                <a className="float-right">
                  <Date /> <b>Bakalavr</b>
                </a>
                <p>
                  Kompyuter injiniringi yo'nalishi bo'yicha tahsil olyapman.
                </p>
              </li>
              <li>
                <Link href="#">
                  Chirchiq davlat pedagogika universiteti qoshidagi texnikum{' '}
                  <small>2020 - 2022</small>
                </Link>
                <a className="float-right">
                  <Date /> <b>Darajasiz</b>
                </a>
                <p>
                  Kompyuter tizimlari va dasturlash yo'nalishi bo'yicha o'qiganman.
                </p>
              </li>
              <li>
                <Link href="#">
                  3-sonli umumiy o'rta ta'lim maktabi{' '}
                  <small>2017 - 2020</small>
                </Link>
                <a className="float-right">
                  <Date /> <b>Diplom</b>
                </a>
                <p>
                  Maktabda informatika va kompyuter fanlariga qiziqishim ortdi.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper>
          <FooterLink goto="/projects" className="mt-3 mb-5">
            Loyihalarga O'tish
          </FooterLink>
          <br />
        </PageWrapper>
      </PageSection>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
