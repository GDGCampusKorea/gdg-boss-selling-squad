import { AppScreen } from '@stackflow/plugin-basic-ui';
import AsyncBoundary from '../../AsyncBoundary';
import { styled } from '@linaria/react';

type Props = {};

export const JobsArticleDetailPage = (props: Props) => {
  return (
    <AppScreen
      appBar={{
        title: '게시글 상세',
      }}
    >
      <AsyncBoundary>
        <JobsList />
      </AsyncBoundary>
    </AppScreen>
  );
};

const JobsList = () => {
  return (
    <Container>
      <img src="src/assets/product_image.png" alt="상품 이미지" />
      <TitleContainer>
        <Title>여름 선풍기 판매합니다.</Title>
        <Price>000,000원</Price>
      </TitleContainer>
      <Description>
        <DescriptionItem>
          <DescTitle>직거래</DescTitle>
          <DescDetail>불가</DescDetail>
        </DescriptionItem>
        <DescriptionItem>
          <DescTitle>수량</DescTitle>
          <DescDetail>1개</DescDetail>
        </DescriptionItem>
      </Description>
      <Post>돈이 없어서 판매합니다ㅠㅠ</Post>
      <Button>채팅하기</Button>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const TitleContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Price = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 600;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid #e0e0e0;
  padding: 16px;
  gap: 10px;
`;

const DescriptionItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const DescTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #626262;
  padding-right: 16px;
`;

const DescDetail = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #5d5d5d;
`;

const Post = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  white-space: pre-wrap;
  height: auto;
  min-height: 200px;
  padding: 16px;
`;

const Button = styled.div`
  background-color: #ea4335;
  color: white;
  border-radius: 10px;
  text-align: center;
  padding: 16px;
  margin: 0 16px;
`;
