import {compose, merge} from 'react-komposer';
import SocialMediaButtons from './social-medial-buttons';
import getTrackerLoader from '../../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

function composer (props, onData ) {
  onData(null, {});
}

const depsToPropsMapper = (context, actions) => ({
  context:context,
  register:actions.signUp.register,
  loginWithFacebook:actions.signUp.loginWithFacebook,
  userLoginGoogle:actions.signUp.userLoginGoogle,
});

export default merge(
  compose(getTrackerLoader(composer)),
  useDeps(depsToPropsMapper),
)(SocialMediaButtons);
