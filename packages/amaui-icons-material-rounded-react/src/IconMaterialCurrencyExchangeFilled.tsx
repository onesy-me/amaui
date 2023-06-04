import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyExchangeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyExchangeFilled'

      short_name='CurrencyExchange'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 23q-2.8 0-5.15-1.275Q4.5 20.45 3 18.325V20q0 .425-.287.712Q2.425 21 2 21t-.712-.288Q1 20.425 1 20v-4q0-.425.288-.713Q1.575 15 2 15h4q.425 0 .713.287Q7 15.575 7 16t-.287.712Q6.425 17 6 17H4.525q1.2 1.8 3.163 2.9Q9.65 21 12 21q3.5 0 6.038-2.3 2.537-2.3 2.912-5.7.05-.425.338-.713Q21.575 12 22 12t.712.3q.288.3.238.7-.175 2.1-1.112 3.925-.938 1.825-2.4 3.175-1.463 1.35-3.376 2.125Q14.15 23 12 23ZM2 12q-.425 0-.712-.3Q1 11.4 1.05 11q.2-2.1 1.125-3.925Q3.1 5.25 4.562 3.9q1.463-1.35 3.376-2.125Q9.85 1 12 1q2.8 0 5.15 1.275Q19.5 3.55 21 5.675V4q0-.425.288-.713Q21.575 3 22 3t.712.287Q23 3.575 23 4v4q0 .425-.288.712Q22.425 9 22 9h-4q-.425 0-.712-.288Q17 8.425 17 8t.288-.713Q17.575 7 18 7h1.475q-1.2-1.8-3.163-2.9Q14.35 3 12 3 8.5 3 5.963 5.3 3.425 7.6 3.05 11q-.05.425-.337.712Q2.425 12 2 12Zm9.975 7q-.35 0-.612-.262-.263-.263-.263-.613V17.7q-.95-.2-1.625-.738-.675-.537-1.075-1.387-.15-.325.013-.675.162-.35.512-.475.325-.125.65 0t.525.475q.35.625.875.937.525.313 1.175.313.825 0 1.412-.388.588-.387.588-1.212 0-.725-.612-1.175-.613-.45-2.188-1.025-1.475-.525-2.162-1.25-.688-.725-.688-1.9 0-1.025.7-1.85.7-.825 1.95-1.1v-.375q0-.35.263-.613.262-.262.612-.262t.612.262q.263.263.263.613v.375q.675.05 1.263.45.587.4.987.975.2.3.063.662-.138.363-.513.513-.275.125-.587.013-.313-.113-.563-.413-.25-.3-.625-.475T12.05 7.8q-.875 0-1.337.375-.463.375-.463 1.025 0 .65.575 1.025.575.375 2.075.875 1.8.65 2.4 1.525.6.875.6 1.925 0 1.475-.9 2.225t-2.15.975v.375q0 .35-.262.613-.263.262-.613.262Z"/>
    </Icon>
  );
});

IconMaterialCurrencyExchangeFilled.displayName = 'AmauiIconMaterialCurrencyExchangeFilled';

export default IconMaterialCurrencyExchangeFilled;
