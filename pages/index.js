import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import Gallery from 'react-grid-gallery';
import Clipboard from 'react-clipboard.js';

const IMAGES = [
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08305.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08305-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "새벽 고속도로 위 서자영과 황성현",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08365.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08365-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "등유 램프를 들고 있는 황성현과 그 앞에서 꽃을 들고 있는 서자영",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08352.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08352-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "등유 램프와 꽃을 들고 서로를 보는 커플",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08584.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08584-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "하늘을 보면서 한 방향으로 걸어가는 두 사람",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08990.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08990-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "물가에 서있는 황성현과 서자영",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09087.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09087-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "활짝 웃는 서자영과 그 앞에 웃고 있는 황성현",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN08929.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN08929-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "자동차 트렁크에 앉아 장난을 치고 있는 서자영과 황성현",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09727.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09727-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "황성현 어께에 손을 올리고 웃는 서자영",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09258.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09258-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "황성현 뒤에서 목을 안고 장난을 치는 서자영",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09344.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09344-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "황성현의 볼을 꼬집는 서자영과 활짝 웃는 황성현",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09530.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09530-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "서자영에게 책을 읽어주는 황성현",
    },
    {
        src: "https://cdn.hwang.sh/wedding/photo/HAN09314.jpg",
        thumbnail: "https://cdn.hwang.sh/wedding/photo/HAN09314-thumbnail.jpg",
        thumbnailWidth: 110,
        thumbnailHeight: 110,
        alt: "안경에 손을 올리고 활짝 웃는 황성현",
    },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>자영·성현 결혼합니다</title>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:title" content="자영·성현 결혼합니다"/>
        <meta property="og:url" content="https://jayoung.sunghyun.wedding"/>
        <meta property="og:type" content="article"/>
        <meta property="og:image" content="https://cdn.hwang.sh/wedding/photo/HAN08929-thumbnail.jpg"/>
        <meta property="og:description" content="10월 10일 12시 30분에 자영·성현 인천 네스트 호텔에서 결혼합니다. 뜻깊은 자리에 오시어 축복해주십시오."/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&family=Noto+Serif+KR:wght@200;300;400&display=swap" rel="stylesheet"/>
        <link rel="canonical" href="https://jayoung.sunghyun.wedding" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-114927612-2" />
        <script dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-114927612-2');
        `,
        }}/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.hwang.sh/wedding/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.hwang.sh/wedding/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.hwang.sh/wedding/favicon/favicon-16x16.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <main>
          <header className={styles.header}>
              <div>
                  <img className={styles.headerTitle} src="https://cdn.hwang.sh/wedding/header-title-white.svg" alt="결혼합니다" />
                  <img className={styles.headerDate} src="https://cdn.hwang.sh/wedding/header-date.svg" alt="10월 10일" />
              </div>
          </header>
          <section className={styles.info}>
              <table className={styles.infoUs}>
                  <thead>
                      <tr>
                          <th className={styles.infoUsLabel}>신랑</th>
                          <th className={styles.infoUsLabel}>신부</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><a href="sms:+821023831083">황성현</a></td>
                          <td><a href="sms:+821020610827">서자영</a></td>
                      </tr>
                  </tbody>
              </table>
              <div className={styles.infoWhenAndWhere}>
                  <time dateTime="2020-10-10T12:30:00.000+09:00" className={styles.infoWhen}>2020년 10월 10일 12시 30분</time>
                  <p className={styles.infoWhere}><a href="https://www.nesthotel.co.kr/about/about.asp#aboutBox6">인천 네스트 호텔</a></p>
              </div>
              <div className={styles.infoOurParents}>
                  <table>
                      <tbody>
                      <tr>
                          <td className={styles.infoOurParentsLabel}>신랑 어머니</td>
                          <td><a href="tel:+821096020006">최영선</a></td>
                      </tr>
                      <tr>
                          <td className={styles.infoOurParentsLabel}>신랑 아버지</td>
                          <td><a href="tel:+821036351083">황영일</a></td>
                      </tr>
                      </tbody>
                  </table>
                  <table>
                      <tbody>
                      <tr>
                          <td className={styles.infoOurParentsLabel}>신부 어머니</td>
                          <td><a href="tel:+821050504522">서미선</a></td>
                      </tr>
                      <tr>
                          <td className={styles.infoOurParentsLabel}>신부 아버지</td>
                          <td><a href="tel:+821053364521">서광석</a></td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </section>

          <section className={styles.covid19}>
              <p className={styles.covid19Guide}>
                  <span>저희의 결혼을 축하해주시는 분들께</span>
                  <br/><br/>
                  안녕하세요, 서자영·황성현입니다.
                  수도권의 코로나19 사회적 거리두기 2단계가 약 한 달째 유지되고 있습니다.
                  결혼식 날짜가 다가올수록 저희 역시 결혼식 진행 여부를 두고 고민이 많았습니다.
                  하지만 언제쯤 상황이 나아질지 짐작하기 어려워 결혼식을 미루지 않고 예정대로 진행하기로 했습니다.
                  <br/><br/>
                  많은 분의 축하 속에 결혼식을 올리고 싶었으나, 결혼식 당일에도 수도권 코로나19 사회적 거리두기 2단계가 유지될 것으로 예상됩니다.
                  이에 가족들만 모시고 결혼식을 진행하려 합니다.
                  <br/><br/>
                  결혼식에 직접 참석하지 못하시더라도 마음 가득 저희를 축복해주시기 바랍니다.
                  전해주시는 축하의 마음만으로도 큰 기쁨이 됩니다.
                  새로운 출발을 축하해주시는 모든 분께 진심으로 감사드리며 보람 있는 하루하루 보내시기를 기원합니다. 감사합니다.
              </p>
              <div className={styles.covid19Howto}>
                  <span className={styles.covid19HowtoTitle}>마음 전하실 곳</span>
                  <br/><br/>
                  <div>
                      <span className={styles.covid19HowtoLabel}>신랑 황성현</span>
                      <br/>
                      <Clipboard component="a" data-clipboard-text="카카오 3333-03-7219355">
                      카카오 3333-03-7219355
                      </Clipboard>
                      <br/>
                      <br/>
                      <span className={styles.covid19HowtoLabel}>신랑측 혼주 황영일</span>
                      <br/>
                      <Clipboard component="a" data-clipboard-text="농협 356-1315-5907-03">
                      농협 356-1315-5907-03
                      </Clipboard>
                      <br/>
                      <br/>
                      <span className={styles.covid19HowtoLabel}>신부 서자영</span>
                      <br/>
                      <Clipboard component="a" data-clipboard-text="카카오 3333-04-5817344">
                      카카오 3333-04-5817344
                      </Clipboard>
                      <br/>
                      <br/>
                      <span className={styles.covid19HowtoLabel}>신부측 혼주 서광석</span>
                      <br/>
                      <Clipboard component="a" data-clipboard-text="하나 621-910277-41908">
                      하나 621-910277-41908
                      </Clipboard>
                  </div>
              </div>
          </section>

          <section className={styles.gallery}>
              <Gallery
                  images={IMAGES}
                  enableImageSelection={false}
                  maxRows={4}
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
              </ul>
          </section>
      </main>
    </div>
  )
}
