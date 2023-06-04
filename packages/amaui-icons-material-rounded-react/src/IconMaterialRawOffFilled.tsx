import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRawOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOffFilled'

      short_name='RawOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.325 14.275-.575-2.325-.6 2.35v.012-.012l-2.425-2.4-.5-2q-.1-.375.113-.638Q14.55 9 14.95 9q.225 0 .425.162.2.163.25.363L16.25 12l.575-2.275q.075-.3.338-.513Q17.425 9 17.75 9q.3 0 .575.212.275.213.35.513L19.25 12l.625-2.475q.05-.2.25-.363.2-.162.45-.162.375 0 .588.262.212.263.112.638l-1.1 4.375q-.075.3-.337.512-.263.213-.588.213-.3 0-.575-.213-.275-.212-.35-.512Zm-12 .35L5.6 13H4.5v1.25q0 .325-.213.537Q4.075 15 3.75 15q-.325 0-.537-.213Q3 14.575 3 14.25V10q0-.425.288-.713Q3.575 9 4 9h2.5q.6 0 1.05.45Q8 9.9 8 10.5v1q0 .45-.237.812-.238.363-.663.588l.475 1.125q.175.425-.013.7-.187.275-.637.275-.175 0-.35-.113-.175-.112-.25-.262ZM4.5 11.5h2v-1h-2Zm15.3 11.1L1.4 4.2l1.4-1.4 18.4 18.4ZM9 14.075l.8-3.275L11 12l1.5 1.5h-1.85l-.25 1q-.05.2-.25.35-.2.15-.425.15-.4 0-.612-.275-.213-.275-.113-.65Z"/>
    </Icon>
  );
});

IconMaterialRawOffFilled.displayName = 'AmauiIconMaterialRawOffFilled';

export default IconMaterialRawOffFilled;
