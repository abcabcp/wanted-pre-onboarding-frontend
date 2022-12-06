import styled from 'styled-components';

const StyledCheckBox = styled.div<{ checked: boolean }>`
  height: 2rem;
  width: 2rem;
  border: 0.125rem solid var(--gray3);
  border-radius: 0.25rem;
  position: relative;
  background: var(--white);
  & .inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 1.5rem;
    width: 1.5rem;
    background: ${(props) => (props.checked ? 'var(--primary-300)' : 'none')};
  }
`;

export default function CheckBox({
  className,
  checked,
  onClick,
}: {
  className?: string;
  checked: boolean;
  onClick?: () => void;
}) {
  return (
    <StyledCheckBox className={className} checked={checked} onClick={onClick}>
      <div className="inner"></div>
    </StyledCheckBox>
  );
}
