import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyringe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Syringe'

      short_name='Syringe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M156-513q-11-12-11-28.5t11-28.5l112-112-43-43-12 12q-12 12-28.5 12T156-713q-11-11-11-28t11-28l80-80q12-12 28.5-12t28.5 12q11 11 11 28t-11 28l-12 12 43 43 112-112q12-12 28.5-12t28.5 12q12 12 12 28.5T493-793l-27 26 295 295q23 23 23 56.5T761-359l-28 29 155 154q10 10 5 22t-19 12h-41q-12 0-23.5-5T790-160L676-274l-28 29q-23 23-56.5 23T535-245L240-540l-27 27q-12 11-28.5 11T156-513Zm140-83 295 295 113-114-60-61-56 56q-12 11-28.5 11.5T532-419q-12-12-12-28.5t12-28.5l56-56-60-60-56 56q-12 11-28.5 11T415-536q-11-12-11-28.5t11-28.5l56-56-61-61-114 114Zm0 0 114-114-114 114Z"/>
    </Icon>
  );
});

IconMaterialSyringe.displayName = 'OnesyIconMaterialSyringe';

export default IconMaterialSyringe;
