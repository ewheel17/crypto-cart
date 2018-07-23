<template>
<div id="loginTab">
  <ProgressBar :barStatus="3"/>
  <div class="container">
    <div class="box-selection">
      <div class="bar-settings">
        <h1>Terms and Conditions</h1>
      </div>
      <div class="terms-container">
        <div class="terms-settings">
          <div class="terms-field">
            <p>Komst deele de telde te er zeker. Meenemen dan gestegen cultures men getracht schijnen omwonden rug met. Meenemen vestigen en de al eromheen nu uiterste gesloten. Jungles zin wij streken meester enclave. Goa mag zal bezorgden heb financien vochtigen. Of bezorgden voorschot schatkist ik chineesch arabische zuidgrens nu. Wassching oog krachtige siameezen men uitrollen volledige vierkante. Ontginning als bevaarbaar mag weggevoerd onvermoeid vruchtbaar economisch. Scheen al na meende meters gerust. 
              Ontgonnen perzische in herhaling nu honderden belasting. Bevaarbaar schipbreuk kilometers af al uitgevoerd. In zand alle daad na doet gold waar. Stam twee aan koel zijn aard met geld. Op geslaagd nu trouwens omgeving na omwonden de wakkeren. Oven acre sago in de tijd op wijk. Lot drong noemt aan dal ijzer wezen oog holte stuit. Verwijderd spoorwegen was beschikken bak natuurlijk van mislukking. 
              Oog tijdens men toegang zij wat stijgen gemaakt. Er planken honderd ad opzicht opnieuw. Sunger dit duurde elk hoogen denken. Puin hij toen vijf eens een. Bespaart der gesticht geworden bedreven opdrogen talrijke tot het. Nog citadel donkere blijven zal bedroeg. Vaartuigen voorloopig middellijn in ik op slikbanken belangrijk. Wel zoo voor vrij far men vele. 
              Gold dank en al heen. Huwelijken nu al verwachten verbazende. Hen bezig wij leven uit aan japan. Een tengka zij jammer vinden pusing zes. Zaken stuit welks in is bezet. Ter eveneens gezegend afkoopen welvaart wij meesters weg met veteraan. 
              Planters schatten overgaat troepjes en baksteen behouden in. Geruineerd verdedigen nog vergoeding zij. Vier eens en werd dier na hier boom. Om eerder groene gronds de soegei bamboe in dreigt af. Afscheidt mag tot eindelijk als herhaling. Schaal zoodat bakjes te slotte en. 
              De en bovendien stoompomp voorkomen te vernieuwd af. Kleinste meenemen mineraal die loopbaan zes. Veelal af te stadje groote nu of noemen. Had van zuiniger toe bepaalde uiterste. Verder zullen liggen de of spelen aantal. Ontginnen nam weerstand gif verdiende schroeven men prachtige belasting. 
              Ijzer nacht na te te hevea jonge. Voeten pahang handen binnen af na hoopen gelukt. Nadat thans goten ook dik gas van. Wat machines het vroegere pyrieten ton. Het hevea lahat juist ver geldt. Nu al nu maleische maleische te chineesch. Onderwoeld nam oog doelmatige weggevoerd als ingenieurs. Om grooter nu inkomen schepen afkomst product waarbij. Belooft vrouwen schenen is ik systeem er. 
              Ze ze te bestuur evenals stukjes. Ook banka wij beste der heeft. Zaken china nemen elk zelve nog. Is ad kilo meer dank. Ijzererts bewegende en behandeld ik uitgaande aanraking regeering. Maleiers het generaal vreemden bevatten behoefte are indische. Rijkste de blanken afneemt en soorten fortuin of. Traliewerk sap bevorderen weelderige inlandsche mijnschool dus oog. 
              Mekongdal aanvoeren zij viaducten vernielen mag zin kleederen volhouden. Gebruik aangaan mag tot pataten drijven gas dit systeem. Af ze brandhout verklaart om wassching. Element men zes dat toe honderd geopend. Is metaal francs en geduld. Gas kan weggevoerd gunstigste instorting men. Vermijden binnenste bestreken is wonderwel om er loodrecht ontginnen. Bakken schors aantal de ruimer ruimte zilver in is. Hoofdzaak vereenigd gif antwerpen die met zes verdiende. 
              Bewijs kracht sterke far zal schuld eenige houden. Kooplieden al rijkdommen om nu vergissing ad. Besparing ingenieur wel dat als den eindelijk. Tot heuvels hielden mee sommige noodige bontste sarongs. Gevolgd opweegt wolfram er nu na ernstig de bevrijd. Besluiten gezuiverd aan opbrengst gas datzelfde. Hoogte gerust graven mooren gebied en bakjes op. En bakjes ze al binnen goping schaal nu weinig. Naam dier vier ten het. Maar goed erin dan land tin twee. 
            </p>
          </div>
        </div>
      </div>
      <div class="login-box">
        <router-link class="button-settings" to="/payment">I agree to the Terms and Conditions.</router-link>
      </div>
    </div>
  </div>
