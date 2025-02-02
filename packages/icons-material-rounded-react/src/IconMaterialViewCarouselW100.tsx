import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCarouselW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselW100'

      short_name='ViewCarousel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-395v-170q0-26 18.5-44.5T195-628q26 0 44.5 18.5T258-565v170q0 26-18.5 44.5T195-332q-26 0-44.5-18.5T132-395Zm246 143q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h204q26 0 43 17t17 43v336q0 26-17 43t-43 17H378Zm324-143v-170q0-26 18.5-44.5T765-628q26 0 44.5 18.5T828-565v170q0 26-18.5 44.5T765-332q-26 0-44.5-18.5T702-395ZM378-280h204q14 0 23-9t9-23v-336q0-14-9-23t-23-9H378q-14 0-23 9t-9 23v336q0 14 9 23t23 9Zm102-200Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselW100.displayName = 'OnesyIconMaterialViewCarouselW100';

export default IconMaterialViewCarouselW100;
