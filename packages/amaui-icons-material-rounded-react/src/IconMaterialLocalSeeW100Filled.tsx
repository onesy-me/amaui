import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalSeeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalSeeW100Filled'

      short_name='LocalSee'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.525 13.6q2.875-2.7 3.825-4.25.95-1.55.95-3.2 0-2.5-1.6-3.975T18 .7q-2.1 0-3.7 1.475T12.7 6.15q0 1.65.95 3.2.95 1.55 3.825 4.25.2.2.525.2t.525-.2ZM12 16.8q-1.175 0-1.987-.812Q9.2 15.175 9.2 14t.813-1.988Q10.825 11.2 12 11.2q.15 0 .288.012.137.013.262.038.575.775 1.05 1.3.475.525 1.2 1.25v.2q-.05 1.175-.837 1.988-.788.812-1.963.812Zm-7.2 3.9q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h2.9l1.375-1.5q.225-.25.513-.375.287-.125.587-.125h.575q-.025.2-.037.413-.013.212-.013.462 0 1.35.338 2.337.337.988.987 1.988-1.45 0-2.487.988Q8.5 12.475 8.5 14q0 1.475 1.012 2.488Q10.525 17.5 12 17.5q1.35 0 2.338-.875.987-.875 1.137-2.15.375.375.975.912.6.538 1.025.938.2.2.513.213.312.012.537-.188.575-.475 1.125-.987.55-.513 1.05-1.063v4.9q0 .65-.425 1.075-.425.425-1.075.425ZM17.4 7.5q-.2.15-.325.05-.125-.1-.05-.325l.225-.75-.625-.5q-.2-.15-.15-.313.05-.162.325-.162h.725l.25-.725q.05-.125.1-.175.05-.05.125-.05.05 0 .225.225l.25.725h.725q.275 0 .325.15.05.15-.15.325l-.625.5.225.75q.075.225-.05.325T18.6 7.5l-.6-.45Z"/>
    </Icon>
  );
});

IconMaterialLocalSeeW100Filled.displayName = 'AmauiIconMaterialLocalSeeW100Filled';

export default IconMaterialLocalSeeW100Filled;
