import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRttW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RttW100Filled'

      short_name='Rtt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M445-158q-6.27 0-10.64-5-4.36-5-3.27-11.27.82-5.18 4.77-8.46Q439.82-186 445-186h82l92-590H441l-26 168q-.81 5.18-4.71 8.59Q406.38-596 401-596q-6 0-10.5-5t-3.5-11l28-178q1.08-6.16 5.56-10.08Q425.03-804 431-804h407q7.88 0 12.94 5.5T854-785l-27 177q-.81 5.18-4.71 8.59Q818.38-596 813-596q-6.43 0-10.71-5-4.29-5-3.29-11l26-164H647l-92 590h78q6.27 0 10.64 5 4.36 5 3.27 11.27-.82 5.18-4.77 8.46Q638.18-158 633-158H445ZM187-706q-6 0-10.5-5t-3.43-11.23q.72-4.85 4.64-8.31Q181.64-734 187-734h159l-4 28H187Zm-24 160q-6 0-10.5-5t-3.43-11.23q.72-4.85 4.64-8.31Q157.64-574 163-574h159l-4 28H163Zm-44 320q-6.43 0-10.71-5-4.29-5-3.22-11.23.72-5.19 4.64-8.48Q113.64-254 119-254h248l-4 28H119Zm26-160q-6 0-10.5-5t-3.43-11.23q.72-4.85 4.64-8.31Q139.64-414 145-414h248l-4 28H145Z"/>
    </Icon>
  );
});

IconMaterialRttW100Filled.displayName = 'OnesyIconMaterialRttW100Filled';

export default IconMaterialRttW100Filled;
