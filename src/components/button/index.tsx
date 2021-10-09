import React, { Suspense } from "react";
import classNames from "classnames";
interface buttonProps {
  btnType?: string;
  className?: string;
}

const Button: React.FC<buttonProps> = ({ btnType, className, children }) => {
  const cln = classNames(className);
  const Component = React.lazy(() => import(`./${btnType}`));
  return (
    <div className={cln}>
      <Suspense fallback={<div>Button loading</div>}>
        <Component>{children}</Component>
      </Suspense>
    </div>
  );
};

Button.defaultProps={
    btnType: 'default'
}
export default Button;
