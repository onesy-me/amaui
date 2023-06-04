import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHistoryEduW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryEduW100Filled'

      short_name='HistoryEdu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 18.4q-.3 0-.5-.2t-.2-.5v-.95q0-.325.212-.538Q8.025 16 8.35 16h1.95v-3.55q-.975.275-2.037.038Q7.2 12.25 6.55 11.6v-1.5h-1.5L2.975 8.025q-.275-.275-.262-.55.012-.275.262-.425.6-.375 1.463-.687Q5.3 6.05 6.4 6.05q1.05 0 2.038.325.987.325 1.862 1V6.15q0-.325.213-.538.212-.212.537-.212h7.9q.325 0 .538.212.212.213.212.538V16.7q0 .725-.487 1.213-.488.487-1.213.487ZM11 16h5.3q.325 0 .512.188.188.187.188.512 0 .425.288.713.287.287.712.287t.712-.287Q19 17.125 19 16.7V6.1h-8V8l5.05 5.05q.175.175.238.262.062.088.062.188 0 .125-.112.238-.113.112-.238.112-.1 0-.2-.075t-.275-.25L12.75 10.75l-.675.675q-.275.275-.525.45T11 12.2ZM5.35 9.4h1.9v1.9q.575.35 1.05.475.475.125.9.125.725 0 1.313-.25.587-.25 1.087-.75l.65-.65L10.4 8.4q-.825-.825-1.85-1.238Q7.525 6.75 6.4 6.75q-.8 0-1.562.225-.763.225-1.338.575Z"/>
    </Icon>
  );
});

IconMaterialHistoryEduW100Filled.displayName = 'AmauiIconMaterialHistoryEduW100Filled';

export default IconMaterialHistoryEduW100Filled;
