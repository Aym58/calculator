var EURexchange;
var USDexchange;
var CADexchange;

showConvert=function(){
    var ajax=new XMLHttpRequest();
    ajax.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    ajax.responseType='json';
    ajax.onload=function(){
        window.kurs={'UAN':1};
        for(var i=0; i<this.response.length;i++){
        kurs[this.response[i].cc]=this.response[i].rate;
        }
    document.getElementById("exchangeUSD1").innerHTML = this.response[26].cc;
    document.getElementById("exchangeUSD2").innerHTML = this.response[26].rate + " " + "грн.";
    document.getElementById("exchangedate").innerHTML = "Курс НБУ на" + " " + this.response[26].exchangedate;
    document.getElementById("exchangeEUR1").innerHTML = this.response[32].cc;
    document.getElementById("exchangeEUR2").innerHTML = this.response[32].rate + " " + "грн.";
    document.getElementById("exchangeCAD1").innerHTML = this.response[1].cc;
    document.getElementById("exchangeCAD2").innerHTML = this.response[1].rate + " " + "грн.";
    USDexchange = this.response[26].rate;
    EURexchange = this.response[32].rate;
    CADexchange = this.response[1].rate;
    }
    ajax.send(null);
}
showConvert();

function show(switchInput)
{
    switch(switchInput)
    {
        case 1:
            document.getElementById('input1').style.display="block";
            document.getElementById('input2').style.display="none";
            document.getElementById('input3').style.display="none";
            document.getElementById('input4').style.display="none";
            document.getElementById('input5').style.display="none";
            document.getElementById('input6').style.display="none";
            document.getElementById('Result1').style.display="block";
            document.getElementById('Result2').style.display="none";
            document.getElementById('Result3').style.display="none";
            document.getElementById('Result4').style.display="none";
            document.getElementById('Result5').style.display="none";
            document.getElementById('Result6').style.display="none";
            document.getElementById('selectType1').classList.add('selectTypeSelected');
            document.getElementById('selectType2').classList.remove('selectTypeSelected');
            document.getElementById('selectType3').classList.remove('selectTypeSelected');
            document.getElementById('selectType4').classList.remove('selectTypeSelected');
            document.getElementById('selectType5').classList.remove('selectTypeSelected');
            document.getElementById('selectType6').classList.remove('selectTypeSelected');
            break;
        case 2:
            document.getElementById('input1').style.display="none";
            document.getElementById('input2').style.display="block";
            document.getElementById('input3').style.display="none";
            document.getElementById('input4').style.display="none";
            document.getElementById('input5').style.display="none";
            document.getElementById('input6').style.display="none";
            document.getElementById('Result1').style.display="none";
            document.getElementById('Result2').style.display="block";
            document.getElementById('Result3').style.display="none";
            document.getElementById('Result4').style.display="none";
            document.getElementById('Result5').style.display="none";
            document.getElementById('Result6').style.display="none";
            document.getElementById('selectType1').classList.remove('selectTypeSelected');
            document.getElementById('selectType2').classList.add('selectTypeSelected');
            document.getElementById('selectType3').classList.remove('selectTypeSelected');
            document.getElementById('selectType4').classList.remove('selectTypeSelected');
            document.getElementById('selectType5').classList.remove('selectTypeSelected');
            document.getElementById('selectType6').classList.remove('selectTypeSelected');
            break;
        case 3:
            document.getElementById('input1').style.display="none";
            document.getElementById('input2').style.display="none";
            document.getElementById('input3').style.display="block";
            document.getElementById('input4').style.display="none";
            document.getElementById('input5').style.display="none";
            document.getElementById('input6').style.display="none";
            document.getElementById('Result1').style.display="none";
            document.getElementById('Result2').style.display="none";
            document.getElementById('Result3').style.display="block";
            document.getElementById('Result4').style.display="none";
            document.getElementById('Result5').style.display="none";
            document.getElementById('Result6').style.display="none";
            document.getElementById('selectType1').classList.remove('selectTypeSelected');
            document.getElementById('selectType2').classList.remove('selectTypeSelected');
            document.getElementById('selectType3').classList.add('selectTypeSelected');
            document.getElementById('selectType4').classList.remove('selectTypeSelected');
            document.getElementById('selectType5').classList.remove('selectTypeSelected');
            document.getElementById('selectType6').classList.remove('selectTypeSelected');
            break;
        case 4:
            document.getElementById('input1').style.display="none";
            document.getElementById('input2').style.display="none";
            document.getElementById('input3').style.display="none";
            document.getElementById('input4').style.display="block";
            document.getElementById('input5').style.display="none";
            document.getElementById('input6').style.display="none";
            document.getElementById('Result1').style.display="none";
            document.getElementById('Result2').style.display="none";
            document.getElementById('Result3').style.display="none";
            document.getElementById('Result4').style.display="block";
            document.getElementById('Result5').style.display="none";
            document.getElementById('Result6').style.display="none";
            document.getElementById('selectType1').classList.remove('selectTypeSelected');
            document.getElementById('selectType2').classList.remove('selectTypeSelected');
            document.getElementById('selectType3').classList.remove('selectTypeSelected');
            document.getElementById('selectType4').classList.add('selectTypeSelected');
            document.getElementById('selectType5').classList.remove('selectTypeSelected');
            document.getElementById('selectType6').classList.remove('selectTypeSelected');
            break;
        case 5:
            document.getElementById('input1').style.display="none";
            document.getElementById('input2').style.display="none";
            document.getElementById('input3').style.display="none";
            document.getElementById('input4').style.display="none";
            document.getElementById('input5').style.display="block";
            document.getElementById('input6').style.display="none";
            document.getElementById('Result1').style.display="none";
            document.getElementById('Result2').style.display="none";
            document.getElementById('Result3').style.display="none";
            document.getElementById('Result4').style.display="none";
            document.getElementById('Result5').style.display="block";
            document.getElementById('Result6').style.display="none";
            document.getElementById('selectType1').classList.remove('selectTypeSelected');
            document.getElementById('selectType2').classList.remove('selectTypeSelected');
            document.getElementById('selectType3').classList.remove('selectTypeSelected');
            document.getElementById('selectType4').classList.remove('selectTypeSelected');
            document.getElementById('selectType5').classList.add('selectTypeSelected');
            document.getElementById('selectType6').classList.remove('selectTypeSelected');
            break;
        case 6:
            document.getElementById('input1').style.display="none";
            document.getElementById('input2').style.display="none";
            document.getElementById('input3').style.display="none";
            document.getElementById('input4').style.display="none";
            document.getElementById('input5').style.display="none";
            document.getElementById('input6').style.display="block";
            document.getElementById('Result1').style.display="none";
            document.getElementById('Result2').style.display="none";
            document.getElementById('Result3').style.display="none";
            document.getElementById('Result4').style.display="none";
            document.getElementById('Result5').style.display="none";
            document.getElementById('Result6').style.display="block";
            document.getElementById('selectType1').classList.remove('selectTypeSelected');
            document.getElementById('selectType2').classList.remove('selectTypeSelected');
            document.getElementById('selectType3').classList.remove('selectTypeSelected');
            document.getElementById('selectType4').classList.remove('selectTypeSelected');
            document.getElementById('selectType5').classList.remove('selectTypeSelected');
            document.getElementById('selectType6').classList.add('selectTypeSelected');
    }
}


