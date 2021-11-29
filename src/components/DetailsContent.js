import React, { useState, useEffect } from "react";
import { Col, Row, Image, Tabs } from "antd";
import "./DetailsContent.css";
import { SpeakerIcon } from "./svgs";
import Repitle from "../components/images/reptile.png";
// import Snail from "../components/images/image2.png";
// import Hill from "../components/images/image3.png";
import { firstContent, SecondContent } from "./content";
import useAudio from "../hooks/useAudio";

export default function DetailsContent({ details }) {
  const { word, phonetics, meanings, origin } = details && details;
  const data = {
    title: word,
    audioUrl: phonetics[0]?.audio,
    phoneticText: phonetics[0]?.text,
    videoContent: meanings[0]?.definitions[0]?.definition,
    imageContent: origin,
    imageUrl: "",
    videoUrl: "",
  };
  const { TabPane } = Tabs;
  useEffect(() => {
    console.log(details);
  }, [details]);
  return (
    <Tabs defaultActiveKey="1" centered>
      {/* English */}
      <TabPane tab="English" key="1">
        <div className="DetailsContentRoot">
          <SectionHeader
            title={data.title}
            dateStamp={"29th, Dec 2021"}
            first={true}
            audioUrl={data.audioUrl}
            phoneticText={data.phoneticText}
          />
          <SectionWithVideo
            first={true}
            Content={data.videoContent}
            videoUrl={data.videoUrl}
          />
          <SectionWithImage
            showImageFirst={false}
            Content={data.imageContent}
          />
        </div>
      </TabPane>

      {/* yoruba */}
      <TabPane tab="Yoruba" key="2">
        <div className="DetailsContentRoot">
          <SectionHeader
            title={"Kiniun"}
            dateStamp={"25th, Aug 2020"}
            first={true}
            audioUrl={"wdnwkdkwdn"}
            // phoneticText={"ˈlʌɪən"}
          />
          <SectionWithVideo first={true} Content={firstContent} />
          <SectionWithImage showImageFirst={false} Content={SecondContent} />
        </div>
      </TabPane>

      {/* igbo */}
      <TabPane tab="Igbo" key="3">
        <div className="DetailsContentRoot">
          <SectionHeader
            title={"Fauna of Africa"}
            dateStamp={"25th, Aug 2020"}
            first={true}
            audioUrl={"wdnwkdkwdn"}
          />
          <SectionWithVideo first={true} Content={firstContent} />
          <SectionWithImage showImageFirst={false} Content={SecondContent} />
        </div>
      </TabPane>
      {/* hausa */}
      <TabPane tab="Hausa" key="4">
        <div className="DetailsContentRoot">
          <SectionHeader
            title={"Fauna of Africa"}
            dateStamp={"25th, Aug 2020"}
            first={true}
            audioUrl={"wdnwkdkwdn"}
          />
          <SectionWithVideo first={true} Content={firstContent} />
          <SectionWithImage showImageFirst={false} Content={SecondContent} />
        </div>
      </TabPane>
    </Tabs>
  );
}

const SectionHeader = ({ title, dateStamp, phoneticText, audioUrl }) => {
  const [, toggle] = useAudio(audioUrl);

  return (
    <>
      <Row className="sectionHeader" justify="space-between">
        <Col>
          <span className="titleText">
            {title} {phoneticText && `(${phoneticText})`}{" "}
          </span>
          {audioUrl && (
            <button className="iconBackground" onClick={toggle}>
              <SpeakerIcon />
            </button>
          )}
        </Col>

        {dateStamp && <Col className="updatedDate">Updated:{dateStamp}</Col>}
      </Row>
      <SectionDivider />
    </>
  );
};

const SectionWithVideo = ({ first, Content }) => {
  const isFirst = first ? "firstSection" : "otherSection";
  return (
    <>
      <div
        className={`sectionDescription sectionPadding sectionFlex ${isFirst}`}
      >
        {Content}
      </div>
      <VideoRenderer src={"https://www.youtube.com/embed/CWnk6PTsZNo"} />
    </>
  );
};

const SectionDivider = () => {
  return <hr className="sectionDivider" />;
};

const VideoRenderer = ({ src }) => {
  // const { src, type } = videoMeta;
  return (
    <div className="videoContentContainer">
      {/* <video controls className="videoContent" src={src} /> */}
      {/* <source src={src}  />type={`video/${format}` */}
      {/* width="1076" height="605" */}
      <iframe
        className="videoContent"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const SectionWithImage = ({
  imageUrl,
  image2Url,
  image3Url,
  showImageFirst,
  Content,
}) => {
  const [visible, setVisible] = useState(false);

  const imageLocation = showImageFirst ? "flex-start" : "flex-end";

  return (
    <div className="detailsWithImage sectionDescription">
      {showImageFirst ? (
        <>
          <div
            className="imageContainer"
            style={{ justifyContent: imageLocation }}
          >
            <Image
              preview={{ visible: false }}
              width={400}
              src={imageUrl || Repitle}
              onClick={() => setVisible(true)}
            />
            <div style={{ display: "none" }}>
              <Image.PreviewGroup
                preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
              >
                <Image src={imageUrl} />
                <Image src={image2Url} />
                <Image src={image3Url} />
              </Image.PreviewGroup>
            </div>
          </div>

          <div className="descriptionContainer" style={{ paddingLeft: "50px" }}>
            {Content}
          </div>
        </>
      ) : (
        <>
          <div className="descriptionContainer">{Content}</div>
          <div
            className="imageContainer"
            style={{ justifyContent: imageLocation, paddingLeft: "50px" }}
          >
            <Image
              preview={{ visible: false }}
              width={400}
              src={imageUrl || Repitle}
              onClick={() => setVisible(true)}
            />
            <div style={{ display: "none" }}>
              <Image.PreviewGroup
                preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
              >
                <Image src={imageUrl} />
                <Image src={image2Url} />
                <Image src={image3Url} />
              </Image.PreviewGroup>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
