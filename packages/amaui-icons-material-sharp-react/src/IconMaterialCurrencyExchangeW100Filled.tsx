import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyExchangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyExchangeW100Filled'

      short_name='CurrencyExchange'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.7q-3.125 0-5.562-1.725Q4 18.25 2.875 15.325V18.8h-.7v-4.7h4.7v.7H3.45q.9 2.8 3.275 4.5Q9.1 21 12 21q1.775 0 3.338-.625 1.562-.625 2.762-1.738 1.2-1.112 1.962-2.65.763-1.537.913-3.337h.7q-.125 1.9-.937 3.55-.813 1.65-2.1 2.875-1.288 1.225-3 1.925-1.713.7-3.638.7Zm-.4-3.2v-1.2q-.975-.225-1.687-.75-.713-.525-1.163-1.5l.65-.3q.45.9 1.162 1.4.713.5 1.588.5.9 0 1.725-.488.825-.487.825-1.612 0-.875-.537-1.362Q13.625 12.7 12 12.1q-1.65-.6-2.325-1.225Q9 10.25 9 9.2q0-.875.675-1.625t1.975-.925V5.5h.75v1.15q.75.05 1.412.487.663.438 1.038 1.113l-.65.25q-.35-.525-.875-.863Q12.8 7.3 12.05 7.3q-1.025 0-1.663.55-.637.55-.637 1.35t.425 1.225q.425.425 2.125 1.025 1.8.65 2.45 1.35.65.7.65 1.75 0 .7-.287 1.225-.288.525-.738.863-.45.337-.987.512-.538.175-1.038.2v1.15Zm-9.275-7.15Q2.5 9.325 3.337 7.662 4.175 6 5.488 4.8 6.8 3.6 8.475 2.95 10.15 2.3 12 2.3q3.05 0 5.562 1.737 2.513 1.738 3.563 4.738V5.2h.7v4.7h-4.7v-.7h3.425q-.825-2.7-3.212-4.45Q14.95 3 12 3q-1.675 0-3.225.6T6 5.287Q4.775 6.375 3.975 7.912q-.8 1.538-.95 3.438Z"/>
    </Icon>
  );
});

IconMaterialCurrencyExchangeW100Filled.displayName = 'AmauiIconMaterialCurrencyExchangeW100Filled';

export default IconMaterialCurrencyExchangeW100Filled;
