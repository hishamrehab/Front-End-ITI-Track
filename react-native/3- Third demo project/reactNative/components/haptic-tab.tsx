import * as Haptics from "expo-haptics";
import React, {
    forwardRef,
} from "react";
import {
    Pressable,
    PressableProps,
} from "react-native";

export const HapticTab =
  forwardRef<
    React.ElementRef<
      typeof Pressable
    >,
    PressableProps
  >(
    (
      {
        children,
        ...props
      },
      ref,
    ) => {
      return (
        <Pressable
          ref={
            ref
          }
          {...props}
          onPressIn={(
            ev,
          ) => {
            // Add a soft haptic feedback when pressing down on the tab
            Haptics.impactAsync(
              Haptics
                .ImpactFeedbackStyle
                .Light,
            );
            props.onPressIn?.(
              ev,
            );
          }}
        >
          {
            children
          }
        </Pressable>
      );
    },
  );

HapticTab.displayName =
  "HapticTab";
