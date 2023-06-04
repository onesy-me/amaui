import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCycleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CycleW100Filled'

      short_name='Cycle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.625 18.35q-2.725-.775-4.512-3.063Q3.325 13 3.325 10q0-.825.15-1.637.15-.813.475-1.588L1.475 8.2l-.325-.6 3.625-2.1 2.1 3.625-.6.375-1.55-2.675q-.35.75-.512 1.562-.163.813-.163 1.638 0 2.775 1.688 4.9 1.687 2.125 4.262 2.8Zm5.5-12.65V5h3.05q-1.125-1.425-2.75-2.188Q13.8 2.05 12 2.05q-1.65 0-3.075.612-1.425.613-2.5 1.688L6.05 3.7q1.175-1.1 2.688-1.725 1.512-.625 3.237-.625 1.95 0 3.675.8 1.725.8 2.975 2.3V1.5h.7v4.2Zm.375 14.875-3.625-2.125 2.1-3.6.6.35-1.6 2.725q2.975-.375 4.975-2.625 2-2.25 2-5.275 0-.6-.087-1.188-.088-.587-.263-1.137h.75q.15.55.225 1.125.075.575.075 1.175 0 3.225-2.062 5.637-2.063 2.413-5.213 2.913l2.475 1.425Z"/>
    </Icon>
  );
});

IconMaterialCycleW100Filled.displayName = 'AmauiIconMaterialCycleW100Filled';

export default IconMaterialCycleW100Filled;
