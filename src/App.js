import Main from "./components/main/Main";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyReports from "./components/Report";
import Hisobot from "./components/Hisobot/Hisobot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          {/* Bu yerga ichma ich yani bosh sahifada yoziladi va indexga olib yozilgan joyni ornida chiqariladi  */}
          <Route index element={<MyReports />} />
          <Route path="nimadir" element={<p>nimadir elem</p>} />
          <Route path="nimadir1" element={<p>nimadir elem1</p>} />
        </Route>
        {/* bu alohida blackda ochish uchun shu yerga yoziladi */}
        <Route path="/Hisobot" element={<Hisobot />} />
        <Route path="/table" element={<p>table</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
