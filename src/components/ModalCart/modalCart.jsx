import React from 'react'
import './index.scss'

const MODAL_STYLE={
position: 'fixed',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
padding: '150px',
backgroundColor: '#fff',
borderRadius: '40px',
border: 'solid 1px black',


}

const BACKGROUND_STYLE={
position:'fixed',
top: '0',
botton:'0',
left: '0',
right: '0',
backgroundColor: 'rgb (0,0,0,0.7)',
zIndex:'1000',

}


export default function modalCart({isOpen,children, setModalOpen}) {
    if (isOpen){
  return (
    <div style={BACKGROUND_STYLE}>
    <div style={MODAL_STYLE}>
      {children}
    </div>
    <div>
    <button className="closeModal" onClick ={setModalOpen}>x</button>
    </div>
    </div>
  )
}
return null
}
