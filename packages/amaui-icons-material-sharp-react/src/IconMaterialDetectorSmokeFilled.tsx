import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetectorSmokeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorSmokeFilled'

      short_name='DetectorSmoke'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.4 9h7.2l.3-1H8.1l.3 1ZM13 22.3l-1.9-.6.4-1.3q.05-.2.088-.4.037-.2.037-.4 0-.4-.087-.75-.088-.35-.338-.75-.425-.675-.612-1.25-.188-.575-.213-1.375 0-.325.05-.725.05-.4.175-.75l.4-1.3 1.9.6-.4 1.3q-.075.225-.1.437-.025.213-.025.438 0 .425.088.737.087.313.337.688.425.675.625 1.3t.2 1.4q0 .35-.05.7t-.175.7Zm-4.4 0-1.9-.6.4-1.3q.05-.2.088-.388.037-.187.037-.412 0-.425-.1-.788-.1-.362-.325-.712-.4-.575-.612-1.238-.213-.662-.213-1.387 0-.375.05-.75T6.2 14l.4-1.3 1.9.6-.4 1.3q-.075.225-.1.462-.025.238-.025.413 0 .475.113.813.112.337.312.612.425.6.625 1.288.2.687.2 1.412 0 .35-.05.7T9 21Zm8.7 0-1.9-.6.4-1.3q.05-.2.088-.4.037-.2.037-.4 0-.4-.1-.775T15.5 18.1q-.4-.575-.612-1.25-.213-.675-.213-1.375 0-.375.05-.737.05-.363.175-.738l.4-1.3 1.9.6-.4 1.3q-.075.275-.1.462-.025.188-.025.413 0 .425.1.75t.325.675q.425.625.625 1.3t.2 1.4q0 .35-.05.7t-.175.7ZM8.4 11q-.65 0-1.175-.387Q6.7 10.225 6.5 9.6L6 8H5q-.825 0-1.413-.588Q3 6.825 3 6V3h18v3q0 .825-.587 1.412Q19.825 8 19 8h-1l-.65 1.7q-.225.575-.725.937-.5.363-1.125.363Z"/>
    </Icon>
  );
});

IconMaterialDetectorSmokeFilled.displayName = 'AmauiIconMaterialDetectorSmokeFilled';

export default IconMaterialDetectorSmokeFilled;
