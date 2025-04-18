import styled, { css } from "styled-components";
// tải: npm install styled-components
// tải - khi lm việc với ts: npm install --save-dev @types/styled-components

/**
 * const StyledCard = styled.tag(h1, h2, div, span, ...)``
 * CSS-in-JS
 */

const StyledCard = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  width: calc(100% - 36px);
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  bottom: 0;
  background-color: #fff;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
  column-gap: 12px;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
  padding: 0 8px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

// <> ở đây giúp component nhận biết kiểu dữ liệu của props
const CardAmount = styled.span<{ secondary?: boolean; fontSize?: string }>`
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: bold;

  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `};
  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const CardRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardIcon = styled.svg`
  margin-left: 10px;
`;

interface CardProps {
  cardImg?: string;
  userAvatar?: string;
  userName?: string;
  cardTitle?: string;
  amountRate?: string | number;
  amount?: string | number;
  secondary?: boolean;
}

function Card(props: CardProps) {
  const { cardImg, userAvatar, userName, cardTitle, amount, amountRate, secondary } = props;
  console.log(">>> check prop of card", props);
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src={cardImg}
          alt=""
        />
      </CardImage>

      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src={userAvatar}
              alt=""
            />
            <UserName>{userName}</UserName>
          </CardUser>
          <CardRight style={{ color: "#FF2161" }}>
            <span style={{ color: "#232020" }}>{amountRate}</span>
            <CardIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="w-7 h-7"
              width={30}
              height={30}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </CardIcon>
          </CardRight>
        </CardTop>
        <CardFooter>
          <CardTitle>{cardTitle}</CardTitle>
          <CardAmount secondary={props.secondary} fontSize="22px">
            {amount}
          </CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
}
export default Card;
