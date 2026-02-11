import * as React from 'react';
import Svg, { Circle, ClipPath, Defs, G, Image, Path, Pattern, Rect, Use } from 'react-native-svg';


export const ProfileIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Path
      fill="#E6DDF1"
      d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z"
    />
    <Path
      fill="#3E1F63"
      d="M22.928 18.65c1.368 0 2.55.257 3.546.773 1.008.504 1.776 1.23 2.304 2.178.54.948.81 2.064.81 3.348 0 1.284-.27 2.4-.81 3.348-.528.936-1.296 1.656-2.304 2.16-.996.492-2.178.738-3.546.738h-3.906V18.65h3.906Zm0 11.195c1.62 0 2.856-.426 3.708-1.278.852-.864 1.278-2.07 1.278-3.618 0-1.56-.432-2.778-1.296-3.654-.852-.876-2.082-1.314-3.69-1.314H20.66v9.864h2.268Z"
    />
  </Svg>
)

export const ShowOnlineIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path fill="#2ECC71" d="M0 6a6 6 0 1 1 11.999 0A6 6 0 0 1 0 6Z" />
  </Svg>
)

export const HomeTabIcon = ({color,...props}:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeWidth={1.5}
      d="M.75 7.25a2 2 0 0 1 .8-1.6l6-4.5a2 2 0 0 1 2.4 0l6 4.5a2 2 0 0 1 .8 1.6v6a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-6Z"
    />
  </Svg>
)

export const OrdesTabIcon = ({color,...props}:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M12.59 8.75a.75.75 0 0 0-1.5 0h1.5Zm-3.95 3.2v.75-.75Zm-2.45-3.2a.75.75 0 0 0-1.5 0h1.5Zm10.433-3.422.719-.215-.718.215ZM.75 6.19h.75-.75Zm.127-.862-.719-.215.719.215ZM.75 13.75h.75-.75ZM15.891 2.888l-.718.215.718-.215Zm-14.282 0 .718.215-.718-.215Zm10.23 5.862h-.75a2.45 2.45 0 0 1-.717 1.732l.53.53.53.531A3.95 3.95 0 0 0 12.59 8.75h-.75Zm-.937 2.263-.53-.53a2.45 2.45 0 0 1-1.732.717v1.5a3.95 3.95 0 0 0 2.793-1.157l-.53-.53Zm-2.262.937v-.75a2.45 2.45 0 0 1-1.733-.718l-.53.53-.53.531A3.95 3.95 0 0 0 8.64 12.7v-.75Zm-2.263-.937.53-.53A2.45 2.45 0 0 1 6.19 8.75h-1.5a3.95 3.95 0 0 0 1.157 2.793l.53-.53ZM.75 5.75v.75h15.78V5H.75v.75Zm.127-.422.718.216.732-2.44-.718-.216-.719-.216-.732 2.44.719.216Zm15.014-2.44-.718.215.732 2.44.719-.215.718-.215-.732-2.44-.719.215Zm.732 2.44-.718.216c.063.21.095.427.095.646h1.5c0-.365-.053-.728-.158-1.077l-.718.215ZM.75 6.19h.75c0-.219.032-.436.095-.646l-.718-.216-.719-.215A3.75 3.75 0 0 0 0 6.19h.75Zm0 7.56H0a3.75 3.75 0 0 0 3.75 3.75V16a2.25 2.25 0 0 1-2.25-2.25H.75Zm16 0H16A2.25 2.25 0 0 1 13.75 16v1.5a3.75 3.75 0 0 0 3.75-3.75h-.75Zm-3.732-13v.75c.993 0 1.87.652 2.155 1.603l.718-.215.719-.216A3.75 3.75 0 0 0 13.018 0v.75Zm-8.536 0V0A3.75 3.75 0 0 0 .89 2.672l.719.216.718.215A2.25 2.25 0 0 1 4.482 1.5V.75ZM16.75 6.19H16v7.56h1.5V6.19h-.75Zm-16 7.56h.75V6.19H0v7.56h.75Zm3.732-13v.75h8.536V0H4.482v.75Zm9.268 16V16h-10v1.5h10v-.75Z"
    />
  </Svg>
)

