import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import Gallery from 'react-grid-gallery';

const IMAGES = [
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        alt: "",
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>자영.성현.결혼.</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&family=Noto+Serif+KR:wght@300;400&display=swap" rel="stylesheet"/>
      </Head>
      <main>
          <header className={styles.header}>
              <div>
                  <img className={styles.headerTitle} src="https://cdn.hwang.sh/wedding/header-title.svg" alt="결혼합니다" />
                  <img className={styles.headerDate} src="https://cdn.hwang.sh/wedding/header-date.svg" alt="10월 10일" />
              </div>
          </header>
          <section className={styles.info}>
              <table className={styles.infoUs}>
                  <thead>
                      <tr>
                          <th>신랑</th>
                          <th>신부</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>황성현</td>
                          <td>서자영</td>
                      </tr>
                  </tbody>
              </table>
              <div className={styles.infoWhenAndWhere}>
                  <time dateTime="2020-10-10T12:30:00.000+09:00" className={styles.infoWhen}>2020년 10월 10일 12시 30분</time>
                  <p className={styles.infoWhere}>인천 네스트 호텔</p>
                  <button className={styles.infoCalendarBtn}>캘린더에 일정 추가</button>
              </div>
              <div className={styles.infoOurParents}>
                  <table>
                      <tbody>
                      <tr>
                          <td className={styles.infoOurParentsLabel}>신랑 어머니</td>
                          <td>최영선</td>
                      </tr>
                      <tr>
                          <td className={styles.infoOurParentsLabel}>신랑 아버지</td>
                          <td>황영일</td>
                      </tr>
                      </tbody>
                  </table>
                  <table>
                      <tbody>
                      <tr>
                          <td className={styles.infoOurParentsLabel}>신부 어머니</td>
                          <td>서미선</td>
                      </tr>
                      <tr>
                          <td className={styles.infoOurParentsLabel}>신부 아버지</td>
                          <td>서광석</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </section>

          <section className={styles.gallery}>
              <Gallery
                  images={IMAGES}
                  enableImageSelection={false}
              />
          </section>

          <section>
              <h2>오시는 길</h2>
              <div>map</div>
              <ul>
                  <li>
                      <h3>자가용 이용 시</h3>
                      <p>...</p>
                  </li>
                  <li>
                      <h3>인천국제공에서 오시는 법</h3>
                      <p>...</p>
                      <a href="#">무료 셔틀버스 시간표</a>
                  </li>
                  <li>
                      <h3>광주광역시에서 출발하시는 하객 분</h3>
                      <p>버스 대절 예정이니 신랑측 혼주께 연락바랍니다.</p>
                  </li>
              </ul>
          </section>
          <footer>
              <p>오시는 길 심심치 않도록 저희 부부가 요즘 관심있는 주제의 영상을 모아봤어요.</p>
              <div>video</div>
          </footer>
      </main>
    </div>
  )
}
