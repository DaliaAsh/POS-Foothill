import React, { useEffect, useState } from "react";
import { History } from "history";
interface SettingsProps {
  history: History;
}
const useSettingsOptions = (props: SettingsProps) => {
  const [checked, setChecked] = useState<number>();
  const navigateToOption = (option: string, checkedOptionNumber: number) => {
    props.history.replace(option);
    setChecked(checkedOptionNumber);
  };
  return { checked, setChecked, navigateToOption };
};
export default useSettingsOptions;