function func1(){   
    var year = Number(document.getElementById("year").value);
    var volume = Number(document.getElementById("volume").value);
    var priceCurr = Number(document.getElementById("price").value);
    var selectCurrency = document.getElementById("selectcurrency");
    var selectCurrencyValue = selectCurrency.value;
    var ExchangeCoef;
    var Exchange;
    if (selectCurrencyValue == "USD") {
        ExchangeCoef = EURexchange / USDexchange;
        Exchange = USDexchange;
    } else if (selectCurrencyValue == "EUR") {
        ExchangeCoef = 1;
        Exchange = EURexchange;
    }
    else if (selectCurrencyValue == "CAD") {
        ExchangeCoef = EURexchange / CADexchange;
        Exchange = CADexchange;
    } else alert("Выберите валюту");

    var price = Math.round(priceCurr * Exchange * 100)/100;

    var DutyRate = 0.1;    
    var duty = Math.round(DutyRate * price * 100)/100;
    
    var yearCoef = 2022 - 1 - year;
    if (yearCoef <= 1) {
        yearCoef = 1;
    } else if (yearCoef >= 15) {
        yearCoef = 15;
    }

    var exciseCoef;
    if (document.getElementById("RADgasoline").checked == true && volume <= 3000) {
        exciseCoef =  50;
    } else if (document.getElementById("RADgasoline").checked == true && volume > 3000) {
        exciseCoef =  100;
    } else if (document.getElementById("RADdiesel").checked == true && volume <= 3500) {
        exciseCoef =  75;
    } else if (document.getElementById("RADdiesel").checked == true && volume > 3500) {
        exciseCoef =  150;
    } else {
        alert("Выберите тип двигателя");
    }  
    var excise = Math.round(volume/1000 * yearCoef * exciseCoef * EURexchange * 100)/100;

    var VatBase = Math.round((price + duty + excise) * 100)/100;

    var VatRate = 0.2;  
    var vat = Math.round(VatRate * VatBase * 100)/100;

    var result = Math.round((excise + vat + duty)*100)/100;
    var resultCurr = Math.round(result / Exchange * 100)/100;

    document.getElementById("DutyBase1").innerHTML = price.toFixed(2) + " " + "грн.";
    document.getElementById("DutyRate1").innerHTML = DutyRate * 100 + "%";
    document.getElementById("DutyAmount1").innerHTML = duty.toFixed(2) + " " + "грн.";

    document.getElementById("ExiceBase1").innerHTML = volume + " куб.см/1000";
    document.getElementById("ExiceRate1").innerHTML = yearCoef + "x" + exciseCoef + " EUR";
    document.getElementById("ExiceAmount1").innerHTML = excise.toFixed(2) + " " + "грн.";

    document.getElementById("VatBase1").innerHTML = VatBase.toFixed(2) + " " + "грн.";
    document.getElementById("VatRate1").innerHTML = VatRate*100 + "%";
    document.getElementById("VatAmount1").innerHTML = vat.toFixed(2) + " " + "грн.";

    document.getElementById("resultUSD1").innerHTML = resultCurr.toFixed(2) + " " + selectCurrencyValue;
    document.getElementById("resultUAH1").innerHTML = result.toFixed(2) + " " + "грн.";
}

