import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPsychologyAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychologyAlt'

      short_name='PsychologyAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.525 14q.325 0 .537-.213.213-.212.213-.537 0-.325-.213-.538-.212-.212-.537-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM12 11.75h1.05q0-.4.05-.588.05-.187.225-.387.125-.15.263-.287.137-.138.312-.338.35-.375.487-.688.138-.312.138-.662 0-.8-.537-1.3-.538-.5-1.413-.5-.725 0-1.287.387-.563.388-.788 1.063l.975.4q.125-.425.413-.65.287-.225.662-.225.4 0 .663.25.262.25.262.625 0 .225-.125.437-.125.213-.375.463-.175.175-.35.325-.175.15-.325.35-.225.325-.262.65Q12 11.4 12 11.75ZM10 21q-.425 0-.712-.288Q9 20.425 9 20v-2H8q-.825 0-1.412-.587Q6 16.825 6 16v-2H5q-.6 0-.862-.5-.263-.5.012-1L6.125 9q.2-2.5 2.2-4.25T13 3q2.9 0 4.95 2.05Q20 7.1 20 10q0 2.125-1.112 3.8-1.113 1.675-2.888 2.55V20q0 .425-.287.712Q15.425 21 15 21Zm1-2h3v-3.95l.9-.4q1.35-.6 2.225-1.838Q18 11.575 18 10q0-2.075-1.462-3.537Q15.075 5 13 5q-2 0-3.438 1.338Q8.125 7.675 8 9.775L6.725 12H8v4h3Zm1.375-7Z"/>
    </Icon>
  );
});

IconMaterialPsychologyAlt.displayName = 'AmauiIconMaterialPsychologyAlt';

export default IconMaterialPsychologyAlt;
