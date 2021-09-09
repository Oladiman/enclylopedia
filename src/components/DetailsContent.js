import React, { useState } from "react";
import { Col, Row, Image } from "antd";
import "./DetailsContent.css";
import { SpeakerIcon } from "./svgs";
import Repitle from "../components/images/reptile.png";
import Snail from "../components/images/image2.png";
import Hill from "../components/images/image3.png";
import { firstContent, SecondContent } from "./content";

export default function DetailsContent() {
  return (
    <div className="DetailsContentRoot">
      <SectionHeader
        title={"Fauna of Africa"}
        dateStamp={"25th, Aug 2020"}
        first={true}
      />
      <SectionWithVideo first={true} Content={firstContent} />

      <SectionHeader title={"Origins and history of African fauna"} />
      <SectionWithImage
        showImageFirst={true}
        imageUrl={Repitle}
        image2Url={Snail}
        image3Url={Hill}
        Content={SecondContent}
      />

      <SectionHeader title={"Invertebrates"} />
      <SectionWithImage showImageFirst={false} Content={SecondContent} />
    </div>
  );
}

const SectionHeader = ({ title, dateStamp }) => {
  return (
    <>
      <Row className="sectionHeader" justify="space-between">
        <Col>
          <span className="titleText">{title} </span>
          <button className="iconBackground">
            <SpeakerIcon />
          </button>
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
      <VideoRenderer />
    </>
  );
};

const SectionDivider = () => {
  return <hr className="sectionDivider" />;
};

const VideoRenderer = ({ src, format }) => {
  // const { src, type } = videoMeta;
  return (
    <div className="videoContentContainer">
      <video controls className="videoContent">
        <source src={src} type={`video/${format}`} />
      </video>
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
