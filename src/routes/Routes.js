import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const CourseDetail = lazy(() =>
  import(/* webpackChunkName: "CourseDetail" */ '../components/CourseDetail')
);
const CourseSession = lazy(() =>
  import(/* webpackChunkName: "CourseSession" */ '../components/CourseSession')
);
const ListOfCourses = lazy(() =>
  import(/* webpackChunkName: "ListOfCourses" */ '../components/ListOfCourses')
);

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" component={ListOfCourses} exact />
          <Route path="/course/:title" component={CourseDetail} exact />
          <Route
            path="/course/:title/:classTitle"
            component={CourseSession}
            exact
          />
        </Switch>
      </Suspense>
    </Router>
  );
}
