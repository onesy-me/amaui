import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentWorriedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentWorriedW100Filled'

      short_name='SentimentWorried'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M452 790h56q48 0 77-27.382 29-27.383 29-66.5Q614 657 585 629.5 556 602 508 602h-56q-48 0-77 27.382-29 27.383-29 66.5Q346 735 375 762.5q29 27.5 77 27.5Zm0-28q-37 0-57.5-19.25T374 696q0-27.5 20.5-46.75T452 630h56q37 0 57.5 19.25T586 696q0 27.5-20.5 46.75T508 762h-56ZM271 496h64q39 0 68.5-25t34.5-63h-29q-6 26-26.5 43T335 468h-64v28Zm353 0h64v-28h-64q-27 0-47.5-17T550 408h-29q5 38 34.5 63t68.5 25ZM480.174 924Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924Z"/>
    </Icon>
  );
});

IconMaterialSentimentWorriedW100Filled.displayName = 'AmauiIconMaterialSentimentWorriedW100Filled';

export default IconMaterialSentimentWorriedW100Filled;
