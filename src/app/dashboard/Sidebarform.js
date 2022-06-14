import React, {  useRef ,useEffect} from 'react';
import $ from "jquery";
import './Sideform.scss'

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const formData = [
  {
    type: "header",
    subtype: "h3",
    label: "FormBuilder in Jotform"
  },
  {
    type: "paragraph",
    label: "This is a demonstration of formBuilder running in a jotform project."
  }
];



// const SideBarForm = ({ openClass,sidebar,setSidebar }) => {
  const SideBarForm = (props) => {
  const  fb = useRef();
  console.log('handleOn',props.sidebar,props.setSidebar)
  console.log('props.side',props)
  // const handleInputChange = useCallback(event => {
  //   setSidebar(event.target.value)
  // }, [setSidebar])
useEffect(()=>{
  $(fb.current).formBuilder({
    formData,
    onSave: (event, form_schema) => alert(JSON.stringify(form_schema))
  });
})
  return (
    <nav id='navbarform' className={props.openClass === 'open' ? 'opneSidebar' : ''}  >
{/* {/ onClick={handleInputChange} /} */}
      {/* {/ <div>closed</div> /} */}
      <div id="fb-editor" ref={fb} style={{backgroundColor:props.name.chart}}/>
      
    </nav>
  );
};

export default SideBarForm;