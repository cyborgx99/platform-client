import { usePortal } from 'hooks';
import { createPortal } from 'react-dom';

import { IPortalProps } from './types';

/**
 * @example
 * <Portal id="modal">
 *   <p>Thinking with portals</p>
 * </Portal>
 */

const Portal = ({ id, children }: IPortalProps) => {
  const target = usePortal(id);
  return createPortal(children, target);
};

export default Portal;
