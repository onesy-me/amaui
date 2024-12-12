import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieFilter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieFilter'

      short_name='MovieFilter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 11-.95 2.05L6.5 14l2.05.95L9.5 17l.95-2.05L12.5 14l-2.05-.95Zm6 0-.65 1.35-1.35.65 1.35.65.65 1.35.65-1.35L17.5 13l-1.35-.65ZM4 4l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h3q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4Zm0 6v8h16v-8Zm0 0v8Z"/>
    </Icon>
  );
});

IconMaterialMovieFilter.displayName = 'OnesyIconMaterialMovieFilter';

export default IconMaterialMovieFilter;
