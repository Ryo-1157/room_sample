import React from "react";
import Baseline from "./components/Baseline";
import UnderMv from "./components/underMv";
import styles from "../styles/common.module.scss";
import SectionTitle from "./components/SectionTitle";
import SectionImage from "./components/SectionImage";
import NormalText from "./components/NormalText";
import ThreeColumn from "./components/ThreeColumn";
import ColumnList from "./components/ColumnList";

const about = () => {
  return (
    <>
      <UnderMv title="About" imageUrl="/images/aboutMv.jpg" />
      <section className={styles.wrap}>
        <Baseline number="01" />
        <div className={styles.bwn}>
          <div className={styles.section_left}>
            <div>
              <SectionTitle sectionText={`My\nIntroduce`} />
            </div>
            <SectionImage />
          </div>
          <div className={styles.widthRight}>
            <NormalText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              <br />
              voluptates provident minus explicabo, id animi possimus tempora,
              <br />
              nesciunt quod perspiciatis necessitatibus sapiente? Sed nihil esse
              <br />
              repellendus eos exercitationem. Praesentium accusamus atque quidem
              <br />
              fugit corporis, alias temporibus. Ipsum nihil veniam, reiciendis
              <br />
              quibusdam optio id deserunt, dolorem magni repellendus nemo
              <br />
              temporibus! Aspernatur asperiores corrupti, aut ex vitae officia,
              <br />
              molestiae pariatur amet iure vero quod delectus dignissimos
              <br />
              aliquam sed facilis nesciunt debitis. Iure mollitia iste sint
              <br />
              soluta ipsa doloremque, totam quam! Earum officiis illum tenetur
              <br />
              accusantium laborum animi ipsum quasi quas? Quas eum, possimus
              <br />
              maiores tempore et minima corrupti sit vero iusto incidunt.
              <br />
            </NormalText>
          </div>
        </div>
      </section>
      <section className={styles.wrap}>
        <Baseline number="02" />
        <div className={styles.bwn}>
          <div className={styles.section_left}>
            <SectionTitle sectionText={`My\nSkillset`} />
          </div>
          <div className={styles.point_div}>
            <NormalText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident hic in amet? Sint quasi cupiditate fugiat! Consectetur
              ad nobis voluptate. Voluptates nostrum nulla rerum hic porro.
              Labore, voluptatum architecto in enim possimus vero, numquam sunt
              ullam voluptate quas accusamus cum.
            </NormalText>
          </div>
        </div>
        <ul className={styles.mockup}>
          <li>
            <ThreeColumn
              imageUrl="/images/talk.png"
              site_title={`豊富な経験に基づく\n臨機応変な対応力`}
              desc="テキストが入りますテキストが入ります。テキストが入りますテキストが入ります。テキストが入りますテキストが入ります。"
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/talk.png"
              site_title={`豊富な経験に基づく\n臨機応変な対応力`}
              desc="テキストが入りますテキストが入ります。テキストが入りますテキストが入ります。テキストが入りますテキストが入ります。"
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/talk.png"
              site_title={`豊富な経験に基づく\n臨機応変な対応力`}
              desc="テキストが入りますテキストが入ります。テキストが入りますテキストが入ります。テキストが入りますテキストが入ります。"
            />
          </li>
        </ul>
      </section>
      <section className={styles.wrap}>
        <Baseline number="03" />
        <div className={styles.bwn}>
          <div className={styles.section_left}>
            <SectionTitle sectionText={`My\nSkillset`} />
          </div>
        </div>
        <div className={styles.profile}>
          <ul>
            <li>
              <ColumnList title="事業名" desc={`WEB CREATOR`} />
            </li>
            <li>
              <ColumnList
                title="所在"
                desc={`〒333-3333\n東京都千代田区XXXX4-24-8`}
              />
            </li>
            <li>
              <ColumnList title="設立" desc={`2020年7月1日`} />
            </li>
            <li>
              <ColumnList
                title="事業内容"
                desc={`・WEB制作事業\n・WEBマーケティング事業`}
              />
            </li>
          </ul>
          <ul>
            <li>
              <ColumnList
                title="主要取引先"
                desc={`・WEB制作会社様\n・広告代理店様`}
              />
            </li>
            <li>
              <ColumnList
                title="その他"
                desc={`・WEB制作検定 ２級\n・英語検定２級\n・早稲田大学法学部卒業`}
              />
            </li>

            <li>
              <ColumnList title="代表者" desc={`岩崎　朝日`} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default about;
