import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "number";
var name = "Number Idler";
var description = "cool instant";
var authors = "Sky == liver";
var version = 1;

var currency;
var init = () => {
  currency1 = theory.createCurrency()
  
  // c1
    {
        let getDesc = (level) => "c_1=" + getB1(level).toString(0);
        c1 = theory.createUpgrade(0, currency1, new FreeCost());
        c1.getDescription = (amount) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getDesc(c1.level), getDesc(c1.level + amount));
    }
}

init();