function func2(){   

    var batteryVolume = Number(document.getElementById("batteryVolume").value);
    var price = 0;
    var duty = 0;
    var DutyRate = 0;
    var VatRate = 0;
    var excise = Math.round(batteryVolume * EURexchange * 100)/100;
    var vat = 0;
    var result = Math.round((excise + vat + duty)*100)/100;
    var Exchange = USDexchange;
    var resultCurr = Math.round(result / Exchange * 100)/100;
    
    document.getElementById("DutyBase2").innerHTML = "-//-";
    document.getElementById("DutyRate2").innerHTML = DutyRate * 100 + "%";
    document.getElementById("DutyAmount2").innerHTML = duty.toFixed(2) + " " + "грн.";

    document.getElementById("ExiceBase2").innerHTML = batteryVolume + " кВт*ч";
    document.getElementById("ExiceRate2").innerHTML = "1 EUR/кВт*ч";
    document.getElementById("ExiceAmount2").innerHTML = excise.toFixed(2) + " " + "грн.";

    document.getElementById("VatBase2").innerHTML = "-//-";
    document.getElementById("VatRate2").innerHTML = VatRate*100 + "%";
    document.getElementById("VatAmount2").innerHTML = vat.toFixed(2) + " " + "грн.";

    document.getElementById("resultUSD2").innerHTML = resultCurr.toFixed(2) + " " + "USD";
    document.getElementById("resultUAH2").innerHTML = result.toFixed(2) + " " + "грн.";

}

