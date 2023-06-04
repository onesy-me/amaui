import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknownDocument = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownDocument'

      short_name='UnknownDocument'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 256v640-640 200-200Zm80 400h147q11-22 25.5-42.5T484 576H280v80Zm0 160h122q-2-20-2-40t2-40H280v80ZM120 976V176h400l240 240v92q-20-5-40-8.5t-40-3.5v-40H480V256H200v640h227q11 23 25.5 43t31.5 37H120Zm560-400q83 0 141.5 58.5T880 776q0 83-58.5 141.5T680 976q-83 0-141.5-58.5T480 776q0-83 58.5-141.5T680 576Zm0 320q11 0 18.5-7.5T706 870q0-11-7.5-18.5T680 844q-11 0-18.5 7.5T654 870q0 11 7.5 18.5T680 896Zm-18-76h36v-10q0-11 6-19.5t14-16.5q14-12 22-23t8-31q0-29-19-46.5T680 656q-23 0-41.5 13.5T612 706l32 14q3-12 12.5-21t23.5-9q15 0 23.5 7.5T712 720q0 11-6 18.5T692 754q-6 6-12.5 12T668 780q-3 6-4.5 12t-1.5 14v14Z"/>
    </Icon>
  );
});

IconMaterialUnknownDocument.displayName = 'AmauiIconMaterialUnknownDocument';

export default IconMaterialUnknownDocument;
