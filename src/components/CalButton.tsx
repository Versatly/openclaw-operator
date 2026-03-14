import type { ButtonHTMLAttributes, ReactNode } from "react";
import { CAL_LINK, CAL_NAMESPACE } from "@/lib/cal";

type CalButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  children: ReactNode;
};

export default function CalButton({ children, className, ...props }: CalButtonProps) {
  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
