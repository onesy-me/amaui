import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicalServicesTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServicesTwoTone'
      short_name='MedicalServices'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g opacity=".3"><path d="M4,20h16V8H4V20z M8,13h3v-3h2v3h3v2h-3v3h-2v-3H8V13z"/></g><path d="M20,6h-4V4c0-1.1-0.9-2-2-2h-4C8.9,2,8,2.9,8,4v2H4C2.9,6,2,6.9,2,8v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8 C22,6.9,21.1,6,20,6z M10,4h4v2h-4V4z M20,20H4V8h16V20z"/><polygon points="11,18 13,18 13,15 16,15 16,13 13,13 13,10 11,10 11,13 8,13 8,15 11,15"/></g></g>
    </Icon>
  );
});

IconMaterialMedicalServicesTwoTone.displayName = 'AmauiIconMaterialMedicalServicesTwoTone';

export default IconMaterialMedicalServicesTwoTone;
