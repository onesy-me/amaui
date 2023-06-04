import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecordVoiceOver = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecordVoiceOver'

      short_name='RecordVoiceOver'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.125 15.125q-.275-.275-.288-.7-.012-.425.263-.775.775-.95 1.212-2.138.438-1.187.438-2.512 0-1.3-.438-2.475Q19.875 5.35 19.1 4.4q-.275-.35-.275-.775 0-.425.3-.725.35-.35.838-.35.487 0 .787.35 1.05 1.275 1.65 2.825Q23 7.275 23 9q0 1.725-.6 3.275-.6 1.55-1.65 2.825-.3.35-.787.362-.488.013-.838-.337ZM15.9 11.9q-.275-.275-.312-.712-.038-.438.212-.863.175-.3.262-.637.088-.338.088-.688 0-.35-.088-.688-.087-.337-.262-.637-.25-.425-.212-.863.037-.437.312-.712.35-.35.85-.338.5.013.775.388.425.625.675 1.337.25.713.25 1.513 0 .8-.25 1.512-.25.713-.675 1.338-.275.375-.775.388-.5.012-.85-.338ZM9 13q-1.65 0-2.825-1.175Q5 10.65 5 9q0-1.65 1.175-2.825Q7.35 5 9 5q1.65 0 2.825 1.175Q13 7.35 13 9q0 1.65-1.175 2.825Q10.65 13 9 13Zm-7 8q-.425 0-.712-.288Q1 20.425 1 20v-1.8q0-.825.425-1.55.425-.725 1.175-1.1 1.275-.65 2.875-1.1Q7.075 14 9 14q1.925 0 3.525.45 1.6.45 2.875 1.1.75.375 1.175 1.1.425.725.425 1.55V20q0 .425-.288.712Q16.425 21 16 21Zm1-2h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-.9-.45-2.312-.9Q10.775 16 9 16q-1.775 0-3.188.45-1.412.45-2.312.9-.225.125-.362.35-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q11 9.825 11 9t-.587-1.413Q9.825 7 9 7q-.825 0-1.412.587Q7 8.175 7 9q0 .825.588 1.412Q8.175 11 9 11Zm0-2Zm0 10Z"/>
    </Icon>
  );
});

IconMaterialRecordVoiceOver.displayName = 'AmauiIconMaterialRecordVoiceOver';

export default IconMaterialRecordVoiceOver;
