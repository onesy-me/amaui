import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffW100'

      short_name='ReportOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.9 16.1-.55-.55.65-.65V9.1L14.9 5H9.1l-.65.65-.5-.5.4-.4q.2-.2.488-.325.287-.125.587-.125h5.15q.3 0 .588.125.287.125.487.325l3.6 3.6q.2.2.325.487.125.288.125.588v5.2q0 .275-.087.537-.088.263-.288.463Zm-6.55-6.55v-1.7q0-.15-.1-.25T12 7.5q-.15 0-.25.1t-.1.25v1ZM9.425 19.7q-.3 0-.587-.125-.288-.125-.488-.325l-3.6-3.6q-.2-.2-.325-.488-.125-.287-.125-.587v-5.15q0-.3.125-.588.125-.287.325-.487l1.3-1.3-3.225-3.225q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l17.325 17.325q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-3.2-3.2-1.3 1.3q-.2.2-.487.325-.288.125-.588.125Zm3.975-9.1ZM12 16.25q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15ZM9.1 19h5.8l1.55-1.55-9.9-9.9L5 9.1v5.8Zm2.4-6.5Z"/>
    </Icon>
  );
});

IconMaterialReportOffW100.displayName = 'AmauiIconMaterialReportOffW100';

export default IconMaterialReportOffW100;
