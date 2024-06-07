import React from "react";
import { ActionType } from "../../globalTypes";

export interface ButtonCategoryProps{
    content: string;
    dispatch: React.Dispatch<ActionType>;
    to?: string;
}