function func3(){   
    var volume = Number(document.getElementById("volume3").value);
    var priceCurr = Number(document.getElementById("price3").value);
    var selectCurrency = document.getElementById("selectcurrency3");
    var selectCurrencyValue = selectCurrency.value;
    var ExchangeCoef;
    var Exchange;
    if (selectCurrencyValue == "USD") {
        ExchangeCoef = EURexchange / USDexchange;
        Exchange = USDexchange;
    } else if (selectCurrencyValue == "EUR") {
        ExchangeCoef = 1;
        Exchange = EURexchange;
    }
    else if (selectCurrencyValue == "CAD") {
        ExchangeCoef = EURexchange / CADexchange;
        Exchange = CADexchange;
    } else alert("Выберите валюту");

    var price = Math.round(priceCurr * Exchange * 100)/100;

    var DutyRate = 0.1;    
    var duty = Math.round(DutyRate * price * 100)/100;
    
    var exciseCoef;
    if (volume > 800) {
        exciseCoef =  0.447;
    } else if (volume <= 800 && volume > 500) {
        exciseCoef =  0.443;
    } else if (volume <= 500) {
        exciseCoef =  0.062;
    } else {
        alert("Ведите объем двигателя");
    }  
    var excise = Math.round(volume * exciseCoef * EURexchange * 100)/100;

    var VatBase = Math.round((price + duty + excise) * 100)/100;

    var VatRate = 0.2;  
    var vat = Math.round(VatRate * VatBase * 100)/100;

    var result = Math.round((excise + vat + duty)*100)/100;
    var resultCurr = Math.round(result / Exchange * 100)/100;

    document.getElementById("DutyBase3").innerHTML = price.toFixed(2) + " " + "грн.";
    document.getElementById("DutyRate3").innerHTML = DutyRate * 100 + "%";
    document.getElementById("DutyAmount3").innerHTML = duty.toFixed(2) + " " + "грн.";

    document.getElementById("ExiceBase3").innerHTML = volume + " куб.см";
    document.getElementById("ExiceRate3").innerHTML = exciseCoef + " EUR";
    document.getElementById("ExiceAmount3").innerHTML = excise.toFixed(2) + " " + "грн.";

    document.getElementById("VatBase3").innerHTML = VatBase.toFixed(2) + " " + "грн.";
    document.getElementById("VatRate3").innerHTML = VatRate*100 + "%";
    document.getElementById("VatAmount3").innerHTML = vat.toFixed(2) + " " + "грн.";

    document.getElementById("resultUSD3").innerHTML = resultCurr.toFixed(2) + " " + selectCurrencyValue;
    document.getElementById("resultUAH3").innerHTML = result.toFixed(2) + " " + "грн.";
}

function func4(){   
    var volume = Number(document.getElementById("volume4").value);
    var priceCurr = Number(document.getElementById("price4").value);
    var selectCurrency = document.getElementById("selectcurrency4");
    var selectCurrencyValue = selectCurrency.value;

    var selectAge = document.getElementById("selectAge4");
    var selectAgeValue = selectAge.value;

    var selectLoad = document.getElementById("selectLoad4");
    var selectLoadValue = selectLoad.value;

    var ExchangeCoef;
    var Exchange;

    var ExiceRate;

    if (selectCurrencyValue == "USD") {
        ExchangeCoef = EURexchange / USDexchange;
        Exchange = USDexchange;
    } else if (selectCurrencyValue == "EUR") {
        ExchangeCoef = 1;
        Exchange = EURexchange;
    }
    else if (selectCurrencyValue == "CAD") {
        ExchangeCoef = EURexchange / CADexchange;
        Exchange = CADexchange;
    } else alert("Выберите валюту");

    var price = Math.round(priceCurr * Exchange * 100)/100;
    var DutyRate;

    if (document.getElementById("RADgasoline4").checked == true) {        
        DutyRate = 0.05;
        if (selectAgeValue == "under5") {            
            if (selectLoadValue == "under5") {
                ExiceRate = 0.02;
            } else if (selectLoadValue == "5to20") {
                ExiceRate = 0.026;
            } else if (selectLoadValue == "20more") {
                ExiceRate = 0.026;
            } else alert("Выберите грузоподъемность");
        } else if (selectAgeValue == "5to8") {
            if (selectLoadValue == "under5") {
                ExiceRate = 0.8;
            } else if (selectLoadValue == "5to20") {
                ExiceRate = 1.04;
            } else if (selectLoadValue == "20more") {
                ExiceRate = 1.04;
            } else alert("Выберите грузоподъемность");            
        } else if (selectAgeValue == "8more") {            
            if (selectLoadValue == "under5") {
                ExiceRate = 1;
            } else if (selectLoadValue == "5to20") {
                ExiceRate = 1.3;
            } else if (selectLoadValue == "20more") {
                ExiceRate = 1.3;
            } else alert("Выберите грузоподъемность");
        } else alert("Выберите возраст");        
    } else if (document.getElementById("RADdiesel4").checked == true) {        
        DutyRate = 0.1;
        if (selectAgeValue == "under5") {
            if (selectLoadValue == "under5") {                
                ExiceRate = 0.02;
            } else if (selectLoadValue == "5to20") {
                ExiceRate = 0.026;
            } else if (selectLoadValue == "20more") {
                ExiceRate = 0.033;
            } else alert("Выберите грузоподъемность");   
        } else if (selectAgeValue == "5to8") {
            if (selectLoadValue == "under5") {
                ExiceRate = 0.8;
            } else if (selectLoadValue == "5to20") {
                ExiceRate = 1.04;
            } else if (selectLoadValue == "20more") {
                ExiceRate = 1.32;
            } else alert("Выберите грузоподъемность");            
        } else if (selectAgeValue == "8more") {
            if (selectLoadValue == "under5") {
                ExiceRate = 1;
            } else if (selectLoadValue == "5to20") {
                ExiceRate = 1.3;
            } else if (selectLoadValue == "20more") {
                ExiceRate = 1.65;
            } else alert("Выберите грузоподъемность");            
        } else alert("Выберите возраст");
    }  else {
        alert("Выберите тип двигателя");
    }  
 
    var duty = Math.round(DutyRate * price * 100)/100;

    var excise = Math.round(volume * ExiceRate * EURexchange * 100)/100;

    var VatBase = Math.round((price + duty + excise) * 100)/100;

    var VatRate = 0.2;  
    var vat = Math.round(VatRate * VatBase * 100)/100;

    var result = Math.round((excise + vat + duty)*100)/100;
    var resultCurr = Math.round(result / Exchange * 100)/100;

    document.getElementById("DutyBase4").innerHTML = price.toFixed(2) + " " + "грн.";
    document.getElementById("DutyRate4").innerHTML = DutyRate * 100 + "%";
    document.getElementById("DutyAmount4").innerHTML = duty.toFixed(2) + " " + "грн.";

    document.getElementById("ExiceBase4").innerHTML = volume + " куб.см";
    document.getElementById("ExiceRate4").innerHTML = ExiceRate + " EUR";
    document.getElementById("ExiceAmount4").innerHTML = excise.toFixed(2) + " " + "грн.";

    document.getElementById("VatBase4").innerHTML = VatBase.toFixed(2) + " " + "грн.";
    document.getElementById("VatRate4").innerHTML = VatRate*100 + "%";
    document.getElementById("VatAmount4").innerHTML = vat.toFixed(2) + " " + "грн.";

    document.getElementById("resultUSD4").innerHTML = resultCurr.toFixed(2) + " " + selectCurrencyValue;
    document.getElementById("resultUAH4").innerHTML = result.toFixed(2) + " " + "грн.";
}