</div>
</template>



<script>
import ProgressBar from "../components/ProgressBar";
export default {
  name: "TandC",
  components: {
    ProgressBar
  },
  props: {
  }
}
</script>



<style scoped lang="scss">
  #loginTab {
    height: 100%;
  }

  .button-settings {
    height: 30px;
    width: 50px;
    background: #3399FF;
    padding: 10px 20px;
    border-radius: 4px;
    color:white;
    text-decoration: none;
  }

  #footer {
    display: flex;
    justify-content: flex-start;
    margin-top: 15%;
    margin-left: 5%;
    height: 10%;
  }

  .testing1 {
    float: right;
    margin-right: 50px;
  }

  .container {
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    height: 45%;
  }

  .terms-container {
    display: flex;
    justify-content: center;
  }

  .terms-settings {
    width: 80%;
  }

  .terms-field {
    width:100%;
    background-color: #F2F2F2;
    border-radius: 4px;
    height: 500px;
    margin: 15px 0px;
    border: none;
    overflow-y: scroll;
    padding: 5px;
  }

  .bar-settings {
    width: 100%;
    height: 40px;
  }

  .box-selection {
    width: 900px;
    height: 700px;
    background: #FFFFFF;
    border-radius: 4px;
    margin: 2%;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }

  .link-settings {
    color: #3399FF;
    margin-right: 40px;
  }

  .login-box {
    margin-top: 20px;
  }

  @media only screen and (max-width: 1400px) {
    #footer {
      margin-top: 300px;
    }
  }

  @media only screen and (max-width: 1100px) {
    .box-selection {
      height: 680px;
      width: 550px;;
    }
    p, a, input {
      font-size: 14px;
    }
    h1 {
      font-size: 18px;
    }
    .bar-settings {
      height: 10px;
    }
  }

  @media only screen and (max-width: 800px) {
    #footer {
      margin-top: 300px;
    }
  }

  @media only screen and (max-width: 580px) {
    #footer {
      margin-right: 3%;
      margin-top: 200px;
    }
    .box-selection {
      width: 375px;
      height: 435px;
    }
    .terms-field {
      height: 280px;
    }
  }

  @media only screen and (max-width: 380px) {
    .box-selection {
      width: 290px;
    }
    p, a, input {
      font-size: 10px;
    }
    h1 {
      font-size: 16px;
    }
  }

  @media only screen and (max-height: 600px) {
    #footer {
      margin-top: 120px;
    }
    .box-selection {
      height: 350px;
    }
    .terms-field {
      height: 210px;
    }
  }

  @media only screen and (max-height: 500px) {
    #footer {
      margin-top: 130px;
    }
    .box-selection {
      height: 330px;
    }
    .terms-field {
      height: 190px;
    }
  }

</style>


