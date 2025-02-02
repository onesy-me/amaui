import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTotalDissolvedSolidsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TotalDissolvedSolidsFilled'

      short_name='TotalDissolvedSolids'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-488q25-87 101.5-184.5T480-880q130 110 206.5 207.5T788-488H172Zm622 146q-9 49-31.5 92.5T705-171q-35 35-78.5 57T535-84l259-258Zm-163-66h114L421-84q-23-5-44.5-11.5T335-113l296-295Zm-229 0h114L267-159q-15-14-28.5-29T214-220l188-188Zm-230 0h114L176-298q-8-27-9.5-55t5.5-55Z"/>
    </Icon>
  );
});

IconMaterialTotalDissolvedSolidsFilled.displayName = 'OnesyIconMaterialTotalDissolvedSolidsFilled';

export default IconMaterialTotalDissolvedSolidsFilled;
