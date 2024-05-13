import { Card } from "@mui/material";
import StorySteps from "./StorySteps";
import { useState } from "react";

export const Story = () => {
  const [storyStep, setStoryStep] = useState(0);
  const storyContent = [
    {
      storyStep: 0,
      text: `You wake up as if from a long and deep sleep. Disoriented. 
      The world around you is a blur. Slowly, though, it comes into focus. 
      You are lying on your back. Foliage rises endlesssly toward the sky. 
      At least, you assume there is sky. You can't see much sky beyond the 
      dense cover of leaves. Your head aches. You can't remember how you 
      got here on the forest floor.`,
      choices: [
        { text: `Try to remember`, nextStep: 1 },
        { text: `Examine surroundings`, nextStep: 2 },
      ],
    },
    {
      storyStep: 1,
      text: `You vaguely remember something about a group of people you were with.
      Were there two others? Or was it more like five? You strain to see their faces...
      but your head starts throbbing in pain.`,
      choices: [{ text: `Examine surroundings`, nextStep: 2 }],
    },
    {
      storyStep: 2,
      text: `Slowly, you stand. Looking around, you see you are at the top of a hill.
      Gnarled roots and rough underbrush cover the forest floor making for uneven footing.
      At the bottom of the hill, you see a backpack with its contents spilled out.
      To the south, the terrain becomes steep and mountainous. To the west, you see an
      enourmous log. A thick wall of brambles and pine trees blankets the east.
      
      Where will you go?`,
      choices: [
        { text: `North, down the hill`, nextStep: 3 },
        { text: `East toward the brambles`, nextStep: 4 },
        { text: `South toward the mountain`, nextStep: 5 },
        { text: `West toward the log`, nextStep: 6 },
        { text: `Try to remember`, nextStep: 1 },
      ],
    },
    {
      storyStep: 3,
      text: `You slowly inch toward the steep hill in front of you.
    Peering over the edge, you realize it is probably too steep to safely climb down.
    You'll have to find another way down.`,
      choices: [{ text: `Examine surroundings`, nextStep: 12 }],
    },
    {
      storyStep: 4,
      text: `As you approach the brambles you realize these are not
    just any old brambles. They are full of juicy blackberries!`,
      choices: [
        { text: "Pick blackberries", nextStep: 7 },
        { text: `Get bearings`, nextStep: 8 },
      ],
    },

    {
      storyStep: 5,
      text: `Heading south, you find yourself among beautiful, white,
    birch trees. The ground is much more even under your feet here. 
    Ahead of you, to the South, a mountain rises resolutely to the sky. Through the birchtrees, you
    see the gaping mouth of a cave. To the east, are some large boulders.
    To the west, jagged rocks peak out from behind the birch trees.`,
      choices: [
        { text: `Explore the cave entrance`, nextStep: 44 },
        { text: `Examine the large boulders`, nextStep: 14 },
        { text: `Go to the jagged rocks`, nextStep: 16 },
        { text: `Head north`, nextStep: 12 },
      ],
    },

    {
      storyStep: 6,
      text: `A large, hollow log lies on its side. It is covered in moss
    and mushrooms.`,
      choices: [
        { text: `Pick mushrooms`, nextStep: 9 },
        { text: `Look inside log`, nextStep: 10 },
        { text: `Get bearings`, nextStep: 11 },
      ],
    },
    {
      storyStep: 7,
      text: `Careful of the thorns, you grab handfulls of berries and stuff your face.
    You hadn't even realized how hungry you were. The sweet juice drips through your fingers
    and down the corners of your mouth. You
    have never tasted more delicious blackberries.`,
      choices: [{ text: `Get bearings`, nextStep: 8 }],
    },
    {
      storyStep: 8,
      text: `To the west is the patch of forest where you first awakened. 
      A large, decaying tree looms to the North. To the South are large, gray, boulders.`,
      choices: [
        { text: `return to where you began`, nextStep: 12 },
        { text: `Head toward the dead tree`, nextStep: 13 },
        { text: `Go south toward the boulders`, nextStep: 14 },
        { text: "Pick blackberries", nextStep: 7 },
      ],
    },
    {
      storyStep: 9,
      text: `You stoop down and pluck some brown mushrooms from the base
    of the mossy log. Are these safe to eat?`,
      choices: [{ text: "get bearings", nextStep: 11 }],
    },
    {
      storyStep: 10,
      text: `Peering inside the hollow log, you catch a glimpse of
    something moving. A frog hops away through a crack in the log after 
    meeting your eye`,
      choices: [{ text: "get bearings", nextStep: 11 }],
    },
    {
      storyStep: 11,
      text: `To the north you see a large, gnarled tree. East is where you
    woke up. There is a large wall of solid rock to the west. And to the south is a cluster
    of jagged rocks.`,
      choices: [
        { text: `Explore the gnarled tree`, nextStep: 15 },
        { text: `Go East to the hilltop`, nextStep: 12 },
        { text: `Check out the jagged rocks`, nextStep: 16 },
        { text: `Examine the solid rock wall`, nextStep: 17 },
        { text: `Pick mushrooms`, nextStep: 9 },
        { text: `Look inside log`, nextStep: 10 },
      ],
    },
    {
      storyStep: 12,
      text: `You are at the top of a hill.
    Gnarled roots and underbrush cover the forest floor making for uneven footing.
    At the bottom of the hill, you see a backpack with its contents spilled out.
    To the south, the terrain becomes steep and mountainous. To the west, you see an
    enourmous log. A thick wall of brambles and pine trees blankets the east.
    
    Where will you go?`,
      choices: [
        { text: `North, down the hill`, nextStep: 3 },
        { text: `East toward the brambles`, nextStep: 4 },
        { text: `South toward the mountain`, nextStep: 5 },
        { text: `West toward the log`, nextStep: 6 },
        { text: `Try to remember`, nextStep: 1 },
      ],
    },
    {
      storyStep: 13,
      text: `A large, rotting, gray tree towers over your head. Termites are
      crawling all over it, hard at work.`,
      choices: [
        { text: "Examine Tree", nextStep: 18 },
        { text: "Get bearings.", nextStep: 20 },
        { text: "Kick Tree", nextStep: 21 },
        { text: "Poke termintes with stick", nextStep: 22 },
      ],
    },
    {
      storyStep: 14,
      text: `Large boulders lie at the base of a cliff. Some of them are as tall
      as you are.`,
      choices: [
        { text: "Try to climb", nextStep: 26 },
        { text: "Pick up rocks...just in case", nextStep: 28 },
        { text: "get bearings", nextStep: 35 },
      ],
    },
    {
      storyStep: 15,
      text: `In front of you is the largest tree. You have seen.
    In your life. You estimate five people would need to wrap their arms around its
    trunk to form a complete circle. Its ancient, twisted roots sprawl in a massive knot at
    your feet.`,
      choices: [
        { text: "examine tree", nextStep: 24 },
        { text: "get bearings", nextStep: 33 },
      ],
    },
    {
      storyStep: 16,
      text: `Jagged rocks rise around you. This would definitely
    not be your first choice for a weekend rock-climbing retreat. One wrong step and you
    could be impaled by a sharp rock.`,
      choices: [
        { text: "Go Back", nextStep: 11 },
        { text: "Pick up rocks", nextStep: 27 },
      ],
    },
    {
      storyStep: 17,
      text: `Not much to see here. This part of the mountainside consists
    of a sheer, vertical wall towering toward the sky. No way you could climb that.`,
      choices: [{ text: "get bearings", nextStep: 19 }],
    },
    {
      storyStep: 18,
      text: `A gust of wind swoops through the tree's barren branches causing it 
      to creak and groan like an unoiled hinge. There is a pile of dead, 
      dry wood surrounding the tree where its branches fell. Above, you see in its 
      lifeless bower detached branches readying to plummit to the earth.`,
      choices: [
        { text: "Get bearings", nextStep: 20 },
        { text: "Kick Tree", nextStep: 21 },
        { text: "Poke termintes with stick", nextStep: 22 },
        { text: "Gather branches", nextStep: 23 },
      ],
    },
    {
      storyStep: 19,
      text: `To the northeast is a large, gnarled tree.
    to the east is a moss covered log.`,
      choices: [
        { text: "explore gnarled tree", nextStep: 15 },
        { text: "examine mossy log", nextStep: 6 },
      ],
    },
    {
      storyStep: 20,
      text: `To the south are some brambles. To the west is a downward sloping hill.`,
      choices: [
        { text: "Brambles", nextStep: 4 },
        { text: "Downhill", nextStep: 34 },
        { text: "Examine dead tree", nextStep: 13 },
      ],
    },
    {
      storyStep: 21,
      text: `Channeling your inner Jackie Chan, you swing your foot
    and kick the dead tree as hard as you can. The branches rattle from the blow.
    You stand proud, admiring your ninja skills, when you hear something snap.
    A dead branch was shaken loose from your kick. It tumbles down and conks you
    squarely on the head. Good work Jackie Chan.`,
      choices: [
        { text: "get bearings", nextStep: 20 },
        { text: "examine tree", nextStep: 13 },
      ],
    },
    {
      storyStep: 22,
      text: `You pick up one of the dead branches and poke the
    swarth of termites crawling up and down the dead trunk. They seem nonplussed. Were
    you hoping for something dramatic?`,
      choices: [
        { text: "get bearings", nextStep: 20 },
        { text: "examine tree", nextStep: 13 },
      ],
    },
    {
      storyStep: 23,
      text: `These dead, dry branches will be perfect for kindling.
    You gather some into a bundle and tuck it under your arm.`,
      choices: [
        { text: "get bearings", nextStep: 20 },
        { text: "examine tree", nextStep: 13 },
      ],
    },
    {
      storyStep: 24,
      text: `Upon closer examination, you see a hollow in the gnarled tree trunk.
    Inside the hollow is a large feather.`,
      choices: [{ text: "get bearings", nextStep: 33 }],
    },
    {
      storyStep: 25,
      text: `You see a wide, rushing river with white rapids swirrling around 
      rocks of sundry shapes and sizes. 
      The sound of the rapids is so loud you can't imagine carrying out a 
      serious conversation here...If there were anyone around, that is.
    `,
      choices: [
        { text: "Get bearings", nextStep: 29 },
        { text: "Swim across", nextStep: 30 },
        { text: "Throw stick in", nextStep: 31 },
        { text: "Rock hop to the other side", nextStep: 32 },
      ],
    },
    {
      storyStep: 26,
      text: `You climb on top of one of the medium size boulders.
    "I'm king of the mountain!" You shout...now what?`,
      choices: [{ text: "get bearings", nextStep: 35 }],
    },
    {
      storyStep: 27,
      text: `You pick up a couple of sharp rocks. Maybe you could make a spear out of these?
      ...wait, how do you make a spear?`,
      choices: [{ text: "Go Back", nextStep: 11 }],
    },
    {
      storyStep: 28,
      text: `You gather some medium size rocks and begin stuffing them
      in your pockets. You're sure these rocks will come in hand sooner or
      later...right?`,
      choices: [],
    },
    {
      storyStep: 29,
      text: `Beyond the river, you see more foliage. It is far too dense to make out anything else in much detail.
      To the Southeast is a large, barren tree.`,
      choices: [
        { text: "Swim across", nextStep: 30 },
        { text: "Throw stick in", nextStep: 31 },
        { text: "Rock hop to the other side", nextStep: 32 },
        { text: "Turn back toward the gnarled tree", nextStep: 15 },
      ],
    },
    {
      storyStep: 30,
      text: `You're about to jump into the river feet first. 
    But something tells you jumping into an uncontrollably fast river with 
    jutting rocks might not be a good idea and you think better of it.`,
      choices: [
        { text: "Get bearings", nextStep: 29 },
        { text: "Throw stick in", nextStep: 31 },
        { text: "Rock hop to the other side", nextStep: 32 },
      ],
    },
    {
      storyStep: 31,
      text: `You find a large branch and hurl it into the river like a javalin.
    The branch is swept under the current, bobbing swiftly downstream. 
    Ultimately,it smashes into a rock and snaps in two. The pieces careen, flipping and flailing, out of sight.`,
      choices: [
        { text: "Get bearings", nextStep: 29 },
        { text: "Swim across", nextStep: 30 },
        { text: "Rock hop to the other side", nextStep: 32 },
      ],
    },
    {
      storyStep: 32,
      text: `Determined that whatever is on the other side of this river, 
    that's where you need to be, you bend your knees and swing your arms back readying to
     leap to the nearest stone.You're just about to propel yourself forward, 
     when you slip on a wet rock and land flat on your bottom
    Maybe hopping across the rushing river on slippery, wet rocks is not the best idea.`,
      choices: [
        { text: "Get bearings", nextStep: 29 },
        { text: "Swim across", nextStep: 30 },
        { text: "Throw stick in", nextStep: 31 },
      ],
    },
    {
      storyStep: 33,
      text: `To the north is a rushing river. A mossy log lies to your south.
    To the east, a gentle slope where you see your backpack and its contents 
    sprawled along the forset floor.`,
      choices: [
        { text: "Examine rushing river", nextStep: 25 },
        { text: `Go south toward the log`, nextStep: 6 },
        { text: `Go east`, nextStep: 34 },
      ],
    },
    {
      storyStep: 34,
      text: `Upon reaching the bottom of the hill, you see your backpack.
    It looks like it took a good tumble down the hill.
    It seems to have ripped at the seams, spewing its contents down the hillside.`,
      choices: [
        { text: "Examine contents", nextStep: 36 },
        { text: `Get bearings`, nextStep: 37 },
      ],
    },
    { storyStep: 35, text: `Boulders bearings`, choices: [] },
    {
      storyStep: 36,
      text: `A few items of clothing are hanging in the branches of the surrounding
    shrubbery...including some underwear. Well that's embarrassing. 
    You see your sleeping bag, still strapped to the top of your pack. 
    A pocket knife, that you probably packed just to look cool, rests at your feet.
     A dirt crusted book peaks out from some leaves that must have
     blown over it in the wind.The metal casing of a flashlight 
     glimmers two feet up the hill, where a rock seems to have broken its fall.
     
     What do you wish to examine?`,
      choices: [
        { text: "Clothing", nextStep: 38 },
        { text: "Sleeping bag", nextStep: 39 },
        { text: "Pocket knife", nextStep: 40 },
        { text: "Book", nextStep: 41 },
        { text: "Flashlight", nextStep: 42 },
        { text: "Backpack", nextStep: 43 },
        { text: `Get bearings`, nextStep: 37 },
      ],
    },
    {
      storyStep: 37,
      text: `To the east is a large, gnarled tree. To the west is 
    a rotting, dead tree. To the north, a steep hill rises. The hill is covered
    in roots and underbrush.`,
      choices: [
        { text: "Examine backpack contents", nextStep: 36 },
        { text: "Explore the gnarled tree", nextStep: 15 },
        { text: "Check out the dead tree", nextStep: 13 },
      ],
    },
    {
      storyStep: 38,
      text: `You carefully manuveur through the pointy branches of numerous
    small to medium size shrubs and recover a dirty shirt, 
    some sweat pants and some smelly underwear.
    
    When's the last time you washed these?`,
      choices: [
        { text: `Get bearings`, nextStep: 37 },
        { text: "Examine backpack contents", nextStep: 36 },
      ],
    },
    {
      storyStep: 39,
      text: `Despite what was probably your best efforts at rolling
    your sleeping bag tight and secure, it has come slightly unrolled. It is covered in dirt,
    yet somehow remains haphazardly attached to your pack.
    There also seems to be some bird poop on it. Great. You pick up your sleeping bag
    and shake it off.`,
      choices: [
        { text: `Get bearings`, nextStep: 37 },
        { text: "Examine more backpack contents", nextStep: 36 },
      ],
    },
    {
      storyStep: 40,
      text: `You know you only packed it because you wanted to look cool...
    but who knows? Maybe this pocket knife will actually come in handy. 
    You blow the dirt off of it and stick it in your pocket.`,
      choices: [
        { text: `Get bearings`, nextStep: 37 },
        { text: "Examine more backpack contents", nextStep: 36 },
      ],
    },
    {
      storyStep: 41,
      text: `You stoop over and brush the leaves off of the book.
      In spite of your deepest wishes for it to be a "How to Survive When
      Lost in the Woods" book, it seems to be a library book about a future robot
      apocalypse. Well, at least you have good taste. 
      
      You see a photograph nearby that must have fallen out from between it's pages. 
      It's a photo of youreslf and another person. A girl with brown hair. 
      
      As you look at the photograph, you remember that this person was with you 
      before you hit your head...but you can't remember her name. You think it
      might have started with an A...Alice? Andrea? Something like that.`,
      choices: [
        { text: `Get bearings`, nextStep: 37 },
        { text: "Examine more backpack contents", nextStep: 36 },
      ],
    },
    {
      storyStep: 42,
      text: `You retrieve what was once your flashlight. 
    It has a large crack where the casing split in two and the batteries seem to be
    nowhere in sight. Doesn't look like you'll be getting much use out of this now.
    `,
      choices: [
        { text: `Get bearings`, nextStep: 37 },
        { text: "Examine more backpack contents", nextStep: 36 },
      ],
    },
    {
      storyStep: 43,
      text: `Your backpack has split open, rendering it useless. But
    you still might be able to find something else inside of it.
    You go through the pockets trying to find anything else you might use. You
    find a few granola bars, insect repellent, SPF 50 sunscreen, a half empty waterbottle, and a first aid kit that looks like it was thrown
  in a ziplock bag at the last minute.`,
      choices: [
        { text: `Get bearings`, nextStep: 37 },
        { text: "Examine more backpack contents", nextStep: 36 },
      ],
    },
    {
      storyStep: 44,
      text: `You enter the maw of a vast, dark cave. If nothing else,
    this could keep you sheltered from the rain. Looking around, you see a crevace toward
    the back of the cave you think you could just squeeze through. What do you do?`,
      choices: [
        {
          text: `Try to start a fire in the shelter of the cave`,
          nextStep: 45,
        },
        { text: "Go North toward the birch trees", nextStep: 5 },
        { text: `See what's on the other side of the crevace`, nextStep: 46 },
      ],
    },
    {
      storyStep: 45,
      text: `You build a small tipi of sticks 
    with dry kindling you gathered from the 
    forest floor.`,
      choices: [],
    },
    {
      storyStep: 46,
      text: `Squeezing through the crevace, you
    come to a dark, wide opening. Stalactites and stalagmites protrude 
    like claws from the ground and the roof of the cave.
    There is a crude well to the east, beyond which the cave seems to narrow into 
    a small corridor. To the south, there is a steep slope upward.`,
      choices: [
        {
          text: `Examine the well`,
          nextStep: 47,
        },
        { text: "Explore the corridor", nextStep: 48 },
        { text: `Go north towards the mouth of the cave`, nextStep: 44 },
        { text: `Go south towards the rising slope`, nextStep: 49 },
      ],
    },
    {
      storyStep: 47,
      text: `A crude circle of stones are stacked around a deep, dark, hole.
    A few broken pitchers of clay lie at its base
    There is a rope tied to a nearby stalactite at one end that descends down
    the well at the other. `,
      choices: [
        {
          text: `Throw a rock down the well`,
          nextStep: 50,
        },
        { text: "Climb down the well", nextStep: 51 },
        {
          text: "Forget this well. Explore the rest of the cave",
          nextStep: 46,
        },
      ],
    },
    {
      storyStep: 48,
      text: `A natural corridor seems to be carved through the rock to the East.
    As you make your way further down the corridor, you hear the sound of rushing water.
    After a few minutes of walking, the corridor opens to a vast chamber. Before you is
    an underground lake with a roaring waterfall pouring from somewhere far up above.
    A path from where you stand curves around behind the waterfall.`,
      choices: [
        {
          text: `Swim in the lake`,
          nextStep: 55,
        },
        { text: "Follow the path behind the waterfall", nextStep: 56 },
      ],
    },
    {
      storyStep: 49,
      text: `The slope is steep, but not so steep you can't climb it.
    It's just rocky enough for you to get a good foothold. When you reach the top,
    you can't believe your eyes. The walls and floor are covered in shimmering, blue
    crystals that seem to glow in the darkness.`,
      choices: [
        {
          text: `Pocket a shard of crystal`,
          nextStep: 54,
        },
        { text: "Turn around and climb back down the slope", nextStep: 46 },
      ],
    },
    {
      storyStep: 50,
      text: `You throw a rock down the well...After a minute or two you hear
    the faint echo of stone hitting stone.`,
      choices: [{ text: "Examine well", nextStep: 47 }],
    },
    {
      storyStep: 51,
      text: `That rope looks secure enough. What could go wrong?
    Clinging to the rope, you carefully descend the well.
    Miraculously, you reach the bottom without injury.You gasp.
    In the dim light, you can barely make out what seems to be a human skeleton in 
    a heap on the ground.`,
      choices: [
        { text: "Run awaaay!!!", nextStep: 47 },
        {
          text: "Examine skeleton",
          nextStep: 52,
        },
      ],
    },
    {
      storyStep: 52,
      text: `You've never seen a human skull before.
    You stare gapemouthed at it for a while then give it a small kick.
    Something glints from beneath the bones...`,
      choices: [
        { text: "Run awaaay!!!", nextStep: 47 },
        {
          text: "Examine glint",
          nextStep: 53,
        },
      ],
    },
    {
      storyStep: 53,
      text: `Nestled within the eye of the skull is an old, rusted key.
    You take the key and place it in your pocket.`,
      choices: [{ text: "Run awaaay!!!", nextStep: 47 }],
    },
    {
      storyStep: 54,
      text: `You slip a good sized crystal in your pocket. 
      You wonder if it's worth anything.`,
      choices: [{ text: "Turn back", nextStep: 46 }],
    },
    {
      storyStep: 55,
      text: `You step into the cool water of 
    the underground lake. You feel refreshed as the sweat and dirt
    wash off of you. As you kick your feet, splashing about the lake, you 
    stub your toe on something hard."Ouch!" you cry. That didn't feel like a rock`,
      choices: [
        {
          text: "Dive under water and try to see what you stubbed your toe on",
          nextStep: 60,
        },
        {
          text: "This lake isn't safe, get out while you still can!",
          nextStep: 48,
        },
      ],
    },

    {
      storyStep: 56,
      text: `You follow a path that curves behind the waterfall.
      As you approach the waterfall, you feel the spray of water mysting your skin. From here, 
      you can reach out and touch the waterfall.
       You feel the cool rush of water splashing through your fingers.
       But that's not all you see.
      To your surprise, the waterfall had concealed a hinged, metal door.`,
      choices: [
        {
          text: `Turn back`,
          nextStep: 47,
        },
        {
          text: `Enter the metal doorway`,
          nextStep: 57,
        },
      ],
    },

    {
      storyStep: 57,
      text: `You push the rusty, metal door open and
    see a  long path, gently sloping upward. Light is pouring from above.`,
      choices: [
        {
          text: `Go down toward the underground lake`,
          nextStep: 54,
        },
        {
          text: `Ascend the path behind the metal door.`,
          nextStep: 58,
        },
      ],
    },
    {
      storyStep: 58,
      text: `As you near the end of the hallway, you 
    hear birds chirping and feel a gentle breeze. You have found an exit from
    the cave! As you step into the sunlight, you realize that it is nearly dusk.
    Ahead, through the trees, you see what appears to be the gentle glow of a fire.
    You hear some distant voices.`,
      choices: [
        {
          text: `Go back down toward the metal door`,
          nextStep: 57,
        },
        {
          text: `Approach the fire.`,
          nextStep: 59,
        },
      ],
    },
    {
      storyStep: 59,
      text: `As you approach the fire, you are relieved
    to see people. Real, live human beings! At first they don't see you.
    Then a girl with brown hair suddenly turns in your direction. "There you are!"
    She says, "We've been looking all over for you!" Everyone turns to look and you are
    met with many such enthusiastic greetings.

    It's all coming back to you. You were hiking together as a group when
    you saw a majestic red fox. You couldn't miss this photo opportunity. You followed
    the fox from a distance, trying not to startle it.

    As you were rifeling through your bag to find your camera, the fox bolted.
   You tried clumsily to run after it while rummaging through your bag.
    You tripped on a root and your backpack went flying. 
   
    Faces, names, it all comes back. You're so happy to finally be safe
    and sound with friends!
    
    The End
    
    `,
      choices: [],
    },
    { storyStep: 60, text: `Dive under water`, choices: [] },
    { storyStep: 61, text: ``, choices: [] },
    { storyStep: 62, text: ``, choices: [] },
    { storyStep: 63, text: ``, choices: [] },
    { storyStep: 64, text: ``, choices: [] },
    { storyStep: 65, text: ``, choices: [] },
    { storyStep: 66, text: ``, choices: [] },
    { storyStep: 67, text: ``, choices: [] },
    { storyStep: 68, text: ``, choices: [] },
  ];
  const currentStep = storyContent[storyStep];

  const handleChoice = (nextStep) => {
    setStoryStep(nextStep);
  };

  return (
    <Card sx={{ minWidth: 600, maxWidth: 800, margin: "auto" }}>
      <StorySteps step={currentStep} onChoiceSelect={handleChoice} />
    </Card>
  );
};
