import { View } from "react-native";
import { colors } from "../../constant/color";

type Props = {
  step: 1 | 2 | 3;
};

export const ProfileProgress = ({ step }: Props) => {
  const progressWidth =
    step === 1 ? "33%" : step === 2 ? "66%" : "100%";

  return (
    <View style={{ marginTop: 16 }}>
      <View
        style={{
          width: "100%",
          height: 8,
          backgroundColor: colors.inputBorder,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            width: progressWidth,
            height: "100%",
            backgroundColor: colors.purple,
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};
