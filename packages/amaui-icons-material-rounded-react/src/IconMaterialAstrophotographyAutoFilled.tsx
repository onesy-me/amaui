import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAstrophotographyAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AstrophotographyAutoFilled'

      short_name='AstrophotographyAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 9-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75L23 5l-2.75 1.25Zm0 14-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75L23 19l-2.75 1.25ZM4.8 16 8 7h2l3.2 9h-1.9l-.7-2H7.4l-.7 2Zm3.05-3.35h2.3L9 9ZM9 18q2.5 0 4.25-1.75T15 12q0-2.5-1.75-4.25T9 6Q6.5 6 4.75 7.75T3 12q0 2.5 1.75 4.25T9 18Zm0 2q-3.35 0-5.675-2.325Q1 15.35 1 12q0-3.35 2.325-5.675Q5.65 4 9 4q3.35 0 5.675 2.325Q17 8.65 17 12q0 3.35-2.325 5.675Q12.35 20 9 20Z"/>
    </Icon>
  );
});

IconMaterialAstrophotographyAutoFilled.displayName = 'AmauiIconMaterialAstrophotographyAutoFilled';

export default IconMaterialAstrophotographyAutoFilled;
