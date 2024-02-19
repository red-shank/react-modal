const resolve = {
  center: 'position-center',
  left: 'position-left',
  right: 'position-right',
  top: 'position-top',
  bottom: 'position-bottom'
};

export type PositionType = keyof typeof resolve;

export function resolvePosition(position: PositionType) {
  return resolve[position];
}
