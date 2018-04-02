import RenderAuthorized from 'components/Authorized';
import { getAuthority } from './authority';
import router from 'umi/router';

let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getAuthority());
};

Authorized.grant = (authority) => {
  if (!Authorized.check(authority, true, false) ) {
    router.push('/403');
  }
}

export { reloadAuthorized };
export default Authorized;
