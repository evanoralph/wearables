import {compose, merge} from 'react-komposer';
import SocialMediaLogin from './social-media-login';
import getTrackerLoader from '../../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

function composer (props, onData ) {
  onData(null, {});
}

const depsToPropsMapper = (context, actions) => ({
  context:context,
  loginWithFacebook:actions.login.loginWithFacebook,
  userLoginGoogle:actions.login.userLoginGoogle
});

export default merge(
  compose(getTrackerLoader(composer)),
  useDeps(depsToPropsMapper),
)(SocialMediaLogin);
