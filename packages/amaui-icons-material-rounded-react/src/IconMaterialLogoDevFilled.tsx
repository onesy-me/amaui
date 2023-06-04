import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLogoDevFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoDevFilled'

      short_name='LogoDev'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 15h1.9q.575 0 .862-.288.288-.287.288-.862v-3.7q0-.575-.288-.863Q8.975 9 8.4 9H6.5q-.2 0-.35.15Q6 9.3 6 9.5v5q0 .2.15.35.15.15.35.15Zm4.375 0h1.875q.25 0 .413-.163.162-.162.162-.412 0-.25-.162-.413-.163-.162-.413-.162h-1.475v-1.3H12q.25 0 .413-.163.162-.162.162-.412 0-.25-.162-.413Q12.25 11.4 12 11.4h-.725v-1.25h1.475q.25 0 .413-.163.162-.162.162-.412 0-.25-.162-.413Q13 9 12.75 9h-1.875q-.3 0-.525.225-.225.225-.225.525v4.5q0 .3.225.525.225.225.525.225Zm5.15-.025q.25 0 .5-.163.25-.162.375-.587l1.2-4.5q.075-.325-.1-.525t-.45-.2q-.2 0-.362.113-.163.112-.213.312l-.95 3.675-.95-3.675q-.05-.2-.212-.312Q14.7 9 14.5 9q-.275 0-.45.225t-.1.5l1.2 4.5q.125.425.4.587.275.163.475.163ZM7.15 13.85v-3.7H8.4v3.7ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialLogoDevFilled.displayName = 'AmauiIconMaterialLogoDevFilled';

export default IconMaterialLogoDevFilled;
