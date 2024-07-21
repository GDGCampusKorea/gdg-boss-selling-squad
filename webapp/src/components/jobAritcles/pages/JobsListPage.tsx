import { AppScreen, cssVars } from '@stackflow/plugin-basic-ui';
import AsyncBoundary from '../../AsyncBoundary';
import { styled } from '@linaria/react';
import FeedCard from '../components/FeedCard';
import CategorySlider from '../components/CategorySlider';
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

  return (
    <Wrapper> {/* ?? */}
      <CategorySliderWrapper>
        <CategorySlider />
      </CategorySliderWrapper>
      <Scrollable>
        {data.map((card) => (
          <FeedCard
            key={card.articleId}
            articleId={card.articleId}
            title={card.title}
            price={card.price}
            region={card.region}
            daysAgo={card.daysAgo}
          />
        ))}
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

export const CategorySliderWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  background-color: #fff;
  padding: 10px 0;
`;