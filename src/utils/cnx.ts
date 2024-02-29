import classNames, { ArgumentArray } from 'classnames';
import { prefix } from '../config/constant';

export function resolveClassName(className: string) {
  return `${prefix}-${className}`;
}

export default function cnx(
  baseClassName: string | null,
  ...args: ArgumentArray
) {
  return classNames(baseClassName && resolveClassName(baseClassName), ...args);
}
