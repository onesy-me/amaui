import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiProxyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxyW100Filled'

      short_name='WifiProxy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M664-225h77v-77h-77v77Zm0-105h77v-77h-77v77Zm105 105h77v-77h-77v77Zm-103 28q-12.5 0-21.25-8.75T636-227v-178q0-12.5 8.75-21.25T666-435h73q12.5 0 21.25 8.75T769-405v75h75q12.5 0 21.25 8.75T874-300v73q0 12.5-8.75 21.25T844-197H666Zm-186-19q-11 0-20-3.5t-16.7-11.2L124-550q-9-9-13.5-20.5T106-594q0-14 6.03-26.93Q118.07-633.87 131-643q78-52 166.33-78.5 88.34-26.5 182.5-26.5 94.17 0 182.67 26.5Q751-695 828.75-643.25 842-635 848.5-622t6.5 27q0 12-5 24t-14 21l-4 4q-4.93 5.25-11.96 7.12Q813-537 806-539q-14-4-29.33-6-15.34-2-30.67-2-95.6 0-162.8 67.2Q516-412.6 516-317q0 15.33 2 30.67 2 15.33 6 29.33 2 7 0 14t-7 12q-8 8-17 11.5t-20 3.5Z"/>
    </Icon>
  );
});

IconMaterialWifiProxyW100Filled.displayName = 'OnesyIconMaterialWifiProxyW100Filled';

export default IconMaterialWifiProxyW100Filled;
