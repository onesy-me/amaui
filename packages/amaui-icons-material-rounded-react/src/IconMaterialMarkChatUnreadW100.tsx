import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkChatUnreadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadW100'

      short_name='MarkChatUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.1 16.7-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h9.95q-.05.175-.062.337-.013.163-.038.363H4.8q-.35 0-.575.225Q4 4.45 4 4.8v13L5.8 16h13.4q.35 0 .575-.225Q20 15.55 20 15.2V8.475q.2-.05.363-.1.162-.05.337-.125v6.95q0 .65-.425 1.075-.425.425-1.075.425ZM4 4.8v13V4 4.8Zm15 1.8q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663Q18.025 1.9 19 1.9q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662Q19.975 6.6 19 6.6Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnreadW100.displayName = 'AmauiIconMaterialMarkChatUnreadW100';

export default IconMaterialMarkChatUnreadW100;
