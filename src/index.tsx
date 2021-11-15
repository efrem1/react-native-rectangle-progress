import { requireNativeComponent, ViewStyle } from 'react-native';

type RectangleProgressProps = {
  color: string;
  style: ViewStyle;
};

export const RectangleProgressViewManager = requireNativeComponent<RectangleProgressProps>(
'RectangleProgressView'
);

export default RectangleProgressViewManager;
