import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import Gallery from 'react-grid-gallery';

const IMAGES = [
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08305.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08305-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08352.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08352-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08365.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08365-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08584.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08584-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08929.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08929-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08990.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08990-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09087.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09087-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09258.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09258-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09314.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09314-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09344.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09344-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09530.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09530-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09727.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09727-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "",
        caption: "",
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
                  <p className={styles.infoWhere}><a href="https://goo.gl/maps/LZdGmn4ct9aJvMTs9">인천 네스트 호텔</a></p>
                  <a href="https://calendar.google.com/calendar/r/eventedit?text=%EC%9E%90%EC%98%81%C2%B7%EC%84%B1%ED%98%84%20%EA%B2%B0%ED%98%BC%EC%8B%9D&dates=20201010T033000Z/20201010T050000Z&details=7%EB%85%84%EC%9D%98%20%EB%A7%8C%EB%82%A8%20%EB%81%9D%EC%97%90%20%EC%A0%80%ED%9D%AC%20%EB%91%90%20%EC%82%AC%EB%9E%8C%EC%9D%B4%20%ED%95%9C%EB%A7%88%EC%9D%8C%EC%9C%BC%EB%A1%9C%20%EC%A7%84%EC%8B%A4%ED%95%9C%20%EC%82%AC%EB%9E%91%EC%9D%98%20%EA%B2%B0%EC%8B%A4%EC%9D%84%20%EB%A7%BA%EA%B8%B0%EB%A1%9C%20%EC%95%BD%EC%86%8D%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%20%EB%9C%BB%EA%B9%8A%EC%9D%80%20%EC%9E%90%EB%A6%AC%EC%97%90%20%EC%98%A4%EC%8B%9C%EC%96%B4%20%EC%B6%95%EB%B3%B5%ED%95%B4%EC%A3%BC%EC%8B%AD%EC%8B%9C%EC%98%A4.%20%EB%8D%94%20%EC%9E%90%EC%84%B8%ED%95%9C%20%EC%A0%95%EB%B3%B4%EB%8A%94%20%EC%B2%A8%EB%B6%80%ED%95%9C%20%EC%A3%BC%EC%86%8C%20%ED%99%95%EC%9D%B8%20%EB%B6%80%ED%83%81%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%20https%3A%2F%2Fjayoung.sunghyun.wedding&location=%EB%84%A4%EC%8A%A4%ED%8A%B8%20%ED%98%B8%ED%85%94%2C%20%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%20%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EC%9A%A9%EC%9C%A0%EB%8F%99%20%EC%98%81%EC%A2%85%ED%95%B4%EC%95%88%EB%82%A8%EB%A1%9C%2019-5" className={styles.infoCalendarBtn}>캘린더에 일정 추가</a>
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

          <section className={styles.contact}>
              <h2 className={styles.contactTitle}>오시는 길</h2>
              <div className={styles.contactMap}>
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.507784331008!2d126.42575501566854!3d37.42510747982459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b90ae8e685921%3A0xf5dfc1398b884b99!2z64Sk7Iqk7Yq4IO2YuO2FlA!5e0!3m2!1sko!2skr!4v1598356818882!5m2!1sko!2skr"
                      width="100%" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false"
                      tabIndex="0"></iframe>
              </div>
              <ul className={styles.contactHowto}>
                  <li>
                      <h3 className={styles.contactHowtoTitle}>자가용 이용 시</h3>
                      <p className={styles.contactHowtoDescription}>
                          인천공항고속도로 용유도~무의도 방향 진출 후 영종해안남로를 따라 약 5km 주행 후 경정훈련원 방면으로 진입하시면 네스트호텔에 도착합니다.
                          <br/>
                          <br />
                          네비게이션 검색 방법
                          <br />
                          - 네스트호텔 또는 주소 검색
                          <br />
                          - 용유역 또는 경정훈련원, 거잠포 선착장 검색
                          <br />
                          <br />
                          (업그레이드가 되지 않은 네비의 경우 위의 단어로 검색)
                      </p>
                  </li>
                  <li>
                      <h3 className={styles.contactHowtoTitle}>인천국제공에서 오시는 법</h3>
                      <p className={styles.contactHowtoDescription}>
                          인천국제공항 제1여객터미널, 1층14C에서 출발
                          (45분 간격 운행, 10~15분 소요)
                          <br /><br />
                          인천국제공항 제2여객터미널,1층6A에서 출발
                          (20~25분 소요)
                      </p>
                      <a href="https://www.nesthotel.co.kr/about/popup_bus01.asp#bustop" className={styles.contactHowtoBus}>무료 셔틀버스 시간표</a>
                  </li>
                  <li>
                      <h3 className={styles.contactHowtoTitle}>광주광역시에서 출발하시는 하객 분</h3>
                      <p className={styles.contactHowtoDescription}>버스 대절 예정이니 신랑측 혼주께 연락바랍니다.</p>
                  </li>
              </ul>
          </section>
          <footer className={styles.us}>
              <p className={styles.usTitle}>오시는 길 심심치 않도록<br/>저희 부부가 요즘 관심있는 주제의 영상을 모아봤어요</p>
              <div className={styles.usVideo}>
                  <iframe width="560" height="315"
                          src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL5RL7r5pQ8lRylqEdrg9Rh1a-IWw0mZoy"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
              </div>
          </footer>
      </main>
    </div>
  )
}
