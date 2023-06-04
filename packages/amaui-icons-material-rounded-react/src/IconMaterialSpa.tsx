import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpa = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spa'

      short_name='Spa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.2 21.875q-1.75-.325-3.4-1.125t-2.937-2.225Q3.575 17.1 2.788 15 2 12.9 2 10v-.2q0-.35.225-.575Q2.45 9 2.8 9H3q1.275 0 2.625.325t2.525.975q.275-1.85 1.1-3.8.825-1.95 1.975-3.525.3-.425.775-.425.475 0 .775.425Q13.925 4.55 14.75 6.5q.825 1.95 1.1 3.8 1.175-.65 2.525-.975Q19.725 9 21 9h.1q.375 0 .638.262.262.263.262.638v.1q0 2.9-.788 5-.787 2.1-2.074 3.525Q17.85 19.95 16.2 20.75q-1.65.8-3.4 1.125-.325.05-.8.05-.475 0-.8-.05Zm.75-1.925q-.275-4.125-2.487-6.262Q7.25 11.55 4.05 11.05q-.05 0 0 0 .275 4.225 2.563 6.35 2.287 2.125 5.337 2.55.05.025 0 .012-.05-.012 0-.012Zm-1.9-8.5q.5.425 1.05 1.012.55.588.9 1.138.375-.55.913-1.138.537-.587 1.037-1.012-.05-1.425-.563-2.975Q12.875 6.925 12 5.45v.012-.012q-.875 1.475-1.387 3.025-.513 1.55-.563 2.975Zm3.05 4.25q.3.8.513 1.75.212.95.337 2.05.9-.3 1.9-.9 1-.6 1.85-1.6.85-1 1.475-2.463.625-1.462.775-3.487 0-.05 0 0-2.35.35-4.125 1.562Q14.05 13.825 13.1 15.7Z"/>
    </Icon>
  );
});

IconMaterialSpa.displayName = 'AmauiIconMaterialSpa';

export default IconMaterialSpa;
