import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposurePlus2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus2'

      short_name='ExposurePlus2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17q-.425 0-.713-.288Q6 16.425 6 16v-2H4q-.425 0-.712-.288Q3 13.425 3 13t.288-.713Q3.575 12 4 12h2v-2q0-.425.287-.713Q6.575 9 7 9t.713.287Q8 9.575 8 10v2h2q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 14 10 14H8v2q0 .425-.287.712Q7.425 17 7 17Zm6.375 2q-.525 0-.9-.375t-.375-.9q0-.35.163-.75.162-.4.412-.65L17.1 11.8q.85-.85 1.175-1.45.325-.6.325-1.35 0-.725-.562-1.313-.563-.587-1.688-.587-.6 0-1.05.225-.45.225-.775.625t-.713.55q-.387.15-.762 0-.425-.175-.6-.6t.05-.775q.525-.875 1.5-1.5T16.4 5q2.075 0 3.238 1.188Q20.8 7.375 20.8 9q0 1.125-.525 2.05-.525.925-1.625 2.05L15 16.9l.05.1H20q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus2.displayName = 'AmauiIconMaterialExposurePlus2';

export default IconMaterialExposurePlus2;
