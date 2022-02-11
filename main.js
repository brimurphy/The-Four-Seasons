// Dropdown element
const season = document.getElementById("seasons");

// Hidden 3rd section
const container3 = document.getElementById("container-3");

// Title elements
const title1 = document.getElementById("title-1");
const title2 = document.getElementById("title-2");
const title3 = document.getElementById("title-3");

// Content elements
const content1 = document.getElementById("content-1");
const content2 = document.getElementById("content-2");
const content3 = document.getElementById("content-3");

// Image elements
const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const image4 = document.getElementById("image-4");
const image5 = document.getElementById("image-5");
const image6 = document.getElementById("image-6");

// Put all images into an array
const images = [image1, image2, image3, image4, image5, image6];

// Set up arrays for each section in the html file
// Each array should contain one tip per season
// Images for the relevant seasons with alt text
const seasons1 = {
  Summer: [
    `Keep the Lawn Long and Lush`,
    `Caring for your lawn during summer and drought conditions while using minimal water is possible. Brown, bare, 	weed-infested lawns are symptoms of scalping, which means cutting lawns too low. Instead, mow lawns as high as your mower permits. Longer turf wears better, but most important of all, a thick sward suppresses pernicious weeds. Fresh lawn clippings are great for activating compost heaps and mulching shrubberies, but only when 	applied in a thin layer, up to 5cm deep, as thicker layers can burn leaves and encourage collar rot on trees 	and shrubs. Keep lawn lush by foliar feeding with seaweed tonic once monthly and applying one handful of poultry manure per square metre each season, before rain or irrigation.`,
    `images/lawn-1.jpg`,
    `images/lawn-2.jfif`,
    `An Image of a healthy Lawn`,
    `An Image of a healthy Lawn`,
  ],
  Spring: [
    `Create a spot to enjoy your garden`,
    `Lots of hard work goes into maintaining a garden, so be sure to take some time to appreciate the fruits of 	your labor. Creating a designated spot to soak up the beauty that surrounds you can be as involved as 	building a wall to create a small space that’s separated from the rest of your garden, or as simple as 	placing a few comfortable chairs in front of a water feature or fire pit. Whichever type of retreat you 	decide to create, make sure it’s comfy.`,
    `images/enjoy-garden-1.jpg`,
    `images/enjoy-garden-2.jfif`,
    `A chair in garden in full bloom`,
    `A nice garden furniture surrounded by flowers and shrubs `,
  ],
  Autumn: [
    `Sow your vegetables`,
    `Autumn is the perfect time to start sowing the vegetables that will provide you with an abundant harvest this 	winter, as well as next spring and summer. Following the warmer months, the soil will still be warm, so seeds 	will germinate quickly. So, over the next few weeks, start to sow leafy vegetables like spinach, spring 		cabbages, broad beans and peas. Now is also a great time to sow turnips, radishes, onions and garlic.`,
    `images/sow-veg-1.jpg`,
    `images/sow-veg-2.jpg`,
    `Vegetables being planted in the soil.`,
    `Freshly pulled vegetables on a table.`,
  ],
  Winter: [
    `Make a Succulent Garden`,
    `Succulents have been all the rage for quite awhile now, and for good reason. They are beautiful, interesting, and easy to care for if you know a few simple rules. They are often used as decor both indoors and out, yet that doesn’t mean that they ARE decor (ie: meant to be set on a fireplace mantle to collect dust). Succulents are living plants that require some care to survive and thrive, and while caring for them is not complex, knowing the basics will help you have healthy succulents that stay happy for years to come.`,
    `images/succulents-1.jpg`,
    `images/succulents-2.jpg`,
    `An Image of some purple coloured succulents`,
    `Rows of succulents fully grown`,
  ],
};
const seasons2 = {
  Summer: [
    `Help Pots to stay Cool`,
    `Potted plants, especially those in terracotta pots, are vulnerable to overheating. Lightly mulch and, where possible, position them out of hot western sunshine. Remember that standing potted plants in saucers of water 	encourages root rot and mosquito breeding. Instead, stand them in saucers filled with sand, and keep the sand 	moist. This ensures roots stay cool and plants remain healthy. If potted plants dry out to the point where 	re-wetting is hard, soak them in a bucket of water for half an hour, then drain.`,
    `images/pots-1.jpg`,
    `images/pots-2.jpg`,
    `An Image of flowers in a pot in full bloom on a wall`,
    `An Image of flowers in pots in full bloom in a tray`,
  ],
  Spring: [
    `Get Out a Sharp Pair of Pruners`,
    `Spring is a good time to prune some kinds of woody shrubs and trees. Start by pruning out anything that has been broken or damaged by winter ice, snow and cold. Remove dead wood, too. Follow the general rule that flowering shrubs which bloom on new wood can be trimmed in spring. Their flower buds will be set on the new flush of growth that appears after you prune it. Spring is also a good time to shear back evergreens once their initial flush of new growth has finished emerging.`,
    `images/pruners-1.jpg`,
    `images/pruners-2.jpg`,
    `Multiple pruners lying on the grass`,
    `Multiple pruners hanging in a shed on the wall`,
  ],
  Autumn: [
    `Whip your hedges into shape`,
    `Try to tidy up your hedges before winter sets in so they're easier to maintain when the cold weather hits. Sharpened hand-held shears work fine for smaller foliage, but if your hedges are a bit bigger you may find it easier to use a petrol or electric hedge trimmer to get the job done quickly and easily.`,
    `images/trimming-1.jpg`,
    `images/trimming-2.jpg`,
    `A trimmer being used to trim the hedges`,
    `A shears being used to trim the hedges`,
  ],
  Winter: [
    `Plant an Indoor Herb Garden`,
    `Last winter, I did this fun project – Mason Jar Herb Garden. I need to get better about cooking with fresh herbs, but I did enjoy having the fresh herbs, if for no other reason than to smell them. I know, I’m weird, but I love smelling things, like dirt, spicy, fragrant herbs, essential oils, a baby’s head, candles, etc., etc. Okay, I got a little off track there, but it’s definitely a fun project to have a little herb garden growing right on your kitchen counter during the winter months.`,
    `images/herb-garden-1.jpg`,
    `images/herb-garden-2.jpg`,
    `Herbs in various pots on a window sill`,
    `Herbs in various pots on a window sill`,
  ],
};
const seasons3 = {
  Summer: [
    `Add Nutrients to the Water`,
    `If you can only water occasionally, try to water plants deeply and use that opportunity to simultaneously 	feed and correct mineral deficiencies. Apply a soluble fertiliser with added seaweed. Water in potash around the base of fruit trees, especially citrus, banana and lychee, to improve fruit flavour and juiciness. The potassium in potash is also important for controlling anthracnose disease of avocado and mango, and it generally helps to improve plant vigour and resistance to foliar fungi.`,
    `images/watering-1.jpg`,
    `images/watering-2.jpg`,
    `Water being poured on a sprout coming from the soil`,
    `Nutrients being added to water in a watering can`,
  ],
  Spring: [
    `Divide perennials and transplant shrubs`,
    `In early spring when they are just beginning to pop up, divide and transplant any perennials that have 	outgrown their space or grown large enough to split. In most cases, it’s best to divide and move perennials in the opposite season of when they bloom. Evergreen shrubs can be moved in early spring before their new growth appears or in early fall to give them enough time to re-establish their roots before winter. Deciduous shrubs can be moved almost anytime they are not in bloom and the weather is mild, but generally spring and fall are the preferred seasons for 	transplanting. If you move them while they are dormant, there will be less stress on the plants and they will be more likely to spring back into action quickly.`,
    `images/shrubs-1.jpg`,
    `images/shrubs-2.jpeg`,
    `An image of someone dividing perennials`,
    `Perennials in bloom`,
  ],
  Autumn: [
    `Prepare perennials`,
    `It's a good idea to tidy up perennials like geraniums and astrantias after they’ve finished flowering. You can remove any collapsed stems or dying leaves either by cutting from their bases with some pruning clippers or by gently hand-pulling them out. After you've done this, make sure to get rid of any remaining weeds, then 	spread some compost over the soil to give your plants a boost, leaving worms to do the rest of the work over the winter.`,
    `images/perennials-1.jpg`,
    `images/perennials-2.jpg`,
    `Perennials in bloom`,
    `Tidying up perennials in a flower bed`,
  ],
  Winter: [
    `Build a bug hotel`,
    `A bug hotel is part garden art and part winter habitat for beneficial insects, the garden army that helps to keep the bad bugs under control. If you are an organic gardener like me, then you will want to be sure that there is a place in your garden for beneficial insects to lodge for the winter. Next spring, when they wake up, lay eggs, and sweep your plants clean of aphids and mites, you will thank me. Here is how to make a beneficial bug house for this weekend project.`,
    `images/bug-hotel-1.jpg`,
    `images/bug-hotel-2.jpg`,
    `A bug hotel built on a tree`,
    `A bug hotels built on the ground side by side`,
  ],
};

