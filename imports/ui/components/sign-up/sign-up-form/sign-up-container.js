import {compose, merge} from 'react-komposer';
import SignUpForm from './sign-up-form';
import getTrackerLoader from '../../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

function composer (props, onData ) {
  console.log(props);
  onData(null, {history:props.history});
}

const depsToPropsMapper = (context, actions) => ({
  context:context,
  register:actions.signUp.register
});

export default merge(
  compose(getTrackerLoader(composer)),
  useDeps(depsToPropsMapper),
)(SignUpForm);
