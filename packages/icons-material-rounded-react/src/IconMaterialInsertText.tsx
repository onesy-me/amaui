import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsertText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertText'

      short_name='InsertText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-560h-80q-17 0-28.5-11.5T320-600q0-17 11.5-28.5T360-640h240q17 0 28.5 11.5T640-600q0 17-11.5 28.5T600-560h-80v200q0 17-11.5 28.5T480-320q-17 0-28.5-11.5T440-360v-200ZM40-80v-160q0-17 11.5-28.5T80-280h40v-400H80q-17 0-28.5-11.5T40-720v-160q0-17 11.5-28.5T80-920h160q17 0 28.5 11.5T280-880v40h400v-40q0-17 11.5-28.5T720-920h160q17 0 28.5 11.5T920-880v160q0 17-11.5 28.5T880-680h-40v400h40q17 0 28.5 11.5T920-240v160q0 17-11.5 28.5T880-40H720q-17 0-28.5-11.5T680-80v-40H280v40q0 17-11.5 28.5T240-40H80q-17 0-28.5-11.5T40-80Zm240-120h400v-40q0-17 11.5-28.5T720-280h40v-400h-40q-17 0-28.5-11.5T680-720v-40H280v40q0 17-11.5 28.5T240-680h-40v400h40q17 0 28.5 11.5T280-240v40ZM120-760h80v-80h-80v80Zm640 0h80v-80h-80v80Zm0 640h80v-80h-80v80Zm-640 0h80v-80h-80v80Zm80-640Zm560 0Zm0 560Zm-560 0Z"/>
    </Icon>
  );
});

IconMaterialInsertText.displayName = 'OnesyIconMaterialInsertText';

export default IconMaterialInsertText;
