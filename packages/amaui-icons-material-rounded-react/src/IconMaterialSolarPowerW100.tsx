import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSolarPowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPowerW100'

      short_name='SolarPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.925 18.875.875-4.4q.125-.525.525-.863.4-.337.95-.337H17.7q.55 0 .95.337.4.338.525.863l.875 4.4q.125.7-.312 1.237-.438.538-1.163.538H5.4q-.725 0-1.163-.538-.437-.537-.312-1.237Zm2.6-15.225q0 .15-.1.25t-.25.1H4.25Q4.1 4 4 3.9t-.1-.25q0-.15.1-.25t.25-.1h1.925q.15 0 .25.1t.1.25Zm-1.1 16.3h6.225v-2.6H4.975L4.65 19q-.075.375.162.663.238.287.613.287ZM7.575 7.1q.125.1.113.25-.013.15-.113.25L6.2 8.975q-.1.1-.237.1-.138 0-.238-.1-.125-.1-.112-.25.012-.15.112-.25L7.1 7.1q.1-.1.238-.1.137 0 .237.1Zm-2.45 9.55h6.525v-2.675H6.3q-.275 0-.5.187-.225.188-.275.463ZM12 7.025q-1.575 0-2.662-1.088Q8.25 4.85 8.25 3.275h.7q0 1.275.888 2.162.887.888 2.162.888t2.163-.888q.887-.887.887-2.162h.7q0 1.575-1.087 2.662Q13.575 7.025 12 7.025Zm0-3.75Zm0 5.35q.15 0 .25.1t.1.25V10.9q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V8.975q0-.15.1-.25t.25-.1Zm.35 11.325h6.2q.375 0 .613-.287.237-.288.162-.663L19 17.35h-6.65Zm0-3.3h6.5l-.4-2.025q-.05-.275-.275-.463-.225-.187-.5-.187H12.35Zm4.1-9.55q.1-.1.225-.1t.225.1l1.425 1.375q.125.1.125.237 0 .138-.125.263t-.25.125q-.125 0-.25-.125l-1.4-1.4q-.1-.1-.088-.238.013-.137.113-.237Zm3.65-3.45q0 .15-.1.25t-.25.1h-1.925q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.925q.15 0 .25.1t.1.25Z"/>
    </Icon>
  );
});

IconMaterialSolarPowerW100.displayName = 'AmauiIconMaterialSolarPowerW100';

export default IconMaterialSolarPowerW100;
