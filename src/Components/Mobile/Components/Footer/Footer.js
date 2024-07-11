import "./Footer.css"
import EdniproLogo from "../../../../eDniproLogo.png"

function Footer(){
    return(

        <div className="FooterBody">

            <div className="FooterInnerBody">
                <img src={EdniproLogo} alt="EdniproLogo" className="EdniproLogo"></img>
                <div className="FooterContactsHeader">Контакти</div>
                <div className="FooterContactsTypeHeader text-margin">Оператор паркування</div>
                <div className="text-margin">Понеділок - неділя: 08:00 - 19:00</div>
                <div className="text-margin">+38 098 058 31 59</div>
                <div className="links text-margin">info@psg.ua <br/>https://psg.ua</div>
                <div className="FooterContactsTypeHeader">Інспекція з паркування</div>
                <div className="text-margin callendar">Понеділок - четвер: 08:00 - 17:00<br/>П'ятниця: 08:00 - 15:45</div>
                <div className="text-margin">+38 068 578 04 37</div>
                <div className="links text-margin">dpparkcontrol@gmail.com<br/>https://ipkp.dniprorada.gov.ua</div>
            </div>
            
        </div>

    )
}

export default Footer