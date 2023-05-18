import PropTypes from 'prop-types';
import { Overlay } from './styles';
import { Spinner } from '../Spinner';
import ReactPortal from '../ReactPortal';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';

export default function Loader({ isLoading }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="load-root">
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={60} />
      </Overlay>

    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
