import Anchor from './src/anchor.mjs';
import AnchorLink from './src/anchor-link.mjs';
export { anchorEmits, anchorProps } from './src/anchor2.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install.mjs';

const ElAnchor = withInstall(Anchor, {
  AnchorLink
});
const ElAnchorLink = withNoopInstall(AnchorLink);

export { ElAnchor, ElAnchorLink, ElAnchor as default };
//# sourceMappingURL=index.mjs.map
