const PARKS = [
  {
    id: Math.random().toString(),
    parkName: "Hibernia Park",
    distanceAway: 4,
    distanceDirection: "EAST",
    parkImg: require("../images/race-street-park.png"),
    township: "WEST CALN",
    region: {
      latitude: 40.0313,
      longitude: -75.8409,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
    coordinate: {
      latitude: 40.0313,
      longitude: -75.8409,
    },
    latitude: 40.0313,
    longitude: -75.8409,
    facilities: ["RESTROOMS", "PARKING"],
    activities: [
      "TRAILS",
      "BOATING",
      "BIKING",
      "FISHING",
      "EQUESTRIAN",
      "BIRDING",
      "SPORTS",
      "PLAYGROUND",
      "PICNIC",
      "SWIMMING",
    ],

    description1: `Hibernia County Park consists of over 900 acres of trails, woodlands, meadows, open fields, play areas, pavilions, camping and picnic areas.  Popular fishing sites include the Brandywine Creek's west branch, Birth Run & a children's pond.  Chambers Lake is a great spot for boarting and fishing.\n\nThe park is open from 8am to sunset.  Campgrounds are open on weekends May through October.`,
    notesAndTips: [
      {
        noteId: "1",
        noteName: `The park is open to the public everyday, with the expection of when in use by the Montessori pre-school (Monday-Friday, use time vary)`,
      },
    ],
    imgCarousel: [
      {
        imgId: 1,
        imgLocation: require("../images/race-street-park.png"),
      },
      {
        imgId: 2,
        imgLocation: require("../images/race-street-park.png"),
      },
      {
        imgId: 3,
        imgLocation: require("../images/race-street-park.png"),
      },
      {
        imgId: 4,
        imgLocation: require("../images/race-street-park.png"),
      },
      {
        imgId: 5,
        imgLocation: require("../images/race-street-park.png"),
      },
    ],
  },
  {
    id: Math.random().toString(),
    parkName: "Race Street Park",
    distanceAway: 4,
    distanceDirection: "EAST",
    parkImg: require("../images/race-street-park.png"),
    township: "KENNETT SQUARE BOROUGH",
    region: {
      latitude: 39.848,
      longitude: -75.7055,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
    coordinate: {
      latitude: 39.848,
      longitude: -75.7055,
    },
    latitude: 39.848,
    longitude: -75.7055,
    facilities: ["PLAYGROUND", "PARKING"],
    activities: ["TRAILS"],
    description1:
      "Race Street Park is a small, linear park with children's playground, a gazebo and access to the Red Clay Creek Trail located at the intersection of State Street and Race Street.  The park is owned by the YMCA, but open to the public, and is located adjacent to the Kennett Area YMCA, with ample parking.",
    notesAndTips: [
      {
        noteId: "1",
        noteName: `The park is open to the public everyday, with the expection of when in use by the Montessori pre-school (Monday-Friday, use time vary)`,
      },
    ],
    imgCarousel: [
      {
        imgId: 1,
        imgLocation: require("../images/race-street-park.png"),
      },
      {
        imgId: 2,
        imgLocation: require("../images/race-street-park.png"),
      },
      {
        imgId: 3,
        imgLocation: require("../images/race-street-park.png"),
      },
      {
        imgId: 4,
        imgLocation: require("../images/race-street-park.png"),
      },
      {
        imgId: 5,
        imgLocation: require("../images/race-street-park.png"),
      },
    ],
  },
  {
    id: Math.random().toString(),
    parkName: "ChesLen Preserve",
    distanceAway: 5.1,
    distanceDirection: "NORTH EAST",
    parkImg: require("../images/kennett-community-park.png"),
    township: "NEWLIN",
    region: {
      latitude: 39.9222,
      longitude: -75.7256,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    },
    coordinate: {
      latitude: 39.9222,
      longitude: -75.7256,
    },
    latitude: 39.9222,
    longitude: -75.7256,
    facilities: ["RESTROOMS", "PARKING"],
    activities: ["TRAILS", "BOATING", "EQUESTRIAN", "BIRDING", "PLAYGROUND"],
    description1:
      "One of the largest private nature preserves in southeastern Pennsylvania, Natural Lands Trust's 1,263-acre ChesLen Preserve is home to an array of diverse natural features, including rolling agricultural fields, wooded stream corridors and serpentine barrens.  The preserve has been designated as a Pennsylvania Wild Plant Sanctuary by PA Department of Conservation and Natural Resources due in part to the plant life foudn in the Unionville Barrens and is included as part of Audubon's important Bird Area, where birds such as Indigo Bunting and Wood Sparrows, among others, might be spotted.  There are 13 miles of unpaved trailes within the preserve.  Kayaking and canoeing is permitted (call for information), as is horseback riding on designated trailes, though trailers are not permitted.  Dogs are welcome but must be leashed at all times.  A children's NaturePlayGround can be found near the Lenfest Center that allows children to explore the natural landscape.",
    notesAndTips: [
      {
        noteId: "1",
        noteName: `There are multiple parking lots at the preserve.\nThis app will direct you to the main lot at the Lenfest Center.`,
      },
      {
        noteId: "2",
        noteName:
          "For accurate trail maps of the preserve or to locate additional parking lots, visit Natural Lands Trust's website https://natlands.org or download the free Explore NLT app from the App Store or Google Play.",
      },
      {
        noteId: "3",
        noteName:
          "ChesLen Preserve is open daily, free of charge, from dawn to dusk.",
      },
      {
        noteId: "4",
        noteName:
          "Love your visit?  Lend your support!  Become a member at https://natlands.org/membership.",
      },
      {
        noteId: "5",
        noteName: "Photos courtesy of Natural Lands Trust",
      },
    ],
    imgCarousel: [
      {
        imgId: 1,
        imgLocation: require("../images/kennett-community-park.png"),
      },
      {
        imgId: 2,
        imgLocation: require("../images/kennett-community-park.png"),
      },
      {
        imgId: 3,
        imgLocation: require("../images/kennett-community-park.png"),
      },
      {
        imgId: 4,
        imgLocation: require("../images/kennett-community-park.png"),
      },
      {
        imgId: 5,
        imgLocation: require("../images/kennett-community-park.png"),
      },
    ],
  },
];
export default PARKS;
