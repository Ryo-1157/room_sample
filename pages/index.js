import Head from "next/head";
import styles from "../styles/common.module.scss";
import Baseline from "./components/Baseline";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import SectionImage from "./components/SectionImage";
import NormalText from "./components/NormalText";
import Link from "next/link";
import Skillset from "./components/Skillset";
import ThreeColumn from "./components/ThreeColumn";

export default function Home() {
  return (
    <>
      <Head>
        <title>TOPページ</title>
      </Head>
      <Hero />
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
        <div className={styles.viewmore_wrap}>
          <div className={styles.viewmore}>
            <Link href="/about">View More</Link>
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
        <ul className={styles.skillset_list}>
          <li>
            <Skillset imageUrl="/images/html_logo.png" skillName="HTML" />
          </li>
          <li>
            <Skillset imageUrl="/images/css_logo.png" skillName="CSS" />
          </li>
          <li>
            <Skillset imageUrl="/images/js_logo.png" skillName="JavaScript" />
          </li>
        </ul>
      </section>
      <section className={styles.wrap}>
        <Baseline number="03" />
        <div className={styles.bwn}>
          <div className={styles.section_left}>
            <SectionTitle sectionText={`Works`} />
          </div>
          <div className={styles.point_div}>
            <NormalText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident hic in amet? Sint quasi cupiditate fugiat! Consectetur
              ad nobis voluptate. Voluptates nostrum nulla rerum hic porro.
            </NormalText>
          </div>
        </div>
        <ul className={styles.mockup}>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
        </ul>
        <div className={styles.viewmore_wrap}>
          <div className={styles.viewmore}>
            <Link href="/about">View More</Link>
          </div>
        </div>
      </section>
    </>
  );
}