function func5(){   
    var volume = Number(document.getElementById("volume5").value);
    var priceCurr = Number(document.getElementById("price5").value);
    var selectCurrency = document.getElementById("selectcurrency5");
    var selectCurrencyValue = selectCurrency.value;

    var selectAge = document.getElementById("selectAge5");
    var selectAgeValue = selectAge.value;

    var ExchangeCoef;
    var Exchange;

    var ExiceRate;

    if (selectCurrencyValue == "USD") {
        ExchangeCoef = EURexchange / USDexchange;
        Exchange = USDexchange;
    } else if (selectCurrencyValue == "EUR") {
        ExchangeCoef = 1;
        Exchange = EURexchange;
    }
    else if (selectCurrencyValue == "CAD") {
        ExchangeCoef = EURexchange / CADexchange;
        Exchange = CADexchange;
    } else alert("Выберите валюту");

    var price = Math.round(priceCurr * Exchange * 100)/100;
    var DutyRate;

    if (document.getElementById("RADgasoline5").checked == true) {        
        
        if (selectAgeValue == "new") {
            DutyRate = 0.1;
            ExiceRate = 0.003;
        } else if (selectAgeValue == "under8") {
            DutyRate = 0.1;
            ExiceRate = 0.007;
        } else if (selectAgeValue == "8more") { 
            DutyRate = 0.1;
            ExiceRate = 0.35;
        } else alert("Выберите возраст"); 

    } else if (document.getElementById("RADdiesel5").checked == true) {        
        
        if (selectAgeValue == "new") {
            if (volume <= 2800) {                
                DutyRate = 0.1;
                ExiceRate = 0.003;
            } else if (volume > 2800 && volume <= 5000) {
                DutyRate = 0.1;
                ExiceRate = 0.003;
            } else if (volume > 5000) {
                DutyRate = 0.2;
                ExiceRate = 0.003;
            } else alert("Введите объем");   
        } else if (selectAgeValue == "under8") {
            if (volume <= 2800) {                
                DutyRate = 0.1;
                ExiceRate = 0.007;
            } else if (volume > 2800 && volume <= 5000) {
                DutyRate = 0.1;
                ExiceRate = 0.003;
            } else if (volume > 5000) {
                DutyRate = 0.2;
                ExiceRate = 0.007;
            } else alert("Введите объем");            
        } else if (selectAgeValue == "8more") {
            if (volume <= 2800) {                
                DutyRate = 0.1;
                ExiceRate = 0.35;
            } else if (volume > 2800 && volume <= 5000) {
                DutyRate = 0.1;
                ExiceRate = 0.15;
            } else if (volume > 5000) {
                DutyRate = 0.2;
                ExiceRate = 0.35;
            } else alert("Введите объем");             
        } else alert("Выберите возраст");
    } else {
        alert("Выберите тип двигателя");
    }  
 
    var duty = Math.round(DutyRate * price * 100)/100;

    var excise = Math.round(volume * ExiceRate * EURexchange * 100)/100;

    var VatBase = Math.round((price + duty + excise) * 100)/100;

    var VatRate = 0.2;  
    var vat = Math.round(VatRate * VatBase * 100)/100;

    var result = Math.round((excise + vat + duty)*100)/100;
    var resultCurr = Math.round(result / Exchange * 100)/100;

    document.getElementById("DutyBase5").innerHTML = price.toFixed(2) + " " + "грн.";
    document.getElementById("DutyRate5").innerHTML = DutyRate * 100 + "%";
    document.getElementById("DutyAmount5").innerHTML = duty.toFixed(2) + " " + "грн.";

    document.getElementById("ExiceBase5").innerHTML = volume + " куб.см";
    document.getElementById("ExiceRate5").innerHTML = ExiceRate + " EUR";
    document.getElementById("ExiceAmount5").innerHTML = excise.toFixed(2) + " " + "грн.";

    document.getElementById("VatBase5").innerHTML = VatBase.toFixed(2) + " " + "грн.";
    document.getElementById("VatRate5").innerHTML = VatRate*100 + "%";
    document.getElementById("VatAmount5").innerHTML = vat.toFixed(2) + " " + "грн.";

    document.getElementById("resultUSD5").innerHTML = resultCurr.toFixed(2) + " " + selectCurrencyValue;
    document.getElementById("resultUAH5").innerHTML = result.toFixed(2) + " " + "грн.";
}

