import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';


export const DrivingIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <Rect width={64} height={64} fill="#E6DDF1" rx={32} />
    <Path
      stroke="#5C2E92"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.665}
      d="M24 45.333a2.667 2.667 0 0 1-2.666-2.667V21.333A2.666 2.666 0 0 1 24 18.666h10.667a3.201 3.201 0 0 1 2.272.941l4.784 4.784a3.2 3.2 0 0 1 .944 2.275v16A2.666 2.666 0 0 1 40 45.333H24Z"
    />
    <Path
      stroke="#5C2E92"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.665}
      d="M34.666 18.666v6.667A1.334 1.334 0 0 0 36 26.666h6.666M29.333 28h-2.666M37.333 33.334H26.667M37.333 38.666H26.667"
    />
  </Svg>
)



export const VehicalIcon = (props : any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <Rect width={64} height={64} fill="#E6DDF1" rx={32} />
    <Path
      stroke="#5C2E92"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.665}
      d="M41.323 38.667h2.667c.8 0 1.333-.533 1.333-1.333v-4c0-1.2-.933-2.267-2-2.533-2.4-.667-6-1.467-6-1.467s-1.733-1.867-2.933-3.067c-.667-.533-1.467-.933-2.4-.933h-9.333c-.8 0-1.467.533-1.867 1.2l-1.867 3.867a4.932 4.932 0 0 0-.266 1.6v5.333c0 .8.533 1.333 1.333 1.333h2.667"
    />
    <Path
      stroke="#5C2E92"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.665}
      d="M25.323 41.333a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333ZM27.99 38.666h8M38.657 41.333a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333Z"
    />
  </Svg>
)

export const BankIcon = (props : any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <Rect width={64} height={64} fill="#E6DDF1" rx={32} />
    <Path
      stroke="#5C2E92"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.665}
      d="M42.657 22.666H21.323a2.667 2.667 0 0 0-2.666 2.667v13.333a2.667 2.667 0 0 0 2.666 2.667h21.334a2.667 2.667 0 0 0 2.666-2.667V25.333a2.667 2.667 0 0 0-2.666-2.667ZM18.657 29.334h26.666"
    />
  </Svg>
)
  