import React from 'react'
import Background from './Background'
import BotCloth from './BotCloth'
import HairStyle from './HairStyle'
import HandBag from './HandBag'
import Necklace from './Necklace'
import TopCloth from './TopCloth'
import Shoes from './Shoes'

export default function DanhSachThuDo() {
    return (
        <div>
            <ul className="nav nav-pills ml-5">
                <li className="nav-item">
                    <a className="nav-link active  btn-default" data-toggle="pill" href="#tabTopClothes">Áo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  btn-default" data-toggle="pill" href="#tabBotClothes">Quần</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#tabShoes">Giày dép</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#tabHandBags">Túi xách</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#tabNecklaces">Dây chuyền</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#tabHairStyle">Kiểu tóc</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#tabBackground">Nền</a>
                </li>
            </ul>
            <div className="well ">
                {/* Tab panes */}
                <div className="tab-content">
                    <div className="tab-pane container active m-3" id="tabTopClothes">
                        <TopCloth/>
                    </div>
                    <div className="tab-pane container fade m-3" id="tabBotClothes">
                       <BotCloth/>
                    </div>
                    <div className="tab-pane container fade m-3" id="tabShoes">
                        <Shoes/>
                    </div>
                    <div className="tab-pane container fade m-3" id="tabHandBags">
                        <HandBag/>
                    </div>
                    <div className="tab-pane container fade m-3" id="tabNecklaces">
                        <Necklace/>
                    </div>
                    <div className="tab-pane container fade m-3" id="tabHairStyle">
                        <HairStyle/>
                    </div>
                    <div className="tab-pane container fade m-3" id="tabBackground">
                        <Background/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