export const EarningTabIcon = ({color,...props}:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={16}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={color}
        d="M3.444 7.104H4.56c1.09 0 1.894-.18 2.412-.539.52-.354.779-.918.779-1.683 0-.766-.265-1.303-.795-1.622-.53-.319-1.353-.481-2.467-.481H3.444v4.325Zm0 2.755V16H0V0h4.743C6.95 0 8.585.396 9.644 1.188c1.06.791 1.59 1.993 1.59 3.604.013.899-.266 1.779-.795 2.513-.517.732-1.26 1.307-2.225 1.722 2.448 3.597 4.043 5.92 4.785 6.973h-3.83L5.286 9.86H3.444Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h13v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const OffToggleIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      fill="#E6E6E6"
      d="M6 18c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12s-5.373 12-12 12H18c-6.627 0-12-5.373-12-12Z"
    />
    <G filter="url(#a)">
      <Path
        fill="#fff"
        d="M8 18c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S8 23.523 8 18Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)

export const OnToggleIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={31}
    fill="none"
    {...props}
  >
    <Path
      fill="#5C2E92"
      d="M0 12C0 5.373 5.373 0 12 0h24c6.627 0 12 5.373 12 12s-5.373 12-12 12H12C5.373 24 0 18.627 0 12Z"
    />
    <G filter="url(#a)">
      <Path
        fill="#fff"
        d="M26 12c0-5.522 4.477-10 9.998-10 5.523 0 9.999 4.478 9.999 10s-4.477 10-9.998 10C30.476 22 26 17.522 26 12Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export const DeliveryIcon = ({color,...props}:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.666}
      clipPath="url(#a)"
    >
      <Path d="M9.163 18.101a1.666 1.666 0 0 0 1.666 0l5.83-3.332a1.666 1.666 0 0 0 .834-1.441V6.664a1.666 1.666 0 0 0-.833-1.44L10.829 1.89a1.666 1.666 0 0 0-1.666 0L3.332 5.223a1.666 1.666 0 0 0-.833 1.441v6.664a1.666 1.666 0 0 0 .833 1.441l5.83 3.332ZM9.996 18.326v-8.33" />
      <Path d="m2.74 5.83 7.256 4.165L17.25 5.83M6.247 3.557l7.497 4.29" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h19.991v19.991H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const LocationIcon = ({color,...props}:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.666}
      clipPath="url(#a)"
    >
      <Path d="M16.66 8.33c0 4.159-4.614 8.49-6.164 9.828a.833.833 0 0 1-1 0c-1.55-1.338-6.164-5.67-6.164-9.828a6.664 6.664 0 1 1 13.328 0Z" />
      <Path d="M9.996 10.828a2.499 2.499 0 1 0 0-4.998 2.499 2.499 0 0 0 0 4.998Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h19.991v19.991H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const RatingIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#F5A623"
        stroke="#F5A623"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.666}
        d="M9.6 1.912a.441.441 0 0 1 .791 0l1.925 3.897a1.768 1.768 0 0 0 1.328.966l4.303.63a.441.441 0 0 1 .245.753l-3.112 3.03a1.768 1.768 0 0 0-.509 1.565l.735 4.281a.442.442 0 0 1-.642.467l-3.847-2.023a1.768 1.768 0 0 0-1.643 0l-3.846 2.023a.442.442 0 0 1-.642-.467l.734-4.28a1.767 1.767 0 0 0-.509-1.565L1.8 8.159a.442.442 0 0 1 .245-.755l4.302-.629a1.768 1.768 0 0 0 1.33-.966L9.6 1.912Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h19.991v19.991H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const CorrectIconSvg = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={11}
    fill="none"
    {...props}
  >
    <Path
      fill="#5C2E92"
      d="M2.212 10.78c0-.121-.023-.182-.07-.182l-.322.154c0-.065-.037-.112-.112-.14l-.112-.014a.591.591 0 0 0-.28.098.975.975 0 0 0-.07-.14 1.92 1.92 0 0 1-.07-.126c-.121-.233-.243-.49-.364-.77L.49 8.834a44.137 44.137 0 0 0-.224-.616 5.608 5.608 0 0 1-.126-.546C.093 7.43.047 7.122 0 6.748c.103.065.182.098.238.098.065 0 .126-.098.182-.294.028.037.08.056.154.056.056 0 .098-.019.126-.056l.224-.336.252.084h.014c.019 0 .037-.01.056-.028a.326.326 0 0 1 .084-.056c.075-.047.13-.07.168-.07l.042.014c.233.112.383.317.448.616.168.71.336 1.064.504 1.064.168 0 .364-.177.588-.532.112-.177.224-.383.336-.616.121-.233.243-.495.364-.784.019.112.037.168.056.168.047 0 .126-.117.238-.35.121-.233.313-.555.574-.966.15-.252.336-.537.56-.854a57.232 57.232 0 0 1 1.498-1.932c.252-.299.476-.555.672-.77.196-.215.34-.355.434-.42.355-.243.635-.476.84-.7a1.04 1.04 0 0 1-.042.182.59.59 0 0 0-.014.098c0 .037.019.056.056.056l.392-.196V.28c0 .075.019.112.056.112.028 0 .084-.042.168-.126.084-.084.13-.145.14-.182L9.38.28 9.856 0l-.112.252c.15-.103.257-.154.322-.154.037 0 .065.023.084.07a.248.248 0 0 1 .028.112.385.385 0 0 1-.07.196 4.712 4.712 0 0 1-.182.266c-.056.075-.15.187-.28.336-.121.14-.308.35-.56.63-.252.27-.588.649-1.008 1.134a9.737 9.737 0 0 0-.518.644c-.233.299-.5.649-.798 1.05-.29.392-.579.789-.868 1.19-.29.401-.546.765-.77 1.092a11.48 11.48 0 0 0-.476.714l-.868 1.47c-.187.317-.34.579-.462.784a3.425 3.425 0 0 1-.28.406c-.14.168-.294.317-.462.448l-.126-.07-.112.07-.126.14Z"
    />
  </Svg>
)

