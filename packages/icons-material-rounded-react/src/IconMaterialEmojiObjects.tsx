import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiObjects = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiObjects'

      short_name='EmojiObjects'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-26 0-47-12.5T400-126q-33 0-56.5-23.5T320-206v-142q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v142q0 33-23.5 56.5T560-126q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm-8-118h58v-108l-67-67q-9-9-9-21t9-21q9-9 21-9t21 9l55 55 55-55q9-9 21-9t21 9q9 9 9 21t-9 21l-67 67v108h58q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-162Zm0-38Z"/>
    </Icon>
  );
});

IconMaterialEmojiObjects.displayName = 'OnesyIconMaterialEmojiObjects';

export default IconMaterialEmojiObjects;
