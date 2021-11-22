import React, { useState } from "react";
import { Col, Row, Image } from "antd";
import "./DetailsContent.css";
import { SpeakerIcon } from "./svgs";
// import Repitle from "../components/images/reptile.png";
// import Snail from "../components/images/image2.png";
// import Hill from "../components/images/image3.png";
// import {  SecondContent } from "./content";
import useAudio from "../hooks/useAudio";

export default function DetailsContent({ data }) {
  // const { small } = data?.imagedata?.results[0].urls.small;
  return (
    <div className="DetailsContentRoot">
      <SectionHeader
        title={data?.word}
        phoneticText={data?.phonetic}
        audioUrl={data?.phonetics[0].audio}
        dateStamp={"25th, Aug 2020"}
        first={true}
      />
      <SectionWithVideo
        first={true}
        Content={data?.meanings[0]?.definitions[0].definition}
        phoneticText={data?.phonetic}
        videoUrl={data?.youtubelink}
      />

      <SectionHeader title={`More about ${data?.word}`} />
      <SectionWithImage
        showImageFirst={true}
        imageUrl={data?.imagedata?.results[0].urls.small}
        // image2Url={Snail}
        // image3Url={Hill}
        Content={data?.origin}
      />

      {/* <SectionHeader title={"Invertebrates"} /> */}
      {/* <SectionWithImage showImageFirst={false} Content={SecondContent} /> */}
    </div>
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

const SectionWithVideo = ({ first, Content, videoUrl }) => {
  const isFirst = first ? "firstSection" : "otherSection";
  console.log(videoUrl);
  return (
    <>
      <div
        className={`sectionDescription sectionPadding sectionFlex ${isFirst}`}
      >
        {Content}
      </div>
      <VideoRenderer
        src={videoUrl || "https://www.youtube.com/embed/CWnk6PTsZNo"}
      />
    </>
  );
};

const SectionDivider = () => {
  return <hr className="sectionDivider" />;
};

const VideoRenderer = ({ src }) => {
  return (
    <div className="videoContentContainer">
      <iframe
        className="videoContent"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
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
              height={433}
              src={imageUrl}
              onClick={() => setVisible(true)}
            />
            <div style={{ display: "none" }}>
              <Image.PreviewGroup
                preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
              >
                <Image src={imageUrl} />
                {/* <Image src={image2Url} />
                <Image src={image3Url} /> */}
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
              src={imageUrl}
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
