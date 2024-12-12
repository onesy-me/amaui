import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistAddCheckCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheckCircle'

      short_name='PlaylistAddCheckCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m562-338-28-28q-12-12-28.5-12.5T477-367q-12 12-12 28.5t12 28.5l57 57q12 12 28 12t28-12l143-143q12-12 11.5-28T732-452q-12-11-28-11.5T676-452L562-338Zm-242-22h40q17 0 28.5-11.5T400-400q0-17-11.5-28.5T360-440h-40q-17 0-28.5 11.5T280-400q0 17 11.5 28.5T320-360Zm0-120h200q17 0 28.5-11.5T560-520q0-17-11.5-28.5T520-560H320q-17 0-28.5 11.5T280-520q0 17 11.5 28.5T320-480Zm0-120h200q17 0 28.5-11.5T560-640q0-17-11.5-28.5T520-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheckCircle.displayName = 'OnesyIconMaterialPlaylistAddCheckCircle';

export default IconMaterialPlaylistAddCheckCircle;
