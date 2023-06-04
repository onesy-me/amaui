import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFingerprintFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FingerprintFilled'

      short_name='Fingerprint'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 2.025q1.6 0 3.125.387 1.525.388 2.95 1.113.225.1.263.287.037.188-.038.363t-.25.275q-.175.1-.425-.025-1.325-.675-2.738-1.038-1.412-.362-2.887-.362-1.45 0-2.85.337-1.4.338-2.675 1.063-.2.125-.387.062-.188-.062-.313-.262-.075-.2-.037-.363Q5.8 3.7 6 3.575q1.4-.75 2.925-1.15 1.525-.4 3.1-.4Zm0 2.45q2.65 0 5 1.137Q19.375 6.75 20.95 8.9q.15.225.1.4-.05.175-.2.3-.15.125-.35.112-.2-.012-.35-.212-1.375-1.95-3.537-2.988-2.163-1.037-4.588-1.037-2.425 0-4.55 1.037Q5.35 7.55 3.95 9.5q-.15.225-.35.25-.2.025-.35-.1-.175-.125-.225-.313-.05-.187.125-.387 1.525-2.125 3.875-3.3 2.35-1.175 5-1.175Zm0 4.775q2.325 0 4 1.562Q17.7 12.375 17.7 14.65q0 .225-.138.362-.137.138-.362.138-.2 0-.35-.138-.15-.137-.15-.362 0-1.875-1.388-3.138-1.387-1.262-3.287-1.262t-3.263 1.262Q7.4 12.775 7.4 14.65q0 2.025.7 3.437.7 1.413 2.05 2.838.15.15.15.35 0 .2-.15.35-.15.15-.35.15-.2 0-.35-.15-1.475-1.55-2.262-3.163Q6.4 16.85 6.4 14.65q0-2.275 1.65-3.838Q9.7 9.25 12.025 9.25ZM12 14.15q.225 0 .363.15.137.15.137.35 0 1.875 1.35 3.075 1.35 1.2 3.15 1.2.15 0 .425-.025t.575-.075q.225-.05.388.062.162.113.212.338.05.2-.075.35-.125.15-.325.2-.45.125-.787.138-.338.012-.413.012-2.225 0-3.863-1.5-1.637-1.5-1.637-3.775 0-.2.137-.35.138-.15.363-.15Zm.025-2.45q1.275 0 2.175.85.9.85.9 2.1 0 .825.625 1.388.625.562 1.475.562.85 0 1.45-.562.6-.563.6-1.388 0-2.9-2.125-4.875T12.05 7.8q-2.95 0-5.075 1.975t-2.125 4.85q0 .6.113 1.5.112.9.537 2.1.075.225-.012.4-.088.175-.288.25-.2.075-.388-.013-.187-.087-.262-.287-.375-.975-.537-1.938-.163-.962-.163-1.987 0-3.325 2.413-5.575 2.412-2.25 5.762-2.25 3.375 0 5.8 2.25t2.425 5.575q0 1.25-.887 2.088-.888.837-2.163.837t-2.187-.837Q14.1 15.9 14.1 14.65q0-.825-.612-1.388-.613-.562-1.463-.562-.85 0-1.463.562-.612.563-.612 1.388 0 2.425 1.438 4.05 1.437 1.625 3.712 2.275.225.1.3.262.075.163.025.363-.05.175-.2.3-.15.125-.375.075-2.6-.675-4.25-2.6T8.95 14.65q0-1.25.9-2.1.9-.85 2.175-.85Z"/>
    </Icon>
  );
});

IconMaterialFingerprintFilled.displayName = 'AmauiIconMaterialFingerprintFilled';

export default IconMaterialFingerprintFilled;
