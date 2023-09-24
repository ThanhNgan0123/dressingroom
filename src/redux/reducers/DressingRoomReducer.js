
import data from '../../DressingRoom/Data.json'
import { THU_DO } from '../types/DressingRoomTypes'
const initialState = {
    danhSachThuDo: data.tabPanes,
    selectedClothes: [
        {
            "id": "topcloth_3",
            "type": "topclothes",
            "name": "Top Cloth 3",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/clothes/topcloth3_show.jpg",
            "imgSrc_png": "./images/clothes/topcloth3.png"
          },
          {
            "id": "botcloth_1",
            "type": "botclothes",
            "name": "Bot Cloth 1",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/clothes/botcloth1_show.jpg",
            "imgSrc_png": "./images/clothes/botcloth1.png"
          },
          {
            "id": "shoes_2",
            "type": "shoes",
            "name": "Shoes 2",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/shoes/shoes2_show.jpg",
            "imgSrc_png": "./images/shoes/shoes2.png"
          },
          {
            "id": "handbag_2",
            "type": "handbags",
            "name": "Handbag 2",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/handbags/handbag2_show.jpg",
            "imgSrc_png": "./images/handbags/handbag2.png"
          },
          {
            "id": "necklace_2",
            "type": "necklaces",
            "name": "Necklace 2",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/necklaces/necklace2_show.jpg",
            "imgSrc_png": "./images/necklaces/necklace2.png"
          },
          {
            "id": "hairstyle_2",
            "type": "hairstyle",
            "name": "Hairstyle 2",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/hairstyle/hairstyle2_show.jpg",
            "imgSrc_png": "./images/hairstyle/hairstyle2.png"
          },
          {
            "id": "background_3",
            "type": "background",
            "name": "Background 3",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/background/background3_show.jpg",
            "imgSrc_png": "./images/background/background3.jpg"
          },
    ]

}

export default (state = initialState, action) => {
    switch (action.type) {
        case THU_DO: {
      
           let newSelectedClothes = [...state.selectedClothes]
           let index = newSelectedClothes.findIndex(item => item.type === action.item.type)
           if(index !== -1) {
            newSelectedClothes[index] = action.item
           }
           else {
            newSelectedClothes.push(action.item)
           }
           

            return { ...state, selectedClothes: newSelectedClothes }
        }


        default:
            return state
    }
}
