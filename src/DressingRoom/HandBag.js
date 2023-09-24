import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thuDoAction } from '../redux/actions/DressingRoomActions'

export default function HandBag() {
    const danhSachThuDo = useSelector(state => state.DressingRoomReducer.danhSachThuDo)
    const dispatch = useDispatch()
    const handBagData = danhSachThuDo.filter(item => item.type==='handbags')

    return (
        <div className="container">
            <div className="row">
                {handBagData.map((item, index) => {
            
                        return <div className='col-md-3 mb-3' key={index}>
                            <div className='card text-center'>
                                <img src={item.imgSrc_jpg} alt='' />
                                <h4><b>{item.name}</b></h4>
                                <button onClick={()=> {
                                    
                                    dispatch(thuDoAction(item))
                                }} className="w3-button w3-round-xxlarge w3-hover-pink w3-white">Thử đồ</button>
                            </div>
                        </div>
                    
                })}
            </div>
        </div>
    )
}
