import React, { Suspense, lazy,useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
const Signin = lazy(() => import("./dashboard/Signin"));

// const NewPage= lazy(() => import('./dashboard/NewPage'));
const CreateForm = lazy(() => import("./dashboard/CreateForm"));
const Setting = lazy(() => import("./dashboard/Setting"));
const FormPage = lazy(() => import("./dashboard/FormPage"));
const ResetPassword = lazy(() => import("./dashboard/ResetPassword"));
// const ExtraPage = lazy(() => import("./dashboard/ExtraPage"));
// const SecondPage = lazy(() => import("./date/DatePage"));

const Signup = lazy(() => import("./dashboard/Signup"));
const Forget = lazy(() => import("./dashboard/Forget"));

// const Extra = lazy(() => import("./dashboard/Extra"));

const Jotform = lazy(() => import("./dashboard/Jotform"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

// const Buttons = lazy(() => import("./basic-ui/Buttons"));
// const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));

// const BasicElements = lazy(() => import("./form-elements/BasicElements"));

// const BasicTable = lazy(() => import("./tables/BasicTable"));

// const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));
const Morris = lazy(() => import("./charts/Morris"));
// const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

const AppRoutes = (props) => {
  // const token = localStorage.getItem("token");
  // let redirectURL = "/?red_url=" + window.location.href;

   console.log(props.name,'namesagar')
  return (
    <Suspense fallback={<Spinner />}>
      {/* {localStorage.getItem("token") ? ( */}
        {/* <Switch>
          <Route exact path="/createform" component={CreateForm} />
          <Route exact path="/createform/setting" component={Setting} />
          <Route exact path="/createform/formpage" component={FormPage} />
          <Route exact path="/extrapage" component={ExtraPage} />
          <Route exact path="/Jotfrom" component={Jotfrom} />
          <Route exact path="/todo" component={Extra} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />

          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />

          <Route path="/tables/basic-table" component={BasicTable} />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/charts/chart-js" component={ChartJs} />
          <Route render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/Forget" component={Forget} />
          <Route exact path="/Signin" component={Signin} />

          <Route exact path="/Signup" component={Signup} />

          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} /> */}
          {/* <Route render={() => <Redirect to={redirectURL} />} /> */}

          {/* <Route render={() => <Redirect to="/Signin" />} />
        </Switch> */}
      {/* ) : ( */}
        <Switch>
          
        <Route exact path="/createform" component={CreateForm} />
          <Route exact path="/createform/setting" component={Setting} />
          <Route exact path="/createform/formpage" component={FormPage} />
          <Route exact path="/jotform" ><Jotform  name={props.name}/></Route>
        <Route exact path="/dashboard"> <Dashboard name={props.name}/> </Route>
          <Route exact path="/forget" component={Forget} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/chart" component={ChartJs} />
          <Route exact path="/morris" component={Morris} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/resetpassword" component={ResetPassword} />
          {/* <Route exact path="/createform" component={SecondPage} /> */}


          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />
          {/* <Route render={() => <Redirect to={redirectURL} />} /> */}

          <Route render={() => <Redirect to="/signin" />} />
        </Switch>
     
      {/* )} */}
    </Suspense>
  );
};

export default AppRoutes;
