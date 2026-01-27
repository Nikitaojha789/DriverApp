import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';


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
  export const CalendarIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8E8E8E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
    />
    <Path
      stroke="#8E8E8E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
    />
  </Svg>
)

export const CardIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#8E8E8E" clipPath="url(#a)">
      <Path d="M6.338 13.8c-1.275 0-2.363-1.088-2.363-2.363s1.088-2.363 2.363-2.363S8.7 10.162 8.7 11.437a2.352 2.352 0 0 1-2.362 2.362Zm0-4.013c-.938 0-1.65.75-1.65 1.65 0 .9.75 1.65 1.65 1.65.9 0 1.65-.75 1.65-1.65 0-.9-.713-1.65-1.65-1.65Zm0 8.775c-.038 0-.413 0-.938-.075a11.56 11.56 0 0 1-1.762-.3c-.638-.188-1.313-.563-1.5-.9-.263-.375-.225-.863.112-1.388.713-1.162 2.888-1.912 3-1.912l.188-.075.975.75.937-.75.188.075c.037 0 .975.337 1.762.862.563.338.975.713 1.163 1.125.337.563.375 1.05.112 1.388-.187.337-.9.712-1.5.9-.225.037-.45.112-.675.15-1.012.15-1.987.15-2.062.15Zm-1.05-3.825c-.675.225-1.988.862-2.4 1.537-.225.375-.188.563-.113.675.075.113.563.45 1.125.6.6.15 1.2.225 1.65.3.338.038.6.038.75.038l-.712-1.088L6 15.262l-.712-.525Zm1.5.525.525 1.5-.675 1.087c.337-.037.975-.075 1.575-.187.225-.038.45-.075.637-.15.563-.15 1.05-.488 1.125-.6.075-.113.113-.3-.112-.675-.188-.3-.488-.563-.975-.863-.563-.337-1.163-.6-1.425-.712l-.675.6Zm-.45 1.425.075.15.075-.15-.113-.3-.037.3Z" />
      <Path
        stroke="#8E8E8E"
        strokeWidth={0.4}
        d="M20.4 21.337H3.6a3.4 3.4 0 0 1-3.413-3.413V9.3A3.4 3.4 0 0 1 3.6 5.887h5.325v.712H3.6C2.138 6.6.9 7.8.9 9.3v8.625c0 1.463 1.2 2.7 2.7 2.7h16.837c1.463 0 2.7-1.2 2.7-2.7V9.3c0-1.462-1.2-2.7-2.7-2.7H14.85v-.712h5.588a3.4 3.4 0 0 1 3.412 3.412v8.625c-.038 1.913-1.538 3.413-3.45 3.413Z"
      />
      <Path
        stroke="#8E8E8E"
        strokeWidth={0.4}
        d="M11.887 9.862c-.337 0-.675-.113-.975-.3L8.587 8.024v-3.75c0-.9.825-1.575 1.8-1.575h3.038c1.012 0 1.8.713 1.8 1.575v3.75L12.9 9.562c-.338.187-.675.3-1.013.3ZM9.262 7.649l2.025 1.313c.338.225.825.225 1.163 0l2.025-1.313V4.237c0-.488-.488-.9-1.088-.9H10.35c-.6 0-1.088.412-1.088.9v3.412ZM22.2 12.6h-7.35a.376.376 0 0 1-.375-.375c0-.225.15-.375.375-.375h7.35c.187 0 .375.15.375.375a.376.376 0 0 1-.375.375Zm-3.713 2.175h-3.675a.376.376 0 0 1-.375-.375c0-.225.15-.375.375-.375h3.675c.188 0 .375.15.375.375s-.15.375-.375.375Zm2.888 0h-1.463a.376.376 0 0 1-.375-.375c0-.225.15-.375.375-.375h1.463c.187 0 .375.15.375.375a.376.376 0 0 1-.375.375Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const CameraIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8E8E8E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M13.994 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18 7h1.996a2 2 0 0 1 2 1.999v8.998a2 2 0 0 1-2 2H3.999a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.758-1.047l.49-.904A2 2 0 0 1 10.001 4h3.992Z"
    />
    <Path
      stroke="#8E8E8E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M11.998 15.997a3 3 0 1 0 0-5.999 3 3 0 0 0 0 5.999Z"
    />
  </Svg>
)