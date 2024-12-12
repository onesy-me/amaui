import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQueuePlayNext = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNext'

      short_name='QueuePlayNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m840-240-90-90q-13-13-13-30t13-30q13-13 30-13t30 13l122 122q12 12 12 28t-12 28L810-90q-13 13-30 13t-30-13q-13-13-13-30t13-30l90-90ZM360-120q-17 0-28.5-11.5T320-160v-40H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v240q0 17-11.5 28.5T840-480q-17 0-28.5-11.5T800-520v-240H160v480h480q17 0 28.5 11.5T680-240q0 17-11.5 28.5T640-200h-40v40q0 17-11.5 28.5T560-120H360Zm80-360v80q0 17 11.5 28.5T480-360q17 0 28.5-11.5T520-400v-80h80q17 0 28.5-11.5T640-520q0-17-11.5-28.5T600-560h-80v-80q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v80h-80q-17 0-28.5 11.5T320-520q0 17 11.5 28.5T360-480h80ZM160-280v-480 480Z"/>
    </Icon>
  );
});

IconMaterialQueuePlayNext.displayName = 'OnesyIconMaterialQueuePlayNext';

export default IconMaterialQueuePlayNext;
