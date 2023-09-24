import React from 'react'
import DanhSachThuDo from './DanhSachThuDo'
import Model from './Model'
import './style.css'

export default function DressingRoom() {
    return (
        <div>
            <div classname="container-fluid">
                <h2 style={{textAlign:'center', fontSize: '40px', fontWeight:'800'}} className='mb-5 mt-3 text-white'>Virtual Dressing Room</h2>
            </div>
            <div className="row">
                <div className="col-md-7">
                   <DanhSachThuDo/>
                </div>
                <div className="col-md-5">
                    <Model/>
                </div>
            </div>
        </div>

    )
}
