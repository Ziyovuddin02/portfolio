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
              <li>
                <Link href="/projects">
                  Frontend Axborot Texnologiyalari Mutaxassisi{' '}
                  <small>Jadidlar avlodi (Biznes Fabrika)</small>
                </Link>
                <a className="float-right">
                  <Date /> <b>2023 - Hozir</b>
                </a>
                <p>
                  Jadidlar avlodi nomidagi "Biznes Fabrika" o‘quv markazida HTML, CSS, JavaScript texnologiyalari bo‘yicha o‘quvchilarga boshlang‘ich bilimlar beraman.  
                </p>
              </li>
              <li>
                <Link href="/projects">
                  Frontend Mentor Mutaxassisi{' '}
                  <small>Ziyo Ta'lim O'quv Markazi</small>
                </Link>
                <a className="float-right">
                  <Date /> <b>2025 - Hozir</b>
                </a>
                <p>
                  Ziyo Ta'lim o‘quv markazida boshlang‘ich dasturlash bo‘yicha o‘quvchilarga ta’lim beraman.  
                </p>
              </li>
              <li>
                <Link href="/projects">
                  Informatika O‘qituvchisi{' '}
                  <small>DM 3-sonli Maktab</small>
                </Link>
                <a className="float-right">
                  <Date /> <b>2025 - 2025</b>
                </a>
                <p>
                  Toshkent viloyati 3-sonli maktabda informatika fanidan o‘qituvchi sifatida ishladim.  
                </p>
              </li>
              <li>
                <Link href="/projects">
                  Frontend va Kompyuter Savodxonligi Ustozi{' '}
                  <small>Tursunoy Ona MCHJ (Matematika Education Centre)</small>
                </Link>
                <a className="float-right">
                  <Date /> <b>2022 - 2023</b>
                </a>
                <p>
                  Matematika Education Centre’da boshlang‘ich dasturlash va kompyuter savodxonligi bo‘yicha ta’lim berdim.  
                </p>
              </li>
              <li>
                <Link href="/projects">
                  Kompyuter Operator Mutaxassisi{' '}
                  <small>Tojinur Lutfullo MCHJ</small>
                </Link>
                <a className="float-right">
                  <Date /> <b>2021 - 2022</b>
                </a>
                <p>
                  Kompyuter operatori sifatida mijozlarni qabul qilish va kompyuter tizimlarini boshqarish bilan shug‘ullanganman.  
                </p>
              </li>
              <li>
                <Link href="/projects">
                  Axborot Kutubxona Texnologiyalari Mutaxassisi{' '}
                  <small>AKM DV Muassasasi</small>
                </Link>
                <a className="float-right">
                  <Date /> <b>2021 - 2022</b>
                </a>
                <p>
                  Chinoz tuman xokimligi 1-sektor ishchi guruhi bo‘limida kutubxona tizimlari bilan ishlaganman.  
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper className="mb-5" aria-label="Ta'lim">
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
