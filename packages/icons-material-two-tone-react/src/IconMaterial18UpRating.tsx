import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial18UpRating = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='18UpRating'

      short_name='18UpRating'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="1.5" opacity=".3" width="1.5" x="13" y="10"/><rect height="1.5" opacity=".3" width="1.5" x="13" y="12.5"/><path d="M5,19h14V5H5V19z M11.5,10c0-0.55,0.45-1,1-1H15c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1h-2.5 c-0.55,0-1-0.45-1-1V10z M7,9h3v6H8.5v-4.5H7V9z" opacity=".3"/><polygon points="8.5,15 10,15 10,9 7,9 7,10.5 8.5,10.5"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><path d="M12.5,15H15c0.55,0,1-0.45,1-1v-4c0-0.55-0.45-1-1-1h-2.5c-0.55,0-1,0.45-1,1v4C11.5,14.55,11.95,15,12.5,15z M13,10h1.5 v1.5H13V10z M13,12.5h1.5V14H13V12.5z"/></g></g>
    </Icon>
  );
});

IconMaterial18UpRating.displayName = 'OnesyIconMaterial18UpRating';

export default IconMaterial18UpRating;
