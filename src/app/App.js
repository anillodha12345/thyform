import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import SettingsIcon from '@material-ui/icons/Settings';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import SettingsPanel from './shared/SettingsPanel';
// import Footer from './shared/Footer';
import { withTranslation } from "react-i18next";

class App extends Component {
  state = {}
state={
  color:'black',
  backgroundColor:'#F4F5F7',
  chart:'white',
  transparent:'transparent',
  linechart:'blue',
  arealine1:'#1f3bb3',
  arealine2:'#52cdff',
  fill1:'#e1ecfc',
  fill2:'#ddf8fe',
  sidebarcolor:'black',
  sidebarcolor1:'black'
}
  
  btntoggle = ()=>{
    if(this.state.color == 'black'){
      this.setState({ color:'white',
      backgroundColor:'#1F2127',chart:'#252730',linechart:'#191B20',arealine1:"#f2a654",arealine2:"#aab2bd", fill1:'#ffeec9',fill2:'#ffeec9',  sidebarcolor:'white',
      sidebarcolor1:'white'})
    }else{
      this.setState({color:'black',
      backgroundColor:'#F4F5F7',chart:'white',linechart:'blue',  arealine1:'#1f3bb3',
      arealine2:'#52cdff', fill1:'#e1ecfc',
      fill2:'#ddf8fe',sidebarcolor:'black',
      sidebarcolor1:'black'})
    }
  }
  componentDidMount() {
    this.onRouteChanged();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location !== prevProps.location) {
  //     this.onRouteChanged();
  //   }
  // }

  onRouteChange(e) {
    // .classList.remove('active');
    const elms = document.querySelector('#sidebar')
    if(elms !==null){
      elms.classList.remove("active");
     }
  
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/create-form', state: 'createFormMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    console.log(this.state,'this.state')
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar  name={this.state}/> : '';
    let sidebarComponent = !this.state.isFullPageLayout  ? <Sidebar name={this.state}/> : '';
    let SettingsPanelComponent = !this.state.isFullPageLayout ? <SettingsPanel  name={this.state}/> : '';
    // let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    // const token = localStorage.getItem('token')
    return (
      <div className="container-scroller" style={this.state}>
        {/* { navbarComponent } */}
        {/* { this.isPathActive('/createform') ? '' : navbarComponent }  */}
        {/* { this.isPathActive('/createform') ? '' : this.isPathActive('/extrapage') ? '' :  !token ? '' : navbarComponent } */}
        { this.isPathActive('/createform') ? '' : this.isPathActive('/extrapage') ? '': this.isPathActive('/forget') ? '': this.isPathActive('/signin') ? '': this.isPathActive('/signup') ? '': this.isPathActive('/jotform') ? '': this.isPathActive('/resetpassword') ? '': navbarComponent }
        <div className="container-fluid page-body-wrapper thyform-container">
          {/* { this.isPathActive('/createform') ? '' : sidebarComponent } */}
          {/* { this.isPathActive('/createform')  ? '' : this.isPathActive('/createform/setting') ? "" : sidebarComponent } */}
          { this.isPathActive('/jotform')   ? '' : this.isPathActive('/createform/setting') ? "" : this.isPathActive('/createform/formpage') ? "" :
           this.isPathActive('/extrapage')  ?  '' : this.isPathActive('/forget')  ?  '' : this.isPathActive('/signin')  ?  '' : this.isPathActive('/signup')  ?  '' : this.isPathActive('/createform')  ?  '' : this.isPathActive('/resetpassword')  ?  '' : sidebarComponent }
          <div className="main-panel container_pannel">
            <div className="content-wrapper content_data">
              <AppRoutes name={this.state}/>
              { SettingsPanelComponent }
            </div>
            {/* {!token ? '': footerComponent } */}
          </div>
        </div>
       <SettingsIcon onClick={this.btntoggle} style={{float:'right'}}/>
      </div>
    );
  }
  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChange();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    const { i18n } = this.props;
    const body = document.querySelector('body');
    if(body !==null && this.props.location.pathname === '/layout/RtlLayout') {
      body.classList.add('rtl');
      i18n.changeLanguage('ar');
    }
    else {
      if(body !==null){
        body.classList.remove('rtl')
      i18n.changeLanguage('en');
       }
     
    }
  
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/user-pages/login-1', '/user-pages/login-2', '/user-pages/register-1', '/user-pages/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        const fullpage = document.querySelector('.page-body-wrapper')
        if(fullpage !==null){
          fullpage.classList.add('full-page-wrapper');;
         }
        
        break;
      } else {
        this.setState({
          isFullPageLayout: false
        })
       const fullpagewraper =  document.querySelector('.page-body-wrapper');
       if(fullpagewraper !==null){
        fullpagewraper.classList.remove('full-page-wrapper');
       }
      }
    }
  }

}

export default withTranslation()(withRouter(App));
