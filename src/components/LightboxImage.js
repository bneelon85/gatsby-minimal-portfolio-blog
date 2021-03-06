import React, { Component } from 'react'
import Modal from 'react-responsive-modal'

export class LightboxImage extends Component {
  state = {
    open: false,
  }

  openModal = () => {
    this.setState({ open: true })
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { title, caption, src } = this.props
    return (
      <div style={{display:'flex', alignItems:'center'}}>
        <Modal
          open={this.state.open}
          onClose={this.closeModal}
          center
          styles={{
            modal: {
              padding: 0,
            },
          }}
          showCloseIcon={true}
        >
          <div style={{display:'flex', alignItems:'center'}}>
          <img src={src} alt={title} style={{margin:'auto', maxWidth:'100%', maxHeight:'100%'}}/>
          </div>
          <div style={{ padding: 10}}>
            <span style={{ fontSize: 18, fontWeight: 'bold', margin:'auto', maxWidth:'100%', maxHeight:'100%' }}>{title}</span>
            <br />
            {caption}
          </div>
        </Modal>
        <img
          src={src}
          alt={title}
          onClick={() => {
            this.openModal()
          }}
        />
      </div>
    )
  }
}

export default LightboxImage
