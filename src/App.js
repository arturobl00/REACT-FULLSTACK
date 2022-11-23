import Topbar from "./scene/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";

/////// COmponentes
import Dashboard from "./scene/dashboard/index"
import Sidebar from "./scene/global/Sidebar";
import Team from "./scene/team";
import Contacts from "./scene/contacts";
import Invoices from "./scene/invoces";
import Form from "./scene/form";
import Calendar from "./scene/calendar";
import FAQ from "./scene/faq"
import Bar from "./scene/bar";
import Pie from "./scene/pie";
import Line from "./scene/line";
import Geography from "./scene/geography";
import Fifa from "./scene/fifa";

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/calendar" element={<Calendar />}/>
              <Route path="/faq" element={<FAQ />}/>
              <Route path="/bar" element={<Bar />}/>
              <Route path="/pie" element={<Pie />}/>
              <Route path="/line" element={<Line />}/>
              <Route path="/geography" element={<Geography />}/>
              <Route path="/fifa" element={<Fifa />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;