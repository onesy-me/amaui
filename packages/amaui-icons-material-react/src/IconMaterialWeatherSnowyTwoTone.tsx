import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeatherSnowyTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherSnowyTwoTone'
      short_name='WeatherSnowy'

      {...props}
    >
      <path d="M6.5 19q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.888.363q.362.362.362.887t-.362.887Q7.025 19 6.5 19Zm3 3q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887Q10.025 22 9.5 22Zm3-3q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887Q13.025 19 12.5 19Zm6 0q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.888.363q.362.362.362.887t-.362.887Q19.025 19 18.5 19Zm-3 3q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.888.363q.362.362.362.887t-.362.887Q16.025 22 15.5 22Zm-8-7q-2.275 0-3.887-1.613Q2 11.775 2 9.5q0-2.075 1.375-3.625 1.375-1.55 3.4-1.825.8-1.425 2.188-2.238Q10.35 1 12 1q2.25 0 3.912 1.438 1.663 1.437 2.013 3.587 1.725.15 2.9 1.425Q22 8.725 22 10.5q0 1.875-1.312 3.188Q19.375 15 17.5 15Zm0-2h10q1.05 0 1.775-.725Q20 11.55 20 10.5q0-1.05-.725-1.775Q18.55 8 17.5 8H16V7q0-1.65-1.175-2.825Q13.65 3 12 3q-1.2 0-2.188.65-.987.65-1.487 1.75l-.25.6H7.45q-1.425.05-2.437 1.062Q4 8.075 4 9.5q0 1.45 1.025 2.475Q6.05 13 7.5 13ZM12 8Z"/>
    </Icon>
  );
});

export default IconMaterialWeatherSnowyTwoTone;
