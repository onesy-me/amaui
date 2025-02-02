import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGeneratingTokensFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneratingTokensFilled'

      short_name='GeneratingTokens'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20q-3.35 0-5.675-2.325Q1 15.35 1 12q0-3.35 2.325-5.675Q5.65 4 9 4q3.35 0 5.675 2.325Q17 8.65 17 12q0 3.35-2.325 5.675Q12.35 20 9 20Zm-1-4.5h2v-5h2V9H6v1.5h2ZM19 9l-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75L23 5l-2.75 1.25Zm0 14-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75L23 19l-2.75 1.25Z"/>
    </Icon>
  );
});

IconMaterialGeneratingTokensFilled.displayName = 'OnesyIconMaterialGeneratingTokensFilled';

export default IconMaterialGeneratingTokensFilled;
