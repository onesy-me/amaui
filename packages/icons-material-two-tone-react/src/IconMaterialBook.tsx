import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBook = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book'

      short_name='Book'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="m13 13-3-2.25L7 13V4H6v16h12V4h-5z" opacity=".3"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"/>
    </Icon>
  );
});

IconMaterialBook.displayName = 'OnesyIconMaterialBook';

export default IconMaterialBook;
