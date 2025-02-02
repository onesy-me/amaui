import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArticleShortcutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleShortcutFilled'

      short_name='ArticleShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-600h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 480q-17 0-28.5-11.5T400-160v-120h120q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360H400v-80h240q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H393v1q-13-35-43.5-58T280-600H160q-17 0-28.5-11.5T120-640v-120q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H440ZM265-80q-79 0-134.5-55.5T75-270q0-57 29.5-102t77.5-68h-62q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h160q17 0 28.5 11.5T320-480v160q0 17-11.5 28.5T280-280q-17 0-28.5-11.5T240-320v-57q-37 8-61 38t-24 69q0 46 32.5 78t77.5 32q17 0 28.5 11.5T305-120q0 17-11.5 28.5T265-80Z"/>
    </Icon>
  );
});

IconMaterialArticleShortcutFilled.displayName = 'OnesyIconMaterialArticleShortcutFilled';

export default IconMaterialArticleShortcutFilled;
