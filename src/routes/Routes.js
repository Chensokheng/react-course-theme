import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CourseDetail from '../components/CourseDetail';
import Courses from '../components/Courses';
import Class from '../components/Class';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Courses} exact />
        <Route path="/course/:title" component={CourseDetail} exact />
        <Route path="/course/:title/:classTitle" component={Class} exact />
      </Switch>
    </Router>
  );
}