export const PickupLocationIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E88E5"
      fillOpacity={0.26}
      d="M0 8a8 8 0 1 1 16 0A8 8 0 1 1 0 8Z"
    />
    <Path fill="#1E88E5" d="M4.01 8a4 4 0 0 1 8 0 4 4 0 0 1-8 0Z" />
  </Svg>
)
export const ShareIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#2B2B2B"
      d="M2.453 20.654a.75.75 0 0 1-.75-.787c0-.113.772-11.003 11.692-11.858V4.094a.75.75 0 0 1 1.286-.525l7.403 7.56a.75.75 0 0 1 0 1.05l-7.403 7.56a.75.75 0 0 1-1.286-.525v-3.84c-7.29.278-10.279 4.875-10.309 4.932a.75.75 0 0 1-.633.348ZM14.895 5.932V8.71a.75.75 0 0 1-.724.75c-7.065.258-9.592 4.965-10.5 7.99 1.875-1.62 5.216-3.6 10.429-3.6h.034a.75.75 0 0 1 .75.75v2.78l5.625-5.723-5.614-5.726Z"
    />
  </Svg>
)

export const TelephoneIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2ECC71"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.83 15.566a1 1 0 0 0 1.213-.303l.355-.464a2 2 0 0 1 1.6-.8h3a2 2 0 0 1 2 2v2.999a2 2 0 0 1-2 2A17.998 17.998 0 0 1 1 3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.469.35a1 1 0 0 0-.292 1.233 13.998 13.998 0 0 0 6.392 6.383Z"
    />
  </Svg>
)

export const DestinationIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1E88E5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.5 7.357 14.976.5 8.12 14.976 6.595 8.881.5 7.357Z"
      clipRule="evenodd"
    />
  </Svg>
)

export const MessageIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1E88E5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.991 15.34a2 2 0 0 1 .094 1.167l-1.064 3.29a1 1 0 0 0 1.235 1.168l3.413-.998a2 2 0 0 1 1.099.092A9.999 9.999 0 1 0 1.99 15.34Z"
    />
  </Svg>
)

export const DeliveredIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={144}
    height={144}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect
        width={127.998}
        height={127.998}
        x={8}
        y={8}
        fill="#2ECC71"
        rx={63.999}
        shapeRendering="crispEdges"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6.665}
        d="M104.663 65.333a33.33 33.33 0 0 1-19.291 37.184 33.327 33.327 0 1 1 3.29-59.396"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6.665}
        d="M62.001 68.665 72 78.663l33.327-33.327"
      />
    </G>
    <Defs></Defs>
  </Svg>
)

export const DistanceIcon = ({color,props}:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.666}
      clipPath="url(#a)"
    >
      <Path d="M13.328 5.83h4.998v4.998" />
      <Path d="m18.326 5.83-7.08 7.08L7.08 8.746 1.666 14.16" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h19.991v19.991H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const NextIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8E8E8E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.666}
      d="m7.497 14.994 4.998-4.998-4.998-4.998"
    />
  </Svg>
)
export const RestroAddress = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E88E5"
      d="M0 3.996a3.996 3.996 0 1 1 7.993 0 3.996 3.996 0 0 1-7.993 0Z"
    />
  </Svg>
)
export const CustomerAddress = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}
  >
    <Path
      fill="#2ECC71"
      d="M0 3.996a3.996 3.996 0 1 1 7.993 0 3.996 3.996 0 0 1-7.993 0Z"
    />
  </Svg>
)

export const ArrowIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#5C2E92"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.332}
      d="M4.667 4.666h6.666v6.667M4.667 11.333l6.666-6.667"
    />
  </Svg>
)
export const ProfileImage = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <Circle cx={40} cy={40} r={40} fill="#D9D9D9" />
    <Circle cx={40} cy={40} r={40} fill="url(#a)" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.00208)" />
      </Pattern>
      <Image
        xlinkHref="data:image/jpeg;base64,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"
        id="b"
        width={480}
        height={480}
        preserveAspectRatio="none"
      />
    </Defs>
  </Svg>
)
export const dropdownIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={8}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8E8E8E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 1 6 6 6-6"
    />
  </Svg>
)
export const UploadIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2B2B2B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.332}
      d="M7.993 1.998v7.993M11.323 5.328l-3.33-3.33-3.33 3.33M13.987 9.99v2.665a1.332 1.332 0 0 1-1.332 1.332H3.33a1.332 1.332 0 0 1-1.332-1.332V9.99"
    />
  </Svg>
)
