import { Switch, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './components/About/AboutPage';
import Header from './components/common/Header';
import CoursePage from './components/Courses/CoursesPage';
import HomePage from './components/Home/HomePage';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/courses">
          <CoursePage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
