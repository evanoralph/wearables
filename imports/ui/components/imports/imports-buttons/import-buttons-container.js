import {compose, merge} from 'react-komposer';
import Component from './imports-buttons';
import getTrackerLoader from '../../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

function composer (props, onData ) {
  onData(null, {history:props.history});
}

const depsToPropsMapper = (context, actions) => ({
  context:context,
  importPhoneContacts:actions.importButton.importPhoneContacts
});

export default merge(
  compose(getTrackerLoader(composer)),
  useDeps(depsToPropsMapper),
)(Component);
