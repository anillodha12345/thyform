import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
// import { Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import "./Sidebar.css";
import { MdDashboardCustomize } from "react-icons/md";
import { GiChart } from "react-icons/gi";
import { AiOutlineBars, AiOutlineRight } from "react-icons/ai";
// MdDashboardCustomize
// GiChart
// AiOutlineBars


class Sidebar extends Component {
  state = {};
state={
  color:this.props.name.color,
  backgroundColor:this.props.name.backgroundColor
  
}
handlecolor = ()=>{
  this.setState({
    color:this.props.name.color,
    backgroundColor:this.props.name.backgroundColor
  })
}

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }

  }
componentDidMount(){
  this.handlecolor();
}
  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
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
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.setState({chartsMenuOpen:true})
    }
  }
  render () {

    console.log(this.state.chartsMenuOpen,'fdsfsdf',this.props.name.backgroundColor,'this.props.darkmodethis.props.darkmodethis.props.darkmodethis.props.darkmode')
    return (
      
      <nav className="sidebar sidebar-offcanvas " id="sidebar" style={this.props.name}>
         <div className='menu-icon-btn '>
         <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <i className="mdi mdi-menu"></i>
          </button>  <div className="logo-thyform text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/">Thyform</Link>
        </div>
         </div>
        {/* <div className='row d-flex justify-content-between align-items-center p-3 sidebar_container'>
          <div className='col-md-2'>
           
          </div> */}
          {/* <div className='col-md-10'>  */}
         {/* <div className="text-center sidebar-brand-wrapper d-flex align-items-center "> */}
          {/* <a className="sidebar-brand brand-logo" href="index.html">Star Admin</a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"></a> */}
          {/* <Link to='/'>
            <img src='https://www.bootstrapdash.com/demo/star-admin2-pro/template/images/logo.svg' alt='loading...'/>
          </Link> */}
         {/* <h1 className='heading'>Thyform</h1> */}
        {/* </div> */}
          {/* </div> */}
        {/* </div> */}
        
       
        <ul className="nav">
        
          {/* <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                    <img className="img-xs rounded-circle" src={ require("../../assets/images/faces/face8.jpg")} alt="profile" />
                      <div className="dot-indicator bg-success"></div>
                    </div>
                    <div className="text-wrapper">
                      <p className="profile-name">Allen Moreno</p>
                      <p className="designation">Premium user</p>
                    </div>
                    
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    <Trans>Manage Accounts</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    <Trans>Change Password</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    <Trans>Check Inbox</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    <Trans>Sign Out</Trans>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li> */}
          <li className={this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
         <Link className="nav-link" to="/dashboard">
         {/* <i className="mdi mdi-grid-large menu-icon"></i> */}
         <i className='nav_icon'><MdDashboardCustomize /></i>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>
          {/* <li className={ this.isPathActive('/Jotfrom') ? 'nav-item active' : 'nav-item' }> */}
          <li className={ this.isPathActive('/Jotfrom') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/jotform">
            <i className='nav_icon'><AiOutlineBars /></i>
              <span className="menu-title" style={{color:this.props.name.sidebarcolor}}><Trans>Create Form</Trans></span>
            </Link>
          </li>
          {/* <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
          <div className={ this.state.createFormMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('createFormMenuOpen') } data-toggle="collapse">
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><Trans>Create From</Trans></span>
            </Link>
            <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.createFormMenuOpen }>
              <ul className="nav flex-column sub-menu">
              <h6 className='text-center'>Basic</h6>
                <li className="nav-item "> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons"><Trans>Heading</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Full Name</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans> 
                Email</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans></Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Phone</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Date picker</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Appointment</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Signature</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Fill the Blank</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Product List</Trans></Link></li>
                <h6 className='text-center'>Basic Element</h6>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Short text</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Long text</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Paragraph</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Dropdown</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Single choice</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Multiple Choice</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Number</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Image</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>File Upload</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Time</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Captcha</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Spinner</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Submit</Trans></Link></li>
                <h6 className='text-center'>Survey Elements</h6>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>input Table</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Star Rating</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Scale Rating</Trans></Link></li>
                <h6 className='text-center'>Page Element</h6>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Divider</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Section Collapse</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>page Braak</Trans></Link></li>
              </ul>
            </Collapse>
         </li> */}
     
          {/* <li className={ this.isPathActive('/charts/ChartJs') ? 'nav-item active' : 'nav-item' } >
            <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('chartsMenuOpen ') } data-toggle="collapse">
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title"><Trans>Chart</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.chartsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/charts/ChartJs') ? 'nav-link active' : 'nav-link' } to="/charts/ChartJs"><Trans>Chart</Trans></Link></li>               
               </ul>
              
            </Collapse>
             
           
          </li> */}
          {/* <li className={ this.isPathActive('/charts/Chart-js') ? 'nav-item active' : 'nav-item' }>
          <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('chartsMenuOpen') } data-toggle="collapse">
            <Link className="nav-link" to="/chart">
            

              <i className='nav_icon'><GiChart /></i>
              <span className="menu-title"><Trans>Charts</Trans></span>
            </Link>
            <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.chartsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/charts/Chart-js"><Trans>Charts</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('') ? 'nav-link active' : 'nav-link' } to="/"><Trans>Advance Charts</Trans></Link></li>
              </ul>
            </Collapse>
         </li> */}
               {/* <li className={ this.isPathActive('/Widgets') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title"><Trans>Widgets</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons"><Trans>Buttons</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns"><Trans>Dropdowns</Trans></Link></li>
              </ul>
            </Collapse>
          </li> */}
          <li className={ this.isPathActive('/charts') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' }
             onClick={ (e) =>{e.preventDefault(); this.toggleMenuState('chartsMenuOpen')} }
              data-toggle="collapse">
            <i className='nav_icon'><GiChart /></i>
              <span className="menu-title" style={{color:this.props.name.sidebarcolor}}><Trans>Charts</Trans></span>
              {/* <i className="menu-arrow"></i> */}
              {/* <AiOutlineRight className="menu-arrow"/> */}
            </div>
            {/* <Collapse in={ this.state.chartsMenuOpen }> */}
            {/* <Collapse> */}
            <Collapse in={this.state.chartsMenuOpen}>
            <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/chart') ? 'nav-link active' : 'nav-link' } to="/chart" style={{color:this.props.name.sidebarcolor}}><Trans>ChartJs</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/morris') ? 'nav-link active' : 'nav-link' } to="/morris" style={{color:this.props.name.sidebarcolor}}><Trans>Morris</Trans></Link></li>
              </ul>
            </Collapse>
             
            {/* </Collapse> */}
          </li> 
          {/* <li className={ this.isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('tablesMenuOpen') }>
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title"><Trans>UI Elements</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={ this.isPathActive('/icons') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('iconsMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-account-box-outline menu-icon"></i>
              <span className="menu-title"><Trans>UI Elements</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={ this.isPathActive('/charts') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('chartsMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-chart-line menu-icon"></i>
              <span className="menu-title"><Trans>Advance UI</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li> */}
          {/* <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title"><Trans>Forms and Datas</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title"><Trans>Form Elements</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title"><Trans>Editors</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title"><Trans>Charts</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title"><Trans>Tables</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li> */}
          {/* <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title"><Trans>Popups</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title"><Trans>Notifications</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title"><Trans>Icons</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title"><Trans>Maps</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li> */}
          {/* <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title"><Trans>Pages</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title"><Trans>User Pages</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title"><Trans>Error Pages</Trans></span>
              <i className="menu-arrow"></i>
            </div>
          </li> */}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);