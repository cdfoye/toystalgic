const db = require("./connection");
// added Post 7/29 -cf
const { User, Product, Category, Post } = require("../models");
// added postSeeds 7/29 - cf
const postSeeds = require("./postSeeds.json");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Pre-60's" },
    { name: "1960's" },
    { name: "1970's" },
    { name: "1980's" },
    { name: "1990's" },
    { name: "2000's" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Polly Pocket",
      description: "Small doll that began production in 1989",
      image: "polly.jpg",
      category: categories[3]._id,
      price: 43.0,
      quantity: 2,
    },
    {
      name: "Tamagotchi",
      description:
        "Digital pet that requires feeding, playing and care. Small enough to be carried around in your pocket!",
      image: "tamagotchi.jpg",
      category: categories[4]._id,
      price: 20.99,
      quantity: 5,
    },
    {
      name: "Lite-Brite",
      category: categories[1]._id,
      description:
        "Light box with colored plastic pegs that can be placed into a design",
      image: "lite-brite.jpg",
      price: 35.0,
      quantity: 3,
    },
    {
      name: "Troll Doll",
      category: categories[0]._id,
      description: "Plastic doll with distinctive colorful hair",
      image: "trolls.jpg",
      price: 13.99,
      quantity: 1,
    },
    {
      name: "Furby",
      category: categories[4]._id,
      description:
        "Electronic robot that resembles a hamster/owl-like create with speaking capabilities in 24 languages",
      image: "furby.jpg",
      price: 35.0,
      quantity: 10,
    },
    {
      name: "Millennial Falcon",
      category: categories[2]._id,
      description: "Starship from the Star Wars franchise",
      image: "falcon.jpg",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "Barbie",
      category: categories[0]._id,
      description:
        "Plastic doll that swept the globe and is still a staple toy today",
      image: "barbie.jpg",
      price: 99.99,
      quantity: 15,
    },
    {
      name: "Cabbage Patch Kid",
      category: categories[3]._id,
      description: "Soft sculptured doll that resembles a small child",
      image: "cabbage.jpg",
      price: 59.99,
      quantity: 9,
    },
    {
      name: "Beanie Babies",
      category: categories[4]._id,
      description:
        "Soft plush exterior, with plastic pellet filling made in many different cute designs",
      image: "beanie.jpg",
      price: 41.99,
      quantity: 100,
    },
    {
      name: "My Little Pony",
      category: categories[4]._id,
      description: "Colorful ponies with unique symbols on their flanks",
      image: "pony.jpg",
      price: 14.99,
      quantity: 5,
    },
    {
      name: "Legos",
      category: categories[0]._id,
      description:
        "Small plastic interlocking blocks that can be put together into immeasurable formations",
      image: "lego.jpg",
      price: 17.99,
      quantity: 1,
    },
    {
      name: "Game Boy",
      category: categories[4]._id,
      description:
        "Japanese manufactured handheld gaming console with many different game options",
      image: "game-boy.jpg",
      price: 69.99,
      quantity: 16,
    },
    {
      name: "Smurfs",
      category: categories[3]._id,
      description:
        "Belgian comic centered around fictional colony of small, blue, humanoid creatures who live in the forest",
      image: "smurfs.jpg",
      price: 6.5,
      quantity: 2,
    },
    {
      name: "Hungry Hungry Hippos",
      category: categories[2]._id,
      description:
        "Tabletop game where players collect as many marbles as possible",
      image: "hippo.jpg",
      price: 79.99,
      quantity: 3,
    },
    {
      name: "Hot Wheels Track",
      category: categories[1]._id,
      description: "Track for Hot Wheels cars to race",
      image: "hotwheel.jpg",
      price: 45.0,
      quantity: 4,
    },
    {
      name: "View-Master",
      category: categories[1]._id,
      description:
        "Stereoscope that uses various reels to show small transparent color photographs",
      image: "viewmaster.jpg",
      price: 29.99,
      quantity: 13,
    },
    {
      name: "Simon Says",
      category: categories[2]._id,
      description:
        "Handheld short-term memory game using lights and tones to test user, increasing in complexity with each level",
      image: "simon.jpg",
      price: 19.99,
      quantity: 10,
    },
    {
      name: "Winnie-The-Pooh",
      category: categories[1]._id,
      description:
        "Stuffed bear based off of the fictional bear from the series of books by A. A. Miline",
      image: "pooh.jpg",
      price: 15.0,
      quantity: 19,
    },
    {
      name: "Easy Bake Oven",
      category: categories[2]._id,
      description:
        "Working toy oven where children can bake small confectionaries using ordinary incandescent light bulbs",
      image: "easy-bake.jpg",
      price: 29.99,
      quantity: 3,
    },
    {
      name: "Atari",
      category: categories[2]._id,
      description:
        "Home video game console famous for such games as Pong and Tetris",
      image: "atari.jpg",
      price: 55.0,
      quantity: 1,
    },
    {
      name: "Pokemon Cards",
      category: categories[4]._id,
      description:
        "Strategy based card game where players battle with their cards",
      image: "pokemon.jpg",
      price: 3.25,
      quantity: 15,
    },
    {
      name: "Operation",
      category: categories[1]._id,
      description:
        "Skill based game that tests users hand-eye coordination, and fine-motor skills",
      image: "operation.jpg",
      price: 15.99,
      quantity: 13,
    },
    {
      name: "Sky Dancers",
      category: categories[4]._id,
      description:
        "Doll toy with pull string and foam wings that would launch in the air when the string is pulled",
      image: "sky-dancer.jpg",
      price: 29.99,
      quantity: 3,
    },
    {
      name: "Glo Worm",
      category: categories[3]._id,
      description: "Battery powered stuffed worm that lights up when squeezed",
      image: "glo-worm.jpg",
      price: 21.99,
      quantity: 23,
    },
    {
      name: "Pogo Stick",
      category: categories[0]._id,
      description: "Device for jumping off the ground in the standing position",
      image: "pogo.jpg",
      price: 63.99,
      quantity: 34,
    },
    {
      name: "Slinky",
      category: categories[0]._id,
      description:
        "Helical spring toy that perform a number of tricks, aided by gravity and its own momentum",
      image: "slinky.jpg",
      price: 13.99,
      quantity: 45,
    },
    {
      name: "Teletubbies",
      category: categories[4]._id,
      description: "",
      image: "teletubbies.jpg",
      price: 13.0,
      quantity: 10,
    },
    {
      name: "Littlest Pet Shop",
      category: categories[5]._id,
      description:
        "Toy franchise based off of cartoon series that allows users to adopt pets",
      image: "pet-shop.jpg",
      price: 44.99,
      quantity: 2,
    },
    {
      name: "Robot Dog",
      category: categories[4]._id,
      description:
        "Robot designed to look like a dog that has similar characteristics to a real dog",
      image: "robot-dog.jpg",
      price: 21.99,
      quantity: 6,
    },
    {
      name: "American Girl Doll",
      category: categories[2]._id,
      description:
        "18-inch doll that come in a variety of ethnicities from various times in history",
      image: "american.jpg",
      price: 33.99,
      quantity: 2,
    },
    {
      name: "iPod",
      category: categories[3]._id,
      description:
        "Handheld music player that can hold 1,000 songs in your pocket",
      image: "ipod.jpg",
      price: 32.99,
      quantity: 10,
    },
    {
      name: "Plastic Soldiers",
      category: categories[0]._id,
      description: "Small plastic infantry people for pretend play",
      image: "army.jpg",
      price: 29.99,
      quantity: 90,
    },
    {
      name: "GI Joe",
      category: categories[1]._id,
      description:
        "Action figure doll representative of the branches of the US Military",
      image: "joe.jpg",
      price: 179.99,
      quantity: 1,
    },
    {
      name: "Mr. Potato Head",
      category: categories[2]._id,
      description: "Potato shaped toy with interchangeable feature parts",
      image: "potato.jpg",
      price: 45.0,
      quantity: 8,
    },
    {
      name: "Ninja Turtles",
      category: categories[2]._id,
      description: "Figurine toys based on the comic franchise",
      image: "turtles.jpg",
      price: 23.99,
      quantity: 6,
    },
    {
      name: "Bop-It",
      category: categories[4]._id,
      description: "Popular game where user has to follow series of commands",
      image: "bopit.jpg",
      price: 9.99,
      quantity: 14,
    },
    {
      name: "FAO Schwartz Piano",
      category: categories[2]._id,
      description: "Giant dance-on piano",
      image: "faoKeyboard.jpg",
      price: 59.99,
      quantity: 1,
    },
    {
      name: "Rockem Sockem Robots",
      category: categories[4]._id,
      description: "Two player action toy and game with two dueling boxers",
      image: "rockemsockem.jpg",
      price: 18.99,
      quantity: 12,
    },
    {
      name: "Gremlin",
      category: categories[3]._id,
      description:
        "Creatures who transform into small, destructive, aggressive monsters that wreak havoc",
      image: "gremlin.jpg",
      price: 14.99,
      quantity: 4,
    },
    {
      name: "Mr. T Toy",
      category: categories[3]._id,
      description:
        "The Muscle for the A-Team, able to perform exceptional feats of strength",
      image: "mr-t.jpg",
      price: 19.99,
      quantity: 10,
    },
    {
      name: "Cookie Monster",
      category: categories[2]._id,
      description: "",
      image: "cookieMonster.jpg",
      price: 39.99,
      quantity: 30,
    },
    {
      name: "Pound Pupppies",
      category: categories[3]._id,
      description:
        "Variety of plush stuffed dog dolls with floppy ears and droopy eyes",
      image: "poundPuppies.jpg",
      price: 9.99,
      quantity: 16,
    },
    {
      name: "Pac-Man Arcade Game",
      category: categories[3]._id,
      description:
        "1980 maze action video game developed and released by Namco for arcades",
      image: "pacman.jpg",
      price: 519.99,
      quantity: 2,
    },
    {
      name: "Back To The Future Delorian",
      category: categories[3]._id,
      description:
        "Toy car modeled from the Delorian from the Back To The Future movie",
      image: "delorian.jpg",
      price: 18.99,
      quantity: 12,
    },
    {
      name: "Gumby",
      category: categories[3]._id,
      description:
        "American clay animation franchise, centered on the titular green clay humanoid character",
      image: "gumby.jpg",
      price: 4.99,
      quantity: 23,
    },
    // {
    //   name: "Simon Says",
    //   category: categories[2]._id,
    //   description: "",
    //   image: "simon.jpg",
    //   price: 19.99,
    //   quantity: 10,
    // },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Catherine",
    lastName: "Foye",
    email: "catherine@email.com",
    password: "Catherine123",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Cynthia",
    lastName: "Godoy",
    email: "cynthia@email.com",
    password: "Cynthia123",
  });

  await User.create({
    firstName: "Kelly",
    lastName: "Walsh",
    email: "kelly@email.com",
    password: "Kelly123",
  });

  await User.create({
    firstName: "Aubree",
    lastName: "Zarges",
    email: "aubree@email.com",
    password: "Aubree123",
  });

  await User.create({
    firstName: "Chad",
    lastName: "Bryon",
    email: "brony4life@email.com",
    password: "RedFlag",
  });

  console.log("users seeded");

  // added 7/29 -cf
  try {
    await Post.deleteMany({});

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postAuthor } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { firstName: postAuthor },
        {
          $addToSet: {
            posts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("posts seeded");

  process.exit(0);
});
