import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSalinityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SalinityFilled'

      short_name='Salinity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.425 0-5.712-2.35Q4 17.3 4 13.8h16q0 3.5-2.288 5.85Q15.425 22 12 22ZM5 12q-.425 0-.713-.288Q4 11.425 4 11t.287-.713Q4.575 10 5 10t.713.287Q6 10.575 6 11t-.287.712Q5.425 12 5 12Zm4.5 0q-.425 0-.712-.288Q8.5 11.425 8.5 11t.288-.713Q9.075 10 9.5 10t.713.287q.287.288.287.713t-.287.712Q9.925 12 9.5 12Zm5 0q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q14.075 10 14.5 10t.713.287q.287.288.287.713t-.287.712Q14.925 12 14.5 12Zm4.5 0q-.425 0-.712-.288Q18 11.425 18 11t.288-.713Q18.575 10 19 10t.712.287Q20 10.575 20 11t-.288.712Q19.425 12 19 12ZM7.25 9.25q-.425 0-.713-.288-.287-.287-.287-.712t.287-.713q.288-.287.713-.287t.713.287q.287.288.287.713t-.287.712q-.288.288-.713.288Zm9.5 0q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713q.287-.287.712-.287t.712.287q.288.288.288.713t-.288.712q-.287.288-.712.288ZM12 9q-.425 0-.712-.288Q11 8.425 11 8t.288-.713Q11.575 7 12 7t.713.287Q13 7.575 13 8t-.287.712Q12.425 9 12 9ZM9.5 6.5q-.425 0-.712-.287Q8.5 5.925 8.5 5.5t.288-.713Q9.075 4.5 9.5 4.5t.713.287q.287.288.287.713t-.287.713Q9.925 6.5 9.5 6.5Zm5 0q-.425 0-.712-.287-.288-.288-.288-.713t.288-.713q.287-.287.712-.287t.713.287q.287.288.287.713t-.287.713q-.288.287-.713.287ZM12 4q-.425 0-.712-.288Q11 3.425 11 3t.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3t-.287.712Q12.425 4 12 4Z"/>
    </Icon>
  );
});

IconMaterialSalinityFilled.displayName = 'AmauiIconMaterialSalinityFilled';

export default IconMaterialSalinityFilled;
