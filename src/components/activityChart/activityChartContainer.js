import styled from "styled-components";

export const ActivityChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100vw;
  height: calc(100vw / 7);
  justify-content: center;
`;

export const DayName = styled.div`
  font-size: x-small;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 5px;
  padding-top: 2%;
  padding-bottom: 0.5%;
`;

export const Paragraph = styled.p`
  font-size: x-small;
  margin: 1.5px;
  font-size: calc(vw/50);
`;

export const MonthAndChartContainer = styled.div`
  width: 90%;
  height: 100%;
`;

export const MonthName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  font-size: 1.3vw;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  flex-direction: column-reverse;
  height: 80%;
  width: 100%;
`;
