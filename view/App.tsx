import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [list, setList] = useState([]);

  return (
    <main>
      Hello React
      <button
        onClick={() => {
          axios
            .get("http://sanguk.kr/api/weather?start=20221001&end=20221011")
            .then(({ data }) => setList(data?.data));
        }}
      >
        GET
      </button>
      <br />
      <br />
      {JSON.stringify(list)}
    </main>
  );
}
