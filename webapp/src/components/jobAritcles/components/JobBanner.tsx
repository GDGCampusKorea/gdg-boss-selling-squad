import { styled } from '@linaria/react';
import alba from '../../../assets/alba.svg';
import star from '../../../assets/albaStar.svg';

export const JobBanner = () => {
  return (
    <BannerLayout>
      <ContentWrapper>
        <BannerText>지디지 알바</BannerText>
        <BannerBtn>
          <StarImg src={star} alt="star" />
          <BtnText>모집중</BtnText>
          <StarImg src={star} alt="star" />
        </BannerBtn>
      </ContentWrapper>
      <AlbaImg src={alba} alt="alba" />
    </BannerLayout>
  );
};

const BannerLayout = styled.div`
  display: flex;
  width: calc(100% - 24px);
  height: 120px;
  padding: 0px 8px 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 17px;
  flex-shrink: 0;
  background: var(--key-colors-primary-container, #ffdad5);
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 156px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;

const BannerText = styled.span`
  color: #000;

  /* M3/headline/large */
  font-family: var(--Headline-Large-Font, Roboto);
  font-size: var(--Headline-Large-Size, 32px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Headline-Large-Line-Height, 40px); /* 125% */
  letter-spacing: var(--Headline-Large-Tracking, 0px);
`;

const BannerBtn = styled.button`
  display: flex;
  width: 155px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  border: 2px solid #000;
  background: #000;
`;

const BtnText = styled.span`
  color: var(--key-colors-primary, #ea4335);

  /* M3/title/medium */
  font-family: var(--Title-Medium-Font, Roboto);
  font-size: var(--Title-Medium-Size, 16px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Title-Medium-Line-Height, 24px); /* 150% */
  letter-spacing: var(--Title-Medium-Tracking, 0.15px);
`;

const StarImg = styled.img`
  width: 15px;
  height: 15px;
  flex-shrink: 0;
`;

const AlbaImg = styled.img`
  width: 163px;
  height: 120px;
  flex-shrink: 0;
`;
