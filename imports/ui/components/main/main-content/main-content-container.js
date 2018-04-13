import {compose, merge} from 'react-komposer';
import MainContent from './main-content';
import getTrackerLoader from '../../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

function composer (props, onData) {
    console.log(props);
    onData(null, {});
}

const depsToPropsMapper = (context, actions) => ({
  context:context,
});

export default merge(
  compose(getTrackerLoader(composer)),
  useDeps(depsToPropsMapper),
)(MainContent);
