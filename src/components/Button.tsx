import styled from "@emotion/styled";

interface ButtonStyleProps {
  color: string;
}

interface Props {
  label: string;
  onClick?: () => void; // ?(옵셔널체이닝) : 들어올 수도 있고 아닐 수도 있다
  color?: string; // 컬러가 들어올 수도 있고 아닐 수도 있다
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  border: 0;
  color: #fff;
  background-color: ${props => props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.color};
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Button = ({ label, onClick, color = "#ff5722" }: Props) => {
  return (
    <ButtonStyle onClick={onClick} color={color}>
      {label}
    </ButtonStyle>
  );
};

export default Button;
