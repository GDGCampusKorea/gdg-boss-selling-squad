import { styled } from '@linaria/react';

type NavButtonProps = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  selected: boolean;
};

export const NavButton = ({ icon: Icon, name, selected }: NavButtonProps) => {
  return (
    <StyledNavButton>
      <IconBox selected={selected}>
        <Icon />
      </IconBox>
      <Name>{name}</Name>
    </StyledNavButton>
  );
};

const StyledNavButton = styled.div`
  width: calc(100% / 3);
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 12px;
  padding-bottom: 16px;
  background-color: inherit;
`;

const IconBox = styled.div<{ selected: boolean }>`
  width: 64px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border-color: none;
  background-color: ${({ selected }) => (selected ? '#FFDAD5' : 'transparent')};
`;

const Name = styled.p`
  text-align: center;
  margin: 0;
`;