function func6(){   
    var priceCurr = Number(document.getElementById("price6").value);
    var selectCurrency = document.getElementById("selectcurrency6");
    var selectCurrencyValue = selectCurrency.value;
    var ExchangeCoef;
    var Exchange;
    if (selectCurrencyValue == "USD") {
        ExchangeCoef = EURexchange / USDexchange;
        Exchange = USDexchange;
    } else if (selectCurrencyValue == "EUR") {
        ExchangeCoef = 1;
        Exchange = EURexchange;
    }
    else if (selectCurrencyValue == "CAD") {
        ExchangeCoef = EURexchange / CADexchange;
        Exchange = CADexchange;
    } else alert("Выберите валюту");
    var price = Math.round(priceCurr * Exchange * 100)/100;
    var DutyRate = 0.1;    
    var duty = Math.round(DutyRate * price * 100)/100;
    var excise = 0;
    var VatBase = Math.round((price + duty + excise) * 100)/100;
    var VatRate = 0.2;  
    var vat = Math.round(VatRate * VatBase * 100)/100;
    var result = Math.round((excise + vat + duty)*100)/100;
    var resultCurr = Math.round(result / Exchange * 100)/100;

    document.getElementById("DutyBase6").innerHTML = price.toFixed(2) + " " + "грн.";
    document.getElementById("DutyRate6").innerHTML = DutyRate * 100 + "%";
    document.getElementById("DutyAmount6").innerHTML = duty.toFixed(2) + " " + "грн.";

    document.getElementById("ExiceBase6").innerHTML = "-//-";
    document.getElementById("ExiceRate6").innerHTML = 0;
    document.getElementById("ExiceAmount6").innerHTML = excise.toFixed(2) + " " + "грн.";

    document.getElementById("VatBase6").innerHTML = VatBase.toFixed(2) + " " + "грн.";
    document.getElementById("VatRate6").innerHTML = VatRate*100 + "%";
    document.getElementById("VatAmount6").innerHTML = vat.toFixed(2) + " " + "грн.";

    document.getElementById("resultUSD6").innerHTML = resultCurr.toFixed(2) + " " + selectCurrencyValue;
    document.getElementById("resultUAH6").innerHTML = result.toFixed(2) + " " + "грн.";
}
