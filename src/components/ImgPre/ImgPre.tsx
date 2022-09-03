import { RedoOutlined, UndoOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import {Image, Modal } from 'antd';
import { useState } from 'react';
import './ImgPre.css'

type Props={ src: string | undefined;licenceEncode: string | undefined }

const ImgPre: React.FC<Props> =({src,licenceEncode}: Props)=>{
    const [visible,setVisible]=useState(false)
    const [iconVisible,setIconVisible]=useState(false)
    const [isShowData,setIsShowData]=useState(false)
    const [rotate,setRotate]=useState(360)
    const [scale,setScale]=useState(1)
  return (
    <div>
      <div className='mask'>
      <Image src={src} preview={false} width={30} height={30} className='img' onClick={()=>{
        setVisible(true)
        setTimeout(()=>{
          setIconVisible(true)
        },500)
      }}/>
      </div>
      <Modal destroyOnClose visible={visible} footer={false} closable={false} onCancel={()=>{
        setVisible(false)
      }}
      afterClose={()=>{
        setIconVisible(false)
      }}
      style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Image src={src} preview={false} style={{transform: 'rotate(+'+rotate+'deg) scale('+scale+')',transition:'0.5s'}} />
            <UndoOutlined className='left-rotate'style={{color: !iconVisible? "#ffffff": rotate <=0 ?'#DDDDDD':'#000000',transition:'0.5s'}} onClick={()=>{
              if(rotate<=0){
                return
              }
              setRotate(rotate-90)
            }} />
          <RedoOutlined className='right-rotate' style={{color:!iconVisible? "#ffffff":rotate >=720 ?'#DDDDDD':'#000000',transition:'0.5s'}} onClick={()=>{
            if(rotate>=720){
              return
            }
              setRotate(rotate+90)
            }}/>
            <ZoomInOutlined className='grow-scale' style={{color:!iconVisible? "#ffffff":scale >=2 ?'#DDDDDD':'#000000',transition:'0.5s'}} onClick={()=>{
              if(scale>=2){
                return
              }
              setScale(scale+0.1)
            }} />
            <ZoomOutOutlined className='low-scale'style={{color:!iconVisible? "#ffffff":scale <=1 ?'#DDDDDD':'#000000',transition:'0.5s'}} onClick={()=>{
              if(scale<=1){
                return
              }
              setScale(scale-0.1)
            }} />
        <a style={{width:'100%',display:'flex',justifyContent:'center',marginTop:10}} onClick={()=>{
          setIsShowData(!isShowData)
        }}>提示：二维码识别困难时,可点击查看二维码原始数据</a>
        <div style={{width:450,margin:'10px auto', display: isShowData ? 'block' : 'none',transition:'0.5s'}}>{licenceEncode}</div>
      </Modal>
    </div>
  );
}

export default ImgPre