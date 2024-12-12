import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAstrophotographyOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AstrophotographyOffFilled'

      short_name='AstrophotographyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 9-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75L23 5l-2.75 1.25Zm.775 13.6L1.4 4.225 2.8 2.8l4.65 4.65L9 4l2.5 5.5L17 12l-3.45 1.55 4.2 4.2L19 15l1.25 2.75L23 19l-2.75 1.25.925.95ZM9 20l-2.5-5.5L1 12l3.675-1.675 6 6Z"/>
    </Icon>
  );
});

IconMaterialAstrophotographyOffFilled.displayName = 'OnesyIconMaterialAstrophotographyOffFilled';

export default IconMaterialAstrophotographyOffFilled;
