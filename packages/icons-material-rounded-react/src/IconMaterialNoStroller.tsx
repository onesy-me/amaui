import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoStroller = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoStroller'

      short_name='NoStroller'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160q0-33 23.5-56.5T240-240q33 0 56.5 23.5T320-160q0 33-23.5 56.5T240-80Zm600-585q-17 0-28.5-11.5T800-705v-1q0-23-15.5-38.5T746-760q-10 0-19 4t-16 12l-31 35v220q0 20-12.5 30T640-449q-15 0-27.5-10.5T600-490v-124l-36 43q-11 14-28.5 14.5T505-568q-11-11-12-26.5t10-27.5l145-171q20-23 45-35t53-12q56 0 95 39t39 95v1q0 17-11.5 28.5T840-665ZM600-360l56 56q-11 11-25 17.5t-31 6.5H297q-26 0-36.5-23t6.5-43l108-127L84-763q-12-11-11.5-27.5T84-819q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28T819-84q-12 11-28 11.5T763-84L431-416l-47 56h216Zm40 280q-33 0-56.5-23.5T560-160q0-33 23.5-56.5T640-240q33 0 56.5 23.5T720-160q0 33-23.5 56.5T640-80ZM431-416Zm105-122Zm-6-209-66 77q-11 14-28.5 14.5T405-668q-11-11-12-26.5t10-27.5l31-36q-8-2-17-2h-17q-20 0-38.5 3t-37.5 8q-16 5-30.5-3.5T274-777q-5-16 3.5-30.5T302-827q24-7 48.5-10t49.5-3q29 0 57.5 4.5T513-822q23 8 28.5 31.5T530-747Zm-151 53Z"/>
    </Icon>
  );
});

IconMaterialNoStroller.displayName = 'OnesyIconMaterialNoStroller';

export default IconMaterialNoStroller;
