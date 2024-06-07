import React from "react";
import { ActionType } from "../../globalTypes";

export interface FilterProps{
    dispatch: React.Dispatch<ActionType>,
    isInHeader?: boolean
}