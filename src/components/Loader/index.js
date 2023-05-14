import PropTypes from 'prop-types';
import { Overlay } from './styles';
import { Spinner } from '../Spinner';
import ReactPortal from '../ReactPortal';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId="load-root">
      <Overlay>
        <Spinner size={60} />
      </Overlay>

    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
