import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataObjectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataObjectW100Filled'

      short_name='DataObject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 18.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.5q.675 0 1.163-.487.487-.488.487-1.163v-2.2q0-.8.488-1.425.487-.625 1.262-.825v-.1q-.775-.2-1.262-.825-.488-.625-.488-1.425V7.5q0-.675-.487-1.163-.488-.487-1.163-.487H15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.5q.975 0 1.663.687.687.688.687 1.663v2.2q0 .625.4 1.087.4.463 1 .588.15.05.25.15.1.1.1.225v.5q0 .125-.1.225t-.25.15q-.6.125-1 .587-.4.463-.4 1.088v2.2q0 .975-.687 1.663-.688.687-1.663.687Zm-7.5 0q-.975 0-1.662-.687-.688-.688-.688-1.663v-2.2q0-.625-.4-1.088-.4-.462-1-.587-.15-.05-.25-.15-.1-.1-.1-.225v-.5q0-.125.1-.225t.25-.15q.6-.125 1-.588.4-.462.4-1.087V7.5q0-.975.688-1.663.687-.687 1.662-.687H9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H7.5q-.675 0-1.162.487-.488.488-.488 1.163v2.2q0 .8-.487 1.425-.488.625-1.263.825v.1q.775.2 1.263.825.487.625.487 1.425v2.2q0 .675.488 1.163.487.487 1.162.487H9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDataObjectW100Filled.displayName = 'AmauiIconMaterialDataObjectW100Filled';

export default IconMaterialDataObjectW100Filled;
