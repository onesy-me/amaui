import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSuperscriptTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SuperscriptTwoTone'
      short_name='Superscript'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" x="0" y="0"/><path d="M22,7h-2v1h3v1h-4V7c0-0.55,0.45-1,1-1h2V5h-3V4h3c0.55,0,1,0.45,1,1v1C23,6.55,22.55,7,22,7z M5.88,20h2.66l3.4-5.42h0.12 l3.4,5.42h2.66l-4.65-7.27L17.81,6h-2.68l-3.07,4.99h-0.12L8.85,6H6.19l4.32,6.73L5.88,20z"/></g>
    </Icon>
  );
});

export default IconMaterialSuperscriptTwoTone;
