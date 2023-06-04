import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial19mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='19mp'

      short_name='19mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,19h14V5H5V19z M18,13.5V16c0,0.55-0.45,1-1,1h-2v1.5h-1.5v-6H17C17.55,12.5,18,12.95,18,13.5z M12,10h3 V9h-2c-0.55,0-1-0.45-1-1V6.5c0-0.55,0.45-1,1-1h2.5c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H12V10z M7,5.5h3v6H8.5V7H7V5.5z M6,13.5c0-0.55,0.45-1,1-1h4.5c0.55,0,1,0.45,1,1v5H11V14h-1v3H8.5v-3h-1v4.5H6V13.5z" opacity=".3"/><rect height="1.5" opacity=".3" width="1.5" x="13.5" y="6.5"/><rect height="1.5" opacity=".3" width="1.5" x="15" y="14"/><path d="M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z"/><path d="M13.5,18.5H15V17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1h-3.5V18.5z M15,14h1.5v1.5H15V14z"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/><path d="M16.5,10.5v-4c0-0.55-0.45-1-1-1H13c-0.55,0-1,0.45-1,1V8c0,0.55,0.45,1,1,1h2v1h-3v1.5h3.5 C16.05,11.5,16.5,11.05,16.5,10.5z M15,8h-1.5V6.5H15V8z"/><polygon points="8.5,11.5 10,11.5 10,5.5 7,5.5 7,7 8.5,7"/></g></g>
    </Icon>
  );
});

IconMaterial19mp.displayName = 'AmauiIconMaterial19mp';

export default IconMaterial19mp;
