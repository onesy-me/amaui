import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStorefront = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Storefront'

      short_name='Storefront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.025 21q-.825 0-1.412-.587-.588-.588-.588-1.413v-7.95q-.575-.525-.887-1.35-.313-.825-.013-1.8l1.05-3.4q.2-.65.713-1.075Q4.4 3 5.075 3h13.9q.675 0 1.175.412.5.413.725 1.088l1.05 3.4q.3.975-.012 1.775-.313.8-.888 1.375V19q0 .825-.587 1.413-.588.587-1.413.587Zm9.2-11q.675 0 1.025-.463.35-.462.275-1.037l-.55-3.5h-1.95v3.7q0 .525.35.913.35.387.85.387Zm-4.5 0q.575 0 .938-.387.362-.388.362-.913V5h-1.95l-.55 3.5q-.1.6.263 1.05.362.45.937.45Zm-4.45 0q.45 0 .787-.325.338-.325.413-.825L7.025 5h-1.95l-1 3.35q-.15.5.162 1.075Q4.55 10 5.275 10Zm13.5 0q.725 0 1.05-.575.325-.575.15-1.075L18.925 5h-1.9l.55 3.85q.075.5.413.825.337.325.787.325Zm-13.75 9h14v-7.05q-.125.05-.162.05h-.088q-.675 0-1.188-.225-.512-.225-1.012-.725-.45.45-1.025.7-.575.25-1.225.25-.675 0-1.263-.25-.587-.25-1.037-.7-.425.45-.987.7-.563.25-1.213.25-.725 0-1.313-.25-.587-.25-1.037-.7-.525.525-1.037.737Q5.925 12 5.275 12h-.112q-.063 0-.138-.05V19Zm14 0h-14 14Z"/>
    </Icon>
  );
});

IconMaterialStorefront.displayName = 'AmauiIconMaterialStorefront';

export default IconMaterialStorefront;
