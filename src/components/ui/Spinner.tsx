import React, { CSSProperties } from "react";
import { Loader2 } from "lucide-react";

type Props = {
  className?: CSSProperties | string;
  hintText?: string
};

const Spinner: React.FC<Props> = ({ className, hintText }) => {
  return (
    <div className="flex justify-center items-center">
      <Loader2 className={`mr-2 h-4 w-4 animate-spin ${className}`} /> <span className="text-sm text-gray-500 capitalize">{hintText}</span>
    </div>
  )
};

export default Spinner;
