import "@styles/style.scss";
import {ReactNode} from "react";

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="container">
        <h1>PET PROJECT</h1>
        <p>пет-проект</p>
      </div>

      <main>{children}</main>
    </>
  );
}

export default DefaultLayout;
