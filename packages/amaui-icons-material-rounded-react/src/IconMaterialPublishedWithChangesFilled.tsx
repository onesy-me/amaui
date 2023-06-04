import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublishedWithChangesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishedWithChangesFilled'

      short_name='PublishedWithChanges'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.175 2.225q3.375.75 5.6 3.45Q22 8.375 22 12q0 2.275-.913 4.2-.912 1.925-2.487 3.3H20q.425 0 .712.288.288.287.288.712t-.288.712q-.287.288-.712.288h-4q-.425 0-.712-.288Q15 20.925 15 20.5v-4q0-.425.288-.713.287-.287.712-.287t.712.287q.288.288.288.713v1.725q1.375-1.125 2.188-2.725Q20 13.9 20 12q0-2.875-1.762-5.013Q16.475 4.85 13.8 4.225q-.35-.075-.575-.35Q13 3.6 13 3.25q0-.5.35-.825.35-.325.825-.2Zm-4.35 19.55q-3.375-.75-5.6-3.45Q2 15.625 2 12q0-2.275.913-4.2.912-1.925 2.487-3.3H4q-.425 0-.712-.288Q3 3.925 3 3.5t.288-.713Q3.575 2.5 4 2.5h4q.425 0 .713.287Q9 3.075 9 3.5v4q0 .425-.287.713Q8.425 8.5 8 8.5t-.713-.287Q7 7.925 7 7.5V5.775q-1.375 1.1-2.188 2.713Q4 10.1 4 12q0 2.875 1.763 5.012 1.762 2.138 4.437 2.763.35.075.575.35.225.275.225.625 0 .5-.35.825-.35.325-.825.2Zm.75-5.6q-.2 0-.375-.062-.175-.063-.325-.213L7.05 13.05q-.275-.275-.287-.688-.013-.412.287-.712.275-.275.7-.275.425 0 .7.275l2.125 2.125L15.55 8.8q.3-.3.7-.288.4.013.7.313.275.3.288.7.012.4-.288.7L11.275 15.9q-.15.15-.325.213-.175.062-.375.062Z"/>
    </Icon>
  );
});

IconMaterialPublishedWithChangesFilled.displayName = 'AmauiIconMaterialPublishedWithChangesFilled';

export default IconMaterialPublishedWithChangesFilled;
