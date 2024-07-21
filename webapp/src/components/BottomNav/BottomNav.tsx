import { styled } from '@linaria/react';

import { ReactComponent as IconEdit } from '@/assets/icon-edit.svg';
import { ReactComponent as IconHouse } from '@/assets/icon-house.svg';
import { ReactComponent as IconPeople } from '@/assets/icon-people.svg';
import { NavButton } from './NavButton';

export const BottomNav = () => {
  return (
    <StyledBottomNav>
      <NavButton icon={IconEdit} name="글쓰기" selected={true} />
      <NavButton icon={IconHouse} name="홈" selected={false} />
      <NavButton icon={IconPeople} name="알바찾기" selected={false} />
    </StyledBottomNav>
  );
};

const StyledBottomNav = styled.div`
  width: 360px;
  height: auto;
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  position: sticky;
  bottom: 0;
  z-index: 1000;
`;
