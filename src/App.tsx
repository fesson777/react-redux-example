import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import PageNotFound from 'pages/PageNotFound';
import List from 'pages/List';
import Main from 'pages/Main';
import { ThemeProvider } from 'theme/context';
import Login from 'pages/Login';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/list" element={<List />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
