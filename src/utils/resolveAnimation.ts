import { PositionType } from './resolvePosition';

const resolve: Record<PositionType, string> = {
  // top
  top: 'fade-in-top',
  left: 'fade-in-left',
  right: 'fade-in-right',
  center: 'fade-in-top-center',
  // bottom
  bottom: 'fade-in-bottom-center'
};

export function resolveAnimation(animation: PositionType) {
  return resolve[animation];
}
