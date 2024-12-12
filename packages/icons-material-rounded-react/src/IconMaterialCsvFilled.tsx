import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCsvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CsvFilled'

      short_name='Csv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M230-360h90q13 0 21.5-8.5T350-390q0-13-8.5-21.5T320-420h-70v-120h70q13 0 21.5-8.5T350-570q0-13-8.5-21.5T320-600h-90q-17 0-28.5 11.5T190-560v160q0 17 11.5 28.5T230-360Zm186 0h90q17 0 28.5-11.5T546-400v-60q0-17-11.5-31.5T506-506h-60v-34h70q13 0 21.5-8.5T546-570q0-13-8.5-21.5T516-600h-90q-17 0-28.5 11.5T386-560v60q0 17 11.5 30.5T426-456h60v36h-70q-13 0-21.5 8.5T386-390q0 13 8.5 21.5T416-360Zm264-102-34-117q-3-9-10.5-15t-17.5-6q-14 0-22.5 11.5T591-563l53 182q3 9 10.5 15t17.5 6h16q10 0 17.5-6t10.5-15l53-182q4-14-4.5-25.5T742-600q-10 0-17.5 6T714-579l-34 117ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialCsvFilled.displayName = 'OnesyIconMaterialCsvFilled';

export default IconMaterialCsvFilled;
