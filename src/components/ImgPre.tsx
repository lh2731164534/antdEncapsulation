import {Image, message, Modal } from 'antd';
import { useState } from 'react';
import './imgPre.css'
function ImgPre({src,licenceEncode}: { src: string | undefined;licenceEncode: string | undefined }){
    const [visible,setVisible]=useState(false)
    const [isShowData,setIsShowData]=useState(false)
  return (
    <div>
      <div className='mask'>
      <Image src={src} preview={false} width={30} height={30} className='img' onClick={()=>{
        setVisible(true)
      }}/>
      </div>
      <Modal destroyOnClose visible={visible} footer={false} closable={false} onCancel={()=>{
        setVisible(false)
      }}
      style={{display:'flex',justifyContent:'center'}}>
          <Image src={src} preview={false} />
        <a style={{width:'100%',display:'flex',justifyContent:'center'}} onClick={()=>{
          setIsShowData(!isShowData)
        }}>提示：二维码识别困难时,可点击查看二维码原始数据</a>
        <div style={{width:450,margin:'10px auto', display: isShowData ? 'block' : 'none',transition:'0.5s'}}>{licenceEncode}</div>
      </Modal>
    </div>
  );
}

export default ImgPre