/* This is the data we will be using to create our articles */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Harry Potter Ipsum',
    date: 'August 5, 2020',
    firstParagraph: 'Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?',

    secondParagraph: 'Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.',

    thirdParagraph: 'Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn. Fenrir Grayback horseless carriages ‘zis is a chance many would die for!'
  },
  {
    title: 'Lord of the Rings Ipsum',
    date: 'July 29, 1954',
    firstParagraph: `Ring-bearer juice underestimate wretch counter goblins glasses tried needn't mountains capable companions! Caradhras shake fully decided weapons delays reason valley ride devilry! You are full of surprises, Master Baggins. Champion nights hasty bridge unknown opinion Strider reclaiming allies cave naught. They've have Galadriel? Doily utterly Glóin was enslaved prince mellon homage brook rippling oaken. Size wasn't responsible Iáve reserves suspect outside write. Barrels increase horrid loosened conscience sheep Tauriel devouring deserve bloodline looking heard! Ravens fuel wanting relative appeared instead whom bodies henceforth pretty stores lands. Morbid two-faced skewered maps beheading tubers tomorrows fooled Giants?`,

    secondParagraph: `Guard divine pile barren daughter thatched Rhudaur outlast fried. All right, then. Keep your secrets. Lone-lands cloven hang Ungol stinks! Plenty foot arise Thofin dream. Reckoning mantle caves pursuit homage possessed push outnumbered Hobbit's carried far obstinate. Trumpet real the well-protected Goblins. Wriggles goat whole finally odds Wilds jam captive. Nightfall thoughts marshes conjurer but survive smelt confusticate Iáve hooded glass. Warning encountered Iáve.`,

    thirdParagraph: `Seek lordly daughter bury villager wandering braziers Goblin-town? Wreathed flutters midnight frightened says fire-breather lidless escort attacked Brandybuck. Deceit Dwarf-lords uncle anyone tortured smithy. Immortal withhold liege agreed fallen helped helps Ere. Grimbold what'll faded uniting. 60 meant scrumptious Rosie champion angry flesh fires these starters. Stands voices got step hour Minas Tirith! It must be taken deep into Mordor and cast back into the fiery chasm from whence it came. Horn deserve note somewhat agree bird Khazad-dum wine.`
  },
  {
    title: `League of Legends Ipsum`,
    date: `October 27, 2009`,
    firstParagraph: `League of Ipsum dolor sit amet skins pink creeps cooldown overstaying 1v1 pentakill #jukes4jesus pentakill chase trade League of Legends cooldown instakill wolves flash ARAM. Bruiser dive wolves initiate fountain vision League of so global BotRK queue jungle wow towers utility overstaying flash blue buff dodge overstaying. Face check chase double buffs esports rito pls skins creeps cooldown OP jungle bork bush solo queue harass CC blink chase. Inhibitor flash smurf OP support dragon proc red buff #jukes4jesus quadrakill inhib lore ult overstaying jukes troll. Wave top proc League of auto-attack knockup pro strats counter gank ultimate such overextending lag towers wow red buff. League of pro strats cooldown red buff bait pro strats escape ace League of utility proc penta pots #jukes4jesus minions pots initiate. Riot pls feed lag towers CS instakill kite gap closer jungle ignite report minions pink blink kite lane solo queue.`,

    secondParagraph: `Runes bork pink flash dunk utility towers rito pls troll backdoor skillshot overextending wave wave roam masteries sustain skillshot OP wards. Ragequit instalock CC towers instakill poke reset AFK vision counter gank troll CC quadrakill runes pentakill. Trade DC instalock top AFK lag leash split push pink such bork pentakill ranked such utility peeling doran's. Blink such esports hue pentakill nexus roam golems pro blink zoning troll knockup backdoor creeps OP bush fountain bot lane League of Legends. Backdoor burst 1v1 ragequit wow Draven KS League of Legends lore masteries jungle counter warding bruiser CC initiate ADC. Such wolves skins leash global chase skins Draven glass cannon ace CS bruiser towers escape minions split push overextending minions.`,

    thirdParagraph: `Push pro strats towers wards CS bush double buffs report troll fountain dodge bait League of assist wolves ult. Blink pro skillshot wraiths so ADC quadra flash backdoor esports knockup riot pls inhib proc CC quadra pentakill zoning. Ult wraiths wow inhibitor assist bait 1v1 creeps golems red buff Elo hell ARAM jukes League of pink bronze hue. Ganks pots ace inhibitor utility dunk pro strats escape towers jungle gap closer riot pls ragequit counter riot pls counter jungle wave. Burst ARAM auto-attack counter pro mid #jukes4jesus elixir penta poke cooldown BotRK OP penta overstaying feed last hit. Bronze penta dunk League of Legends blue buff report mid proc glass cannon pro strats pro global feed lane bronze knockup minions bait warding. Dragon League of solo queue auto-attack ultimate assassin last hit pro strats ganks pro strats support bork #jukes4jesus League of League of Legends CC baron #jukes4jesus jukes.`
  }
];

/* Step 1: Write a component called 'articleMaker' to create an article. You want your component to return markup like the template below: 

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'>+</span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as its one argument, or 5 separate strings mapping to each property of an article object.

  Step 2: Add an event listener to the expandButton span. This listener should toggle the class 'article-open' on the 'article' div.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function, loop over the data. At each iteration you'll use your component to create an article and append it to the DOM inside the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.
*/



function articleMaker(dataSet) {
  let div = document.createElement('div')
  div.classList.add('article')
  let h2 = document.createElement('h2')
  let p = document.createElement('p')
  let p1 = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')
  let span = document.createElement('span')

  p.classList.add('date')
  span.classList.add('expandButton')
  span.addEventListener('click', e => {
    div.classList.toggle('article-open')
  })
  span.textContent = 'Expand'
  p.textContent = dataSet.date
  p1.textContent = dataSet.firstParagraph
  p2.textContent = dataSet.secondParagraph
  p3.textContent = dataSet.thirdParagraph
  h2.textContent = dataSet.title

  div.append(h2, p, p1, p2, p3, span)
  return div
}

data.forEach(item => {
  let articles = document.querySelector('.articles')
  articles.appendChild(articleMaker(item))

})
