import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    id: 1,
    name: "Sonny Sangha",
    src: "https://instagram.fcmb11-1.fna.fbcdn.net/v/t51.2885-19/403953660_1073344357432628_1271711115309760527_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcmb11-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=uXMEan6J2M4AX9oQCMy&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB1F7cSB6P8Eq-1ECtDKlsmbJ82XkQe3hbeZ5t0YVXlJw&oe=6566BC41&_nc_sid=8b3546",
    profile:
      "https://instagram.fcmb11-1.fna.fbcdn.net/v/t51.2885-19/403953660_1073344357432628_1271711115309760527_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcmb11-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=uXMEan6J2M4AX9oQCMy&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB1F7cSB6P8Eq-1ECtDKlsmbJ82XkQe3hbeZ5t0YVXlJw&oe=6566BC41&_nc_sid=8b3546",
  },
  {
    id: 2,
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    id: 3,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://th-i.thgim.com/public/incoming/9uvnty/article67222424.ece/alternates/BASE_SQUARE/2023-08-04T094328Z_1224629970_RC2WG2AC6YU7_RTRMADP_3_WPP-RESULTS-TWITTER.JPG",
  },
  {
    id: 4,
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://hips.hearstapps.com/hmg-prod/images/of-facebook-mark-zuckerberg-walks-to-lunch-following-a-news-photo-1683662107.jpg?crop=1xw:0.53687xh;center,top&resize=1200:*",
  },
  {
    id: 5,
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
