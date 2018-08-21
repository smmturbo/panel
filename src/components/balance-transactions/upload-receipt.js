import React, { Component } from 'react'
import { Button, Card, CardBody, CardHeader } from 'reactstrap'
import Dropzone from 'react-dropzone'

import { LoadingMessage} from '../interface'

class UploadBankTransferReceipt extends Component {

  state = { fileUploadPending: false, uploadedFile: null }

  onDropFile = (files) => {
    this.setState({fileUploadPending: true, uploadedFile: files[0]})
    return true
  }

  uploadFile = () => {
    const { uploadedFile } = this.state
    if(!uploadedFile) {
      alert('Por favor selecione um arquivo')
      this.resetFileUpload()
      return false
    }

    this.props.handleAction(uploadedFile)

    this.resetFileUpload()
    return true
  }

  // onFileDelete = (file, key) => {
  //   const { firebase } = this.props
  //
  //   // deleteFile(storagePath, dbPath)
  //   //return firebase.deleteFile(file.fullPath, `${filesPath}/${key}`)
  // }

  resetFileUpload = () => {
    this.setState({fileUploadPending: false, uploadedFile: null})
  }

  renderFileUploadArea() {

    const { fileUploadPending, uploadedFile } = this.state

    if(!fileUploadPending || !uploadedFile)  {
      return null
    }

    return (
      <div className="my-2 text-center" >
        <div
          style={{textAlign: 'center',
                  border: '1px solid #0044aa',
                  padding: '5px',
                  margin: '10px'
                }}
        >
          Arquivo selecionado: {uploadedFile.name}
        </div>

        <p><Button onClick={this.uploadFile} color="success" >Enviar arquivo</Button></p>

        <a href="javascript:;" onClick={this.resetFileUpload} >cancelar</a>
      </div>
    )
  }

  renderDropZone = () =>  {
    return (<Dropzone onDrop={this.onDropFile} multiple={false}
            style={{textAlign: 'center',
                    border: '1px solid #0044aa',
                    padding: '5px',
                    margin: '10px',
                    cursor: 'pointer'
                  }}
            >
              <div>
                Clique para selecionar o arquivo
              </div>
          </Dropzone>)
  }

  render()  {

    const { fileUploadPending } = this.state
    const { processing } = this.props

    return (
        <div className="my-3" >
          <Card>
            <CardHeader>Inserir comprovante de transferência</CardHeader>
            <CardBody>

              { processing ? <LoadingMessage /> : fileUploadPending ? this.renderFileUploadArea() : this.renderDropZone() }

            </CardBody>
          </Card>
        </div>
    )
  }
}

export { UploadBankTransferReceipt }
