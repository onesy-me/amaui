import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirwave = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Airwave'

      short_name='Airwave'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.75 8.65q-.675.675-1.55 1.025-.875.35-1.75.35t-1.725-.337q-.85-.338-1.525-1.038l-1.875-1.875q-.375-.375-.85-.563Q9 6.025 8.5 6.025t-.975.187q-.475.188-.85.563l-1.15 1.15q-.3.3-.713.3-.412 0-.712-.3t-.3-.712q0-.413.3-.713l1.15-1.15q.675-.675 1.525-1.013Q7.625 4 8.5 4q.875 0 1.713.337.837.338 1.512 1.013L13.6 7.225q.4.4.875.587.475.188.975.188t.988-.188q.487-.187.887-.587L18.5 6.05q.3-.3.712-.3.413 0 .713.3t.3.712q0 .413-.3.713Zm0 5q-.675.675-1.538 1.012-.862.338-1.737.338-.875 0-1.737-.338-.863-.337-1.538-1.012l-1.875-1.875q-.375-.375-.85-.563-.475-.187-.975-.187t-.975.187q-.475.188-.85.563L5.5 12.95q-.275.275-.7.275-.425 0-.725-.275-.275-.3-.275-.725t.275-.7L5.25 10.35q.675-.675 1.525-1.013Q7.625 9 8.5 9q.875 0 1.713.337.837.338 1.512 1.013l1.875 1.875q.4.4.875.587.475.188.975.188t.988-.188q.487-.187.887-.587L18.5 11.05q.3-.3.712-.3.413 0 .713.3t.3.712q0 .413-.3.713Zm-.025 5q-.675.675-1.525 1.013-.85.337-1.725.337-.875 0-1.737-.337-.863-.338-1.538-1.013l-1.9-1.875q-.375-.375-.85-.563-.475-.187-.975-.187t-.975.187q-.475.188-.85.563l-1.15 1.15q-.3.3-.713.3-.412 0-.712-.3-.275-.275-.275-.7 0-.425.275-.7L5.25 15.35q.675-.675 1.525-1.013Q7.625 14 8.5 14q.875 0 1.713.337.837.338 1.512 1.013l1.875 1.875q.4.4.888.587.487.188.987.188t.975-.188q.475-.187.875-.587L18.5 16.05q.275-.275.7-.275.425 0 .7.275.3.3.3.713 0 .412-.3.712Z"/>
    </Icon>
  );
});

IconMaterialAirwave.displayName = 'AmauiIconMaterialAirwave';

export default IconMaterialAirwave;
