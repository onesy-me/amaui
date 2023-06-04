import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShareLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareLocationFilled'

      short_name='ShareLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.175 21.775q-.45.1-.787-.188-.338-.287-.338-.787 0-.35.238-.637.237-.288.587-.388.625-.15 1.213-.388.587-.237 1.137-.587.325-.2.713-.162.387.037.637.287.35.35.313.8-.038.45-.438.7-.775.5-1.587.825-.813.325-1.688.525ZM19 17.5q-.25-.25-.288-.625-.037-.375.163-.675.325-.55.575-1.125.25-.575.4-1.225.1-.35.4-.6.3-.25.65-.25.5 0 .788.35.287.35.162.8-.2.9-.538 1.713-.337.812-.837 1.537-.25.375-.687.412-.438.038-.788-.312Zm1.875-6.5q-.35 0-.637-.25-.288-.25-.388-.6-.15-.65-.4-1.238-.25-.587-.575-1.112-.2-.3-.163-.675.038-.375.288-.625.35-.35.788-.325.437.025.687.4.5.725.85 1.562.35.838.55 1.713.1.45-.2.8-.3.35-.8.35ZM9.95 21.75q-3.425-.8-5.638-3.5Q2.1 15.55 2.1 12q0-3.575 2.2-6.3 2.2-2.725 5.625-3.475.45-.1.788.187.337.288.337.763 0 .35-.238.637-.237.288-.587.388-2.675.65-4.4 2.825Q4.1 9.2 4.1 12t1.725 4.938q1.725 2.137 4.4 2.837.35.1.587.4.238.3.238.65 0 .475-.325.75t-.775.175ZM16.3 5.225q-.575-.35-1.175-.613-.6-.262-1.225-.412-.35-.1-.6-.388-.25-.287-.25-.637 0-.475.338-.763.337-.287.787-.187.875.2 1.7.525t1.6.825q.4.25.438.7.037.45-.313.8-.25.25-.612.3-.363.05-.688-.15ZM12.075 16.65q-.2 0-.375-.063-.175-.062-.325-.187-1.65-1.525-2.475-2.85-.825-1.325-.825-2.45 0-1.875 1.213-2.987Q10.5 7 12.075 7t2.788 1.113q1.212 1.112 1.212 2.987 0 1.125-.825 2.45-.825 1.325-2.475 2.85-.15.125-.325.187-.175.063-.375.063Zm0-4.65q.45 0 .763-.312.312-.313.312-.763 0-.425-.312-.75-.313-.325-.763-.325t-.763.325q-.312.325-.312.75 0 .45.312.763.313.312.763.312Z"/>
    </Icon>
  );
});

IconMaterialShareLocationFilled.displayName = 'AmauiIconMaterialShareLocationFilled';

export default IconMaterialShareLocationFilled;
