import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pFPrxL8ZidY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>India vs New Zeland</Title>
        <Details>
          <Info>7,948,154 views • Nov 30, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 1M
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="data:image/png;base64,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" />
            <ChannelDetail>
              <ChannelName>S Vlogs</ChannelName>
              <ChannelCounter>1M subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
};

export default Video;