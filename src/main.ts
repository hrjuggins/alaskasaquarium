import './style.css';

function onAdd(element: HTMLButtonElement) {
  const inputName = document.querySelector('.submit-name');
  const addButton = document.querySelector('.add');
  const thanks = document.querySelector('.thanks');
  const isExit = element === document.querySelector('.exit');
  const isSend = element === document.querySelector('.send');
  element.addEventListener('click', () => {
    if (isSend) {
      inputName?.classList.remove('show');
      inputName?.classList.add('hide');
      thanks?.classList.add('show');
    } else if (isExit) {
      inputName?.classList.remove('show');
      inputName?.classList.add('hide');
      addButton?.classList.add('show');
    } else {
      element.classList.remove('show');
      element.classList.add('hide');
      inputName?.classList.remove('hide');
      inputName?.classList.add('show');
    }
  });
}

const fishes = [
  {
    name: 'Neon Tetra',
    origin: 'South America',
    fact: 'Neon tetras change their coloration in response to the lighting of the environment. They can dull their vibrant colors in dark waters and reactivate their coloring in well-lit environments.',
    image:
      'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcStHKdtkM6vMfrXJBTRmxwQOcarmAiP1sX05TPX_lgSQGzzfgfotnuu1KBfum76rYw3dYurNEYgjPxYTTE',
  },
  {
    name: 'Zebra fish',
    origin: 'South Asia',
    fact: 'Drunk zebrafish swim extra fast and get sober fish to follow them',
    image:
      'https://www.thesprucepets.com/thmb/xwdEb8xVlpPYi4fv8FFA9THw2qI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-154930602-8dc255b823d04a9394f02c7668c45275.jpg',
  },
  {
    name: 'Panda Corydoras',
    origin: 'Peru',
    fact: 'they play so well with their neighbors that theyre actually on the list of most peaceful fish',
    image:
      'https://www.thesprucepets.com/thmb/0kJXWEuC8_OXYFrj2d_LS5ctrLM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1296094788-3ab93b2040214aebb9fe44e76bb2bf01.jpg',
  },
];

const renderFishes: string[] | string = fishes.map(
  (fish) => `<div class="card">
    <img src="${fish.image}" />
      <div class="card-info">
        <h3>Name - ${fish.name}</h3>
        <p>Origin - ${fish.origin}</p>
        <p>Cool fact - ${fish.fact}</p>
        <div class="button-wrapper"> 
          <button class="add show">Add me to the tank</button>
          <div  class="submit-name hide">
            <input type="text" placeholder="Enter your name"></input>
            <button class="send">✅</button>
            <button class="exit">❌</button>
          </div>
          <p class="thanks hide">Thank you!</p>
        </div>
      </div>
    </div>`
);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <div class="intro">
    <h1>It's Alaska's<br/ > 1st birthday<br/> </h1>
    <img src="https://i.ibb.co/ZWY5MqS/Whats-App-Image-2023-02-05-at-8-04-50-PM.jpg" class="tank" alt="TypeScript logo" />
    <h1>and she needs help filling her fish tank!</h1></div>

 <h2>Take a look at the fish suitable for Alaska's aquarium and let us know which one you want to add!</h2>
    <div class="cards">
    </div>
  </div>
`;

const cards = document.querySelector<HTMLDivElement>('.cards');
if (cards) {
  cards.innerHTML = `${renderFishes}`;
}
console.log(cards);

onAdd(document.querySelector<HTMLButtonElement>('.add')!);
onAdd(document.querySelector<HTMLButtonElement>('.exit')!);
onAdd(document.querySelector<HTMLButtonElement>('.send')!);
