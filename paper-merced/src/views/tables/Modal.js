// import React from 'react';
// import ReactDOM from 'react-dom';

// import {
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     UncontrolledDropdown,
// } from "reactstrap";


// function Modal (props) {
//     if(!props.isOpen){
//         return null;
//     }



//     return ReactDOM.createPortal(
//         <div className="timeline-footer">
//             <UncontrolledDropdown>
//                 <DropdownToggle
//                     caret
//                     className="btn-round"
//                     color="danger"
//                     data-toggle="dropdown"
//                     type="button"
//                     >
//                         <i className="nc-icon nc-settings-gear-65" />
//                 </DropdownToggle>
//                 <DropdownMenu persist>
//                     <DropdownItem
//                         href="#"
//                         onClick={props.isOpen}
//                     >
//                         Action
//                     </DropdownItem>
//                     <DropdownItem
//                         href="#"
//                         onClick={props.isOpen}
//                     >
//                         Another action
//                     </DropdownItem>
//                     <DropdownItem
//                         href="#"
//                         onClick={props.isOpen}
//                     >
//                         Something else here
//                     </DropdownItem>
//                 </DropdownMenu>
//             </UncontrolledDropdown>
//         </div>,
//         document.getElementById('modal')
//     )
// }

// export default Modal;