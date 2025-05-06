import React, { useMemo } from "react";
import { View, TouchableOpacity } from "react-native";

import { AtBulletsProps } from "./at-bullets.types";
import { bulletVariants } from "./at-bullets.variants";

export const AtBullets = ({
  dataTestId,
  bulletsCount = 0,
  activeBulletIndex = 0,
  onClick,
}: AtBulletsProps) => {
  const bulletsCountArray = useMemo(
    () => new Array(bulletsCount).fill(0),
    [bulletsCount]
  );

  if (bulletsCountArray.length === 0) return null; // Return null, not undefined

  return (
    <View data-testid={dataTestId} className="flex flex-row gap-4">
      {bulletsCountArray.map((_val, idx) => (
        <View key={`bullet-${idx}`}>
          <TouchableOpacity
            onPress={() => onClick(idx)}
            data-testid={`${dataTestId ? `${dataTestId}-` : ""}bullet-${idx}`}
            className={bulletVariants({ active: activeBulletIndex === idx })}
          />
        </View>
      ))}
    </View>
  );
};