// Put seasons arrays into an array for easier access
const selectedSeason = [seasons1, seasons2, seasons3];

// A function to change images and text depending
// on the option selected from a dropdown menu
function changeSeason() {
  let selected = season.options[season.selectedIndex].text;

  // Display the 3rd section
  container3.setAttribute("style", "display: block;");

  // Update the text of the containers to the relevant content
  title1.innerHTML = selectedSeason[0][selected][0];
  content1.innerHTML = selectedSeason[0][selected][1];

  // Add images and alt text to each page
  images[0].src = selectedSeason[0][selected][2];
  images[0].alt = selectedSeason[0][selected][4];
  images[1].src = selectedSeason[0][selected][3];
  images[1].alt = selectedSeason[0][selected][5];

  title2.innerHTML = selectedSeason[1][selected][0];
  content2.innerHTML = selectedSeason[1][selected][1];

  images[2].src = selectedSeason[1][selected][2];
  images[2].alt = selectedSeason[1][selected][4];
  images[3].src = selectedSeason[1][selected][3];
  images[3].alt = selectedSeason[1][selected][5];

  title3.innerHTML = selectedSeason[2][selected][0];
  content3.innerHTML = selectedSeason[2][selected][1];

  images[4].src = selectedSeason[2][selected][2];
  images[4].alt = selectedSeason[2][selected][4];
  images[5].src = selectedSeason[2][selected][3];
  images[5].alt = selectedSeason[2][selected][5];
}
