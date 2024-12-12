import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebStories = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStories'

      short_name='WebStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-160v-640q33 0 56.5 23.5T760-720v480q0 33-23.5 56.5T680-160ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h360q33 0 56.5 23.5T600-800v640q0 33-23.5 56.5T520-80H160Zm680-160v-480q25 0 42.5 17.5T900-660v360q0 25-17.5 42.5T840-240Zm-680 80h360v-640H160v640Zm0-640v640-640Z"/>
    </Icon>
  );
});

IconMaterialWebStories.displayName = 'OnesyIconMaterialWebStories';

export default IconMaterialWebStories;
