import { AppScreen, cssVars } from '@stackflow/plugin-basic-ui';
import AsyncBoundary from '../../AsyncBoundary';
import { styled } from '@linaria/react';
import FeedCard from '../components/FeedCard';
import {
  PosAbsFull,
  FlexColumn,
  RootLineHeight,
  Flex,
  FlexAlignCenter,
  Flex1,
  OverflowScroll,
} from '../../../styles/f';
import { useJobArticles } from '../../../api/hooks/useGetJobArticles';
import { JobBanner } from '../components/JobBanner';

export const JobsListPage = () => {
  return (
    <AsyncBoundary>
      <AppScreen
        appBar={{
          title: 'Jobs',
        }}
      >
        <JobsList />
      </AppScreen>
    </AsyncBoundary>
  );
};

export const JobsList = () => {
  const { data } = useJobArticles();

  if (!data) return <>empty</>;

  const enhancedData = [];
  data.forEach((card, index) => {
    if (index % 5 === 0 && index !== 0) {
      enhancedData.push(<JobBanner key={`banner-${index}`} />);
    }
    enhancedData.push(
      <FeedCard
        key={card.articleId}
        articleId={card.articleId}
        title={card.title}
        price={card.price}
        region={card.region}
        daysAgo={card.daysAgo}
      />
    );
  });

  enhancedData.unshift(<JobBanner key="banner-top" />);

  return (
    <Wrapper>
      <Scrollable>
        {enhancedData}
        <JobBanner />
      </Scrollable>
    </Wrapper>
  );
};
export const Wrapper = styled(PosAbsFull)`
  ${FlexColumn}
  ${RootLineHeight}
`;

export const AppBarLeft = styled(Flex)`
  font-size: 1.125rem;
  font-weight: 700;
  margin-left: 0.5rem;
`;

export const AppBarLeftIcon = styled(FlexAlignCenter)`
  margin-left: 0.5rem;
`;

export const AppBarRight = styled.div`
  display: grid;
  grid-template-columns: 1.5rem 1.5rem 1.5rem;
  gap: 1rem;
  margin-right: 0.5rem;
`;

export const Scrollable = styled(Flex1)`
  ${OverflowScroll}
  padding-top: ${cssVars.appBar.height};
  @supports (padding-top: constant(safe-area-inset-top)) {
    padding-top: calc(${cssVars.appBar.height} + constant(safe-area-inset-top));
  }
  @supports (padding-top: env(safe-area-inset-top)) {
    padding-top: calc(${cssVars.appBar.height} + env(safe-area-inset-top));
  }
`;
