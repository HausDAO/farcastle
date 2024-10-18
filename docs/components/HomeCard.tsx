import * as React from "react";

export default function HomeCard({
  title,
  text,
  children,
}: {
  title: string;
  text?: string;
  children?: React.ReactNode;
}) {
  // return <button className="primary">{children}</button>;
  return (
    <div className="Home__card">
      <h3 className="Home__card_h3">{title}</h3>
      {text && <p>{text}</p>}
      {children}
    </div>
  );
}
