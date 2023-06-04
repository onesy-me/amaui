import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightW100Filled'

      short_name='Highlight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 7.9 5.15 6.65q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L6.9 7.4q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125ZM12 6.15q-.15 0-.25-.1t-.1-.25V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.8q0 .15-.1.25t-.25.1Zm5.1 1.75q-.125-.125-.125-.25t.125-.25l1.25-1.25q.1-.1.237-.113.138-.012.263.113t.125.25q0 .125-.125.25L17.6 7.9q-.1.1-.237.112-.138.013-.263-.112Zm-5.3 12.8q-.625 0-1.062-.438-.438-.437-.438-1.062v-2.75L7.75 13.9q-.2-.2-.325-.488-.125-.287-.125-.587V11.05q0-.325.213-.538.212-.212.537-.212h7.9q.325 0 .538.212.212.213.212.538v1.775q0 .3-.125.587-.125.288-.325.488l-2.55 2.55v2.75q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialHighlightW100Filled.displayName = 'AmauiIconMaterialHighlightW100Filled';

export default IconMaterialHighlightW100Filled;
