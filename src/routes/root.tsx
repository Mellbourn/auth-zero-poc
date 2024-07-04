import React from "react";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <a href={`/page1`}>Page 1</a>
            </li>
            <li>
              <a href={`/page2`}>Page 2</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
