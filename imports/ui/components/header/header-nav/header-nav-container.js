import {compose, merge} from 'react-komposer';
import LoginForm from './header-nav';
import getTrackerLoader from '../../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

function composer (props, onData ) {
  onData(null, {});
}

const depsToPropsMapper = (context, actions) => ({
  context:context,
});

export default merge(
  compose(getTrackerLoader(composer)),
  useDeps(depsToPropsMapper),
)(LoginForm);
