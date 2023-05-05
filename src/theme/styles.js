import { ActivityIndicator } from "react-native-paper";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import { colors } from "./colors";
import { sizes } from "./sizes";

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Details = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: ${(props) => props.theme.space[4]};
  height: ${(props) => props.theme.space[4]};
  margin-left: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const IsOpened = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Loading = styled(ActivityIndicator).attrs({
  size: sizes[3],
  animating: true,
  color: colors.animation,
})`
  margin-left: -25px;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const VetCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.card};
  margin: ${(props) => props.theme.space[2]};
`;

export const VetCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.card};
  padding: ${(props) => props.theme.space[3]};
`;
