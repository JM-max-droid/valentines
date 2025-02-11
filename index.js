const flowers = document.querySelectorAll('.flower');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const message = document.getElementById('message');
const image = document.getElementById('image');
const video = document.getElementById('video');
const videoSource = document.getElementById('videoSource');
const backgroundAudio = document.getElementById('background-audio'); // Background audio element

const flowerData = [
  {
    message: "This is our first meet aa naman grabeng kaba ng ferson jan kilig ang tuhod HAHAHA first time ko e sabi ko mandin sa iyo at alam mo yan, nilakasan ko lang loob ko nyan e, kasi ikaw na yan alangan namang mahiya pa? kapalan na sempre baka naman sabihin mo e sa chat lang ako magaling e, ayan thank you kasi nabago moko jan sa unang meet natin na yan HAHA",
    imageUrl: "pic4.jpg",
    type: "image",
  },
  {
    message: "Ito naman e dko alam pangalawang dalaw ata ni Edwardo kay Maryafe nyan medyo makapal kapal na ang mukha ko nyan nakakapunta na lang emits ng walang nakaalam e HAHAHA, awan baga bat nung nakilala kita e lumakas ung loob ko kumapal na din face ko HAHA",
    imageUrl: "pic3.jpg",
    type: "image",
  },
  {
    message: "Ayan eri naman e nung nagpaalamanan na may pa mamimiss kita Imissyouu pang alam HAHAHA, ay nung pinuntahan at bnigyan ng merienda ay okay na ulit mandin HAHA puro kadramahan mandin ang mababasa sa messenger nyanng time na yan aa HAHAHA sorry ay, basta bespren stay who you are masaya akong nakilala kita thankful at grateful ako dun",
    imageUrl: "pic2.jpg",
    type: "image",
  },
  {
    message: "ayan eri na ito tlaga nung kumakapal na face ko unang punta ko to jan sa wawa e  na tayong dalawa lang e tas nag seawall haaaaaysss, pag uwe ko mandin ay paulit ulit kong napanuod yan  d naman alam kung ano napag kwentuhan HAHA ay kailan uli tayo ga seawall hay naku bespren, pero sa totoo lang mandin gusto kitang nakikita at nakakasama araw araw e kaso ay bawal naman ata HAHA pati ano pala ung schedule ko din pala, ay basta wag na mag isip ng kung ano ano huh!? hayae baga yang kung ano man yang iniisip mo na yan kaka kape lang yan HAHAHA",
    videoUrl: "vid1.mp4",
    type: "video",
  },
  {
    message: "Ayan eri na ung last ung memorable at exciting hanggang ngaun dpa ako nakakaget over napapatawa parin ako kapag naiisip ko to aa naman ikaw ba naman ang nagulat at natakot lahat may patago pang alam HAHAHA, pero thankful ako kasi nakilala ko si tita nameet ko ket biglaan uy uy close na kami pwede na araw arawin ang dalaw HAHAHA joke lang ano pala thankful din ako kasi ayun tinggap moko/niyo kung sino ako kung ano ung meron ako haysss drama HAHAHA basta dito lang ako bespren and sabi ko nga bahala na ang panahon kung ano man ung mangyare sa ating dalawa magaJapan pa e so ayun Happy Valentines ulit sempre ito pa ung ibibigay ko pero atleast dna gumastos tulog lang ang kulang pero okay lang yun HAHAHA and 6 months na pala us tagal na din pero ako lang ung nagacelebrate HAHAHA icelebrate mo din naman aa naman HAHAHA ayan ayun lang alas kwatro na ako natulog nito tas nagtampo o nainis kapa yata sakin HAHA basta ingat palagi dito lang ako, ako na lang kikidnap sayo HAHAHA djoke lang sige na at ang antok na un lang naman pasensya kana simple lang ung gawa ko ngaun e haha Goodnight and goodmorning Bespreeeen!",
    imageUrl: "pic1.jpg",
    type: "image",
  },
];

// Function for the typewriter effect
function typeWriterEffect(text, element, speed = 50) {
  element.textContent = ""; // Clear previous content
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

flowers.forEach((flower, index) => {
  flower.addEventListener('click', () => {
    const currentData = flowerData[index];

    // Apply typewriter effect
    typeWriterEffect(currentData.message, message);

    // Show the content based on the flower's type (image or video)
    if (currentData.type === "image") {
      image.src = currentData.imageUrl;
      image.style.display = 'block';
      video.style.display = 'none';
    } else if (currentData.type === "video") {
      videoSource.src = currentData.videoUrl;
      video.style.display = 'block';
      image.style.display = 'none';
      video.load(); // Load the video when clicked
    }

    // Display the modal
    modal.style.display = 'flex';

    // Play the background audio continuously when a flower is clicked
    backgroundAudio.play();
    backgroundAudio.loop = true;  // Ensure it loops indefinitely
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Function to generate a random position on the screen
function getRandomPosition() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  return { x, y };
}

// Function to create a sparkling dot
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle-dot');

  const { x, y } = getRandomPosition();
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  // Append the dot to the body
  document.body.appendChild(sparkle);

  // Remove the dot after animation ends
  setTimeout(() => {
    sparkle.remove();
  }, 1500); // Matches the duration of the sparkle animation
}

// Set an interval to create sparkles at regular intervals
setInterval(createSparkle, 100); // Creates a sparkle every 100ms
