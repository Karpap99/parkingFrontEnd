import logo from "../../logo.png";
import "./Mobile.css";
import Image1 from "../../Img1.png";
import Image2 from "../../Img2.png";
import Image3 from "../../Img3.png";
import Image4 from "../../Img4.png";
import Image5 from "../../Img5.png";
import Image6 from "../../Img6.png";
import Functional from "./Components/Functional/Functional";
import ParkingPrice from "./Components/ParkingPrice/ParkingPrice";
import ProjectMap from "./Components/Map/Map"
import AppPreview from "../../AppPreview.png"
import GoogleDownloadButton from "../../downloadfromGoogle.png"
import AppStoreDonloadButton from "../../downloadfromAppStore.png"
import Footer from "./Components/Footer/Footer";
import ParkingPaying from "./Components/ParkingPaying/ParkingPaying";
function Mobile(){
    return(
        <div className="Body">
            <img src={logo} alt="logo" className="Logo"/>
            <h1 className="text-center font-bold text-3xl header-text">Оплата паркування<br/> у місті Дніпро</h1>
            <Functional ImageSrc={Image1} Text={"Оплата паркування"}></Functional>
            <Functional ImageSrc={Image2} Text={"Купівля абонементів"} orientation="right" ></Functional>
            <Functional ImageSrc={Image3} Text={"Додавання данних авто"}></Functional>
            <Functional ImageSrc={Image4} Text={"Перегляд історії паркувань"} orientation="right"></Functional>
            <Functional ImageSrc={Image5} Text={"Повернення автівки"}></Functional>
            <Functional ImageSrc={Image6} Text={"Перегляд штрафів"} orientation="right"></Functional>
            <h1 className="text-center font-bold text-3xl header-text">Зони та вартість<br/> паркомісць</h1>
            <ParkingPrice Price={18} ZoneName={"Червона"} Title={"Центральна частина міста, найвища вартість паркування"}></ParkingPrice>
            <ParkingPrice Price={15} ZoneName={"Жовта"} Title={"Прилеглі до центру райони, середня вартість паркування"}></ParkingPrice>
            <ParkingPrice Price={13} ZoneName={"Зелена"} Title={"Околиці міста, найнижча вартість паркування"}></ParkingPrice>
            <h1 className="text-center font-bold text-3xl header-text">Паркувальні <br/> Зони на Мапі</h1>
            <ProjectMap></ProjectMap>
            <h1 className="text-center font-bold text-3xl header-text">Як оплачувати <br/> паркування?</h1>
            <ParkingPaying></ParkingPaying>
            <h1 className="text-center font-bold text-3xl header-text">Завантажуй додаток</h1>
            <img src={AppPreview} alt="AppPreview" className="AppPreview"></img>
            <h1 className="text-center font-bold text-2xl header-text">Мобільний застосунок</h1>
            <h1 className="text-center font-bold text-large header-text">
                Зручна оплата паркування та інші міські сервіси.<br/> 
                Потрібний паркувальний майданчик <br/> 
                визначається автоматично — або ви можете<br/>
                 обрати його самостійно зі списку. Оплачуйте<br/>
                  погодинно або придбайте абонемент.</h1>
            <div className="DownloadButtons">
                <div className="ButtonBlock">
                    <img src={GoogleDownloadButton} alt="GoogleDownload" className="DownLoadButton"></img>
                </div>
                <div className="ButtonBlock">
                    <img src={AppStoreDonloadButton} alt="AppStoreDownload" className="DownLoadButton"></img>
                </div>
            </div>
            <Footer></Footer> 
        </div>
    )
}

export default Mobile