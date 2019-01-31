import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Charity from './Components/Charity';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export class Donate extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
componentDidMount() {
    Meteor.subscribe('allUsers', () => {
      Tracker.autorun(() => {
        let findUser = Meteor.users;
        this.setState({ users: Meteor.users });
        });
      });
}
render() {
    return (
      <div>
          {this.state.users ?
          <div>
          <Navbar route={''} users={this.state.users} />
          <h1 className="donateLabelTop">Donate</h1>
          <p className="donatDescriptionTop">These are the organisations and charities we support with the help of our advertisers. They are listed here to allow you to make a difference too.</p>

          <div className="charityLabelTop">Charities</div>
          <hr className="charity__hr" />

          <Charity charity="Just Diggit" charityDescription="Just Diggit is an organisation helping to restore grasslands that have been damaged by rising temperatures. By donating to Just Diggit, you are helping to offset CO2, empower local communities, eradicate poverty and provide clean water for local communities." charityUrl="https://justdiggit.org/" imageSrc="images/charityImages/justDiggit.jpg"/>
          <Charity charity="The Solutions Project" charityDescription="The Solutions Project is an organisation working with over 200 businesses, cities and countries to accelerate the transition towards 100% clean energy. Working with Leonardo Dicaprio and Mark Ruffalo, their goal is to achieve 100% renewables by 2050." charityUrl="http://thesolutionsproject.org/" imageSrc="images/charityImages/theSolutionsProject.jpg" />
          <Charity charity="Stand For Trees" charityDescription="Stand for Trees is an organisation working in countries around the world to protect native forests. For every 10 dollars you donate, Stand for Trees protects the forest of your choice and offsets one tonne of CO2." charityUrl="https://standfortrees.org/en/" imageSrc="images/charityImages/standForTrees.jpg" />
          <Charity charity="Solar Aid" charityDescription="In Malawi, Uganda and Zambia, Solar Aid has provided solar-powered lights to local communities in order to replace kerosene lamps that are expensive and have been shown to cause severe health effects." charityUrl="https://solar-aid.org" imageSrc="images/charityImages/solarAid.jpg" />
          <Charity charity="Savory" charityDescription="Savory is an organisation using a technique called holistic management to restore grasslands and food chains all over the world. Savory has developed innovative tools, curricula and policies to find better ways to preserve and restore grasslands. " charityUrl="https://www.savory.global/" imageSrc="images/charityImages/savory.jpg" />
          <Charity charity="350.org" charityDescription="350.org is an organisation working to provide clean energy to everyone, everywhere. 350's three main goals are: keep carbon in the ground, help build a new, zero-carbon society and pressure governments into limiting emissions." charityUrl="https://350.org/" imageSrc="images/charityImages/350.jpg" />
          <Charity charity="New Harvest" charityDescription="New Harvest is an organization working to build and establish the field of cellular agriculture. New Harvest believes the benefits of cellular agriculture include: fewer environmental impacts, a more consistent supply and the possibility to eliminate saturated fats." charityUrl="https://www.new-harvest.org/" imageSrc="images/charityImages/newHarvest.jpg" />
          <Charity charity="The Climate Group" charityDescription="The Climate Group works with groups, regional governments, businesses and states in order to eliminate all carbon emissions. The Climate Group attempts to make impacting and lasting effects by implementing policies in order to achieve a net-zero future." charityUrl="https://www.theclimategroup.org/" imageSrc="images/charityImages/climateGroup.jpg" />
          <Charity charity="EDF" charityDescription="Environmental Defense Fund is one of the largest environmental organisations with over 675 scientists, economists, policy makers and many other experts. EDF's three main missions are: stabilising the climate, feeding the world and protecting our health." charityUrl="https://www.edf.org/" imageSrc="images/charityImages/edf.jpg" />
          <Charity charity="The Sierra Club" charityDescription="The Sierra Club protects over 250 million of acres of forests, helped to pass the Clean Air Act, Clean Water Act as well as the Endangered Species Act. The Sierra Club has over 3.5 million members and is known for helping to close 251 coal plants." charityUrl="https://www.sierraclub.org/home" imageSrc="images/charityImages/sierraClub.jpg" />
          <Charity charity="The Rainforest Alliance" charityDescription="The Rainforest Alliance is an organisation working with a number of people from farmers to scientists with the main goal of preserving habitats and promoting sustainability. The Rainforest Alliance is tackling a number of problems from forests to human rights." charityUrl="https://www.rainforest-alliance.org/" imageSrc="images/charityImages/rainforestAlliance.jpg" />
          <Charity charity="NRDC" charityDescription="NRDC is known for building 5 turbines in US's first off shore wind farm. NRDC has over 2 million members and 500 scientists, policy makers and lawyers. NRDC is fighting fossil fuels through exploiting clean energy in cities, states and countries." charityUrl="https://www.nrdc.org/" imageSrc="images/charityImages/nrdc.jpg" />
          <Charity charity="Greenpeace" charityDescription="Greenpeace is a campaigning organisation using peaceful protest to revolt against environmental problems as well as to explore and advance possible solutions to them. Greenpeace has over 2.8 million members worldwide and offices in more than 50 countries." charityUrl="https://www.greenpeace.org/nl/" imageSrc="images/charityImages/greenpeace.jpg" />
          <Charity charity="The Good Food Institute" charityDescription="The Good Food Institute is an organization working to develop plant-based alternatives to meats. GFI works with entrepreneurs, innovators and scientists to fight environmental degradation, global poverty, to improve animal welfare as well as human health." charityUrl="https://www.gfi.org/" imageSrc="images/charityImages/gfi.jpg" />
          <Charity charity="The Carbon Fund" charityDescription="Carbon Fund is an organisation helping individuals around the world to offset their carbon emissions. Founded in 2003, Carbon Fund researches and develops projects to offset emissions through reforestation efforts or renewable energy projects." charityUrl="https://carbonfund.org/" imageSrc="images/charityImages/carbonFund.jpg" />
          <Charity charity="LTBLI" charityDescription="Let There be Light International is an organisation providing solar-lights to locals in Uganda and Malawi.  LTBLI has donated 5,340 solar-lights, which allows 287,000 people to have access to health centers powered by solar-lights and has offset 6000 tons of CO2." charityUrl="https://www.lettherebelightinternational.org/" imageSrc="images/charityImages/ltbli.jpg" />
          <Charity charity="The Wilderness Society" charityDescription="The Wilderness Society is an American conservation organisation working to protect America's wilderness for both current and future generations. The Wilderness society has protected nearly 110 million acres of wilderness across 44 states." charityUrl="https://www.wilderness.org/" imageSrc="images/charityImages/wildernessSociety.jpg" />
          <Charity charity="Earthjustice (FIX)" charityDescription="Earthjustice is an organisation acting as a lawyer for the Earth. Working in the US, Earthjustice has protected thousands of organisations. They have more than one hundred attorneys fighting to enforce environmental laws and over 2.2 million members." charityUrl="https://earthjustice.org/" imageSrc="images/charityImages/earthJustice.jpg" />
          <Charity charity="Union of Concerned Scientists" charityDescription="The Union of Concerned Scientists is an organisation working with over 20,000 scientists, engineers and technical experts to develop and implement new and innovative solutions to solve the most crucial problems we face today. UCS has over 500,000 members." charityUrl="https://www.ucsusa.org/" imageSrc="images/charityImages/ucs.jpg" />
          <Charity charity="Woods Hole Oceanographic Institution" charityDescription="The Woods Hole Oceanographic Institution is an organisation dedicated to the research, exploration and education of our oceans. WHOI's research areas include: coastal oceans, ocean life, ocean exploration and climate change."  charityUrl="http://www.whoi.edu/" imageSrc="images/charityImages/whoi.jpg" />
          <Charity charity="The Rocky Mountain Institute" charityDescription='The Rocky Mountain Institute is an organisation working to achieve 100% renewable worldwide. Their tagline is: "Rocky Mountain Institute transforms global energy use to create a clean, prosperous, and secure low carbon future".' charityUrl="https://www.rmi.org/" imageSrc="images/charityImages/rmi.jpg" />
          <Charity charity="Australian Youth Climate Coalition" charityDescription="The Australian Youth Climate Coalition is an organisation working to empower the Australian youth to rise up against climate change. Working with over 120,000 members, AYCC believes it is the youth that will make the largest impact on our world." charityUrl="http://www.aycc.org.au/" imageSrc="images/charityImages/aycc.jpg" />
          <Charity charity="Protect Our Winters" charityDescription="Protect Our Winters is an organisation working with a community of professional athlete sport brands to reach the safe limit of 330ppm of CO2 in the atmosphere. POW focuses on education, political advocacy and community-based activism." charityUrl="https://protectourwinters.org/" imageSrc="images/charityImages/pow.jpg" />
          <Charity charity="David Suzuki Foundation" charityDescription="The David Suzuki Foundation is an organisation in Canada working to preserve Canada's environment and adopt sustainable practises. The David Suzuki Foundation's main focus areas are: environmental rights, defending biodiversity and climate solutions. " charityUrl="https://davidsuzuki.org/" imageSrc="images/charityImages/dsf.jpg" />
          <Charity charity="Earth Day" charityDescription="Earth Day is one of the world's largest environmental organisations working to educate and initiate the environmental movement. On the 22 of April, Earth day is celebrated every year, where more than 1 billion people participate worldwide." charityUrl="https://www.earthday.org/" imageSrc="images/charityImages/earthDay.jpg" />
          <Charity charity="EJF" charityDescription="The Environmental Justice Foundation's core belief is that sustainable and safe environments should be a basic human right. EJF is working in the areas most affected by climate change to investigate, document and expose environmental threats. " charityUrl="https://ejfoundation.org/" imageSrc="images/charityImages/ejf.jpg" />
          <Charity charity="Cool Earth" charityDescription="Cool Earth is an organisation working to put a halt to rainforest deforestation and climate change. Working with rainforest communities around the world, Cool Earth has helped to save 900,000 acres of land and is currently protects 215 million trees." charityUrl="https://www.coolearth.org/" imageSrc="images/charityImages/coolEarth.jpg" />
          <Charity charity="One Tree Planted" charityDescription="One Tree Planted is an organisation based in Vermont working to reforest lands around the world. For every dollar you donate, One Tree Planted will plant a tree that will have a 80-90% chance of surviving." charityUrl="https://onetreeplanted.org/" imageSrc="images/charityImages/oneTreePlanted.jpg" />
          <Charity charity="COTAP" charityDescription="Carbon Offsets to Alleviate Poverty is an organisation working to empower individuals and organisations in developing countries. COTAP offsets carbon through reforestation projects in communities where people live on less than 2 dollars a day." charityUrl="https://cotap.org/" imageSrc="images/charityImages/cotap.jpg" />

          <div className="clearBoth"></div>
          <div className="donatePage__bottomDiv">
          <div className="floatLeft">Want to Add Your Charity to This List?</div><Link to="/contact" className="floatLeft link charity__bottomContactUsLink">Contact us!</Link>
          </div>
          </div>
          : undefined }
          <Footer/>
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Donate);
