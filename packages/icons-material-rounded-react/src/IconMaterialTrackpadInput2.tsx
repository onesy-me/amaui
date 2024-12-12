import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrackpadInput2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackpadInput2'

      short_name='TrackpadInput2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h600q33 0 56.5 23.5T840-760v120q0 17-11.5 28.5T800-600q-17 0-28.5-11.5T760-640v-120H160v480h72q17 0 28.5 11.5T272-240q0 17-11.5 28.5T232-200h-72Zm560-200v-80q0-17 11.5-28.5T760-520q17 0 28.5 11.5T800-480v80q0 17-11.5 28.5T760-360q-17 0-28.5-11.5T720-400Zm40 240H565h195ZM593-80q-24 0-46-9t-39-26L332-292q-11-11-11.5-27.5T331-348l6-6q14-14 34-19t40 0l69 20v-287q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v340q0 20-15.5 31.5T509-262l-47-13 103 103q6 6 13 9t15 3h167q33 0 56.5-23.5T840-240v-160q0-17 11.5-28.5T880-440q17 0 28.5 11.5T920-400v160q0 66-47 113T760-80H593Zm7-320v-280q0-17 11.5-28.5T640-720q17 0 28.5 11.5T680-680v280q0 17-11.5 28.5T640-360q-17 0-28.5-11.5T600-400Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInput2.displayName = 'OnesyIconMaterialTrackpadInput2';

export default IconMaterialTrackpadInput2;
