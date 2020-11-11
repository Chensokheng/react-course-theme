import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from '../components/Loading';

const CourseDetail = lazy(() =>
  import(/* webpackChunkName: "CourseDetail" */ '../components/CourseDetail')
);
const Class = lazy(() =>
  import(/* webpackChunkName: "Class" */ '../components/Class')
);
const Courses = lazy(() =>
  import(/* webpackChunkName: "Courses" */ '../components/Courses')
);

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" component={Courses} exact />
          <Route path="/course/:title" component={CourseDetail} exact />
          <Route path="/course/:title/:classTitle" component={Class} exact />
        </Switch>
      </Suspense>
    </Router>
  );
}
