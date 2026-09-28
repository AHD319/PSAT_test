// english_questions.js - PSAT Practice Test 2 (Reading & Writing)

const englishQuizData = {
  adaptiveThreshold: 15, // Score >= 15 routes to Harder Module 2; < 15 routes to Easier Module 2

  // Module 1 (27 Questions)
  module1: [
    {
      id: 1,
      question: "Although men dominated the field of biochemistry in the early twentieth century United States, this fact did not _____ Mildred Cohn's pursuit of a career in science. Due to Cohn's perseverance, she was the first woman to become president of the American Society for Biochemistry and Molecular Biology, as well as the first woman to serve as an editor for the Journal of Biological Chemistry.",
      options: ["A) strengthen", "B) assist", "C) warp", "D) prevent"],
      correctAnswer: "D"
    },
    {
      id: 2,
      question: "The works of Singaporean artist Simryn Gill typically _____ the theme of transition that is meant to echo the frequent relocations made by Gill and her family during her childhood, but they don't focus on transition alone; for instance, her work Dalam focuses on the individuality present in people's living spaces while still alluding to the transitory state of the country of Malaysia at the turn of the twenty-first century.",
      options: ["A) struggle with", "B) innovate upon", "C) concentrate on", "D) deviate from"],
      correctAnswer: "C"
    },
    {
      id: 3,
      question: "Set in an unfinished apartment building in twentieth century Buenos Aires, César Aira's 2009 novel Ghosts chronicles a young girl's fascination with the spirits who haunt the building. Because the girl's search for the ghosts is so _____ with numerous perils throughout the building, the reader begins to fear for the girl's life as the novel progresses.",
      options: ["A) wasteful", "B) treacherous", "C) cautious", "D) rousing"],
      correctAnswer: "B"
    },
    {
      id: 4,
      question: "In a 2005 paper, Benjamin Hsiao and colleagues reported that electrospinning, a process which uses electric force to draw threads of polymer into fibers, can be improved by the introduction of N,N-dimethylformamide (DMF). DMF reduced the surface tension of the polymer threads used in the team's experiments, which helped prevent _____ occurrences such as overheating and excess water discharge.",
      options: ["A) beneficial", "B) violent", "C) undesirable", "D) complex"],
      correctAnswer: "C"
    },
    {
      id: 5,
      question: "Many anthropologists _____ that Australopithecus africanus and Homo erectus were the two most recent modern human ancestors—these anthropologists presumed that one species evolved directly into the other over many thousands of years. The 1960 discovery of Homo habilis, which shares features with both of the aforementioned species, casts doubt upon this theory.",
      options: ["A) lamented", "B) postulated", "C) fabricated", "D) doubted"],
      correctAnswer: "B"
    },
    {
      id: 6,
      question: "The following is adapted from George Bernard Shaw's 1894 play Arms and the Man: A Peasant Play. Nicola is lecturing Louka regarding Catherine, the woman for whom they both work.\n\nNICOLA: Be warned in time, Louka: mend your manners. I know the mistress. She is so grand that she never dreams that any servant could dare to be disrespectful to her; but if she once suspects that you are defying her, out you go.\nLOUKA: I do defy her. I will defy her. What do I care for her?\nNICOLA: If you quarrel with the family, I never can marry you. It's the same as if you quarrelled with me!\n\nAs used in the text, what does the word 'mend' most nearly mean?",
      options: ["A) Forget", "B) Justify", "C) Rectify", "D) Uphold"],
      correctAnswer: "C"
    },
    {
      id: 7,
      question: "Archipelagos, also known as island groups, are most commonly clusters of islands located in close proximity to each other. These islands can be found bordering a large piece of land, on their own in a large body of water, or as land masses that were once attached to a continent but have since separated. In recent years, artificial archipelagos have also been created for different purposes.\n\nBased on the text, what is an archipelago?",
      options: [
        "A) A group of islands that form a cluster",
        "B) A piece of land surrounded by water on all sides",
        "C) A collection of bodies of water scattered near each other",
        "D) An island off the coast of a continent"
      ],
      correctAnswer: "A"
    },
    {
      id: 8,
      question: "The following text is adapted from Washington Irving's 1824 short story 'The Devil and Tom Walker.'\n\nAbout the year 1727, just at the time that earthquakes were prevalent in New England, and shook many tall sinners down upon their knees, there lived near this place a meagre, miserly fellow, of the name of Tom Walker. He had a wife as miserly as himself; they were so miserly that they even conspired to cheat each other. Whatever the woman could lay hands on she hid away; a hen could not cackle but she was on the alert to secure the new-laid egg. Her husband was continually prying about to detect her secret hoards, and many and fierce were the conflicts that took place about what ought to have been common property. They lived in a forlorn-looking house that stood alone and had an air of starvation.\n\nWhat choice best states the main idea of the text?",
      options: [
        "A) Earthquakes were common in New England in the 1700s.",
        "B) Tom and his wife are greedy people who don't even share with each other.",
        "C) Tom and his wife have become less happy each year they have been together.",
        "D) Tom and his wife are similar in that they love eggs."
      ],
      correctAnswer: "B"
    },
    {
      id: 9,
      question: "The early years of the film industry saw a remarkable level of equality between women and men. Women were involved in all aspects of production, including stunt work. Helen Gibson, who starred in 119 episodes of the 1910s series Hazards of Helen, was considered Hollywood's First Lady of Stunts. Stuntwomen continued to hold their own on the screen until Hollywood became lucrative in the 1920s. By the 1930s, women were sidelined from stunt work. Men, wearing clothing to mirror women actors in a practice called 'wigging,' replaced stuntwomen. It wasn't until the 1960s that dangerous roles were again performed by stuntwomen. In 1967, the Stunt Women's Association was created and put an end to wigging. This opened roles for the talented and fearless Kitty O'Neil, who was a stunt double in 52 episodes of the 1970s Wonder Woman series—a fitting end to decades of marginalization.\n\nWhich choice best describes the main idea of the text?",
      options: [
        "A) After enduring several decades of discrimination, stuntwomen in the film industry have experienced a resurgence, with women once again performing stunts.",
        "B) Although women played important roles in the development of the film industry, men replaced them once movies became profitable.",
        "C) Men took roles away from stuntwomen once they learned that they could earn money 'wigging.'",
        "D) Women were again hired to do stunts because of later roles that only women could portray."
      ],
      correctAnswer: "A"
    },
    {
      id: 10,
      question: "The LSU Campus Mounds located at Louisiana State University in Baton Rouge are structures composed of many layers of clay dirt which were built over the course of thousands of years by ancient hunter-gatherers. After studying a core sample in the 1980s, archaeologists concluded that the mounds were most likely a little over 5,000 years old. However, a team led by LSU geology professor Brooks Ellwood hypothesized that at least some components of the mounds may be as much as 11,000 years old. Using radiocarbon dating, Ellwood and his team conducted an analysis on the mounds, scanning specifically for organic material such as bone fragments and plant ash, which can assist with radiocarbon dating.\n\nWhich finding, if true, would most directly support the team's hypothesis?",
      options: [
        "A) Radiocarbon dating analysis on the bone fragments found within the mound reveals them to be 5,000 years old, corroborating earlier estimates.",
        "B) Another mound located in a different part of the country is revealed to have the same composition of organic material as the LSU mounds.",
        "C) Further analysis of the LSU mounds reveal the remnants of tools that were most likely used to by the hunter-gatherers who built the mound.",
        "D) Radiocarbon dating analysis dates ash from cane plants that was excavated from the LSU mounds to be 11,000 years old."
      ],
      correctAnswer: "D"
    },
    {
      id: 11,
      question: "While spending time in nature can have a positive effect on an individual's sense of mental well-being, it is not clear exactly which natural setting yields the greatest boon to well-being. Psychologists Nicol Bergou, Ryan Hammoud, and colleagues conducted an experiment in which participants visited both green spaces (areas around trees and other vegetation) and blue spaces (areas near visible bodies of water). As they visited these spaces over a fourteen-day period, participants were asked three times a day to report their positive and negative emotions. These reports were used to generate a well-being score from 10-50. After determining the mean difference between the scores in different locations and organizing the participants based on the number of reports each participant completed, the psychologists concluded that proximity to blue spaces was more beneficial to mental well-being than proximity to green spaces, observing that _____\n\nWhich choice most effectively uses data from the table to complete the statement?",
      figure: "english_module1_q13",
      options: [
        "A) participants who completed over 75% of the reports enjoyed a smaller increase in total well-being than did those who completed over 25% of the reports.",
        "B) regardless of report completion percentage, participants received higher overall total well-being scores following visits to blue spaces rather than to green spaces.",
        "C) only participants who completed at least 50% of the reports received higher overall total well-being scores following visits to blue spaces rather than to green spaces.",
        "D) the largest mean difference in total well-being was found when comparing the effect of visiting in blue spaces vs. anywhere else for participants who completed over 25% of the reports."
      ],
      correctAnswer: "B"
    },
    {
      id: 12,
      question: "Despite being rare in other parts of the world, unincorporated areas are widespread in the United States and Canada. These localities are often remote or small communities that do not have a regional government body regulating them. While unincorporated regions give their residents an opportunity to live with more independence, they also come with drawbacks. A lack of a municipal government means that emergency services such as police, ambulance, and fire brigades are not easily accessible and can take longer to arrive. This suggests that unincorporated areas _____\n\nWhich choice most logically completes the text?",
      options: [
        "A) are quite rare because most people believe government regulation is a necessity.",
        "B) are communities only found in larger countries such as the United States and Canada.",
        "C) commonly have their own independent fire brigades who serve on a volunteer basis.",
        "D) may have longer response times for emergency services than do areas with municipal governments."
      ],
      correctAnswer: "D"
    },
    {
      id: 13,
      question: "Atsushi Kurabayashi and his colleagues have recently published evidence that suggests that Madagascar is a wellspring of horizontal gene transfer in multicellular animals. Horizontal gene transfer refers to the transfer of an entire gene from one species to another, in contrast to the more common vertical inheritance of genes from parents to offspring. Horizontal gene transfer was thought to be extremely rare in multicellular animals, but Kurabayashi's team has discovered a snake gene, BovB, which has transferred to 91% of Madagascar's frog species. Further research into the gene indicates that over fifty frog species now have the BovB gene worldwide, which has led the team to conclude that _____\n\nWhich choice most logically completes the text?",
      options: [
        "A) the frequency of a phenomenon in one geographical region may have had an impact on the occurrence of that phenomenon elsewhere in the world.",
        "B) horizontal gene transfer between species is as commonplace as vertical gene inheritance from parent to offspring.",
        "C) the snake gene BovB is the only published example of horizontal gene transfer in multicellular animals.",
        "D) the similar genetic makeup of snakes and frogs has allowed the gene to transfer more easily than it otherwise would have."
      ],
      correctAnswer: "A"
    },
    {
      id: 14,
      question: "Writer and professor Ned Blackhawk _____ up in the city of Detroit, attending public schools. As a member of the Te-Moak Tribe of the Western Shoshone, he has said that he learned very little in school about the history of Native peoples despite the fact that their interactions with Europeans played a major role in the history of his city and state. He believes that his work and writings, along with those of others, will help educators to remedy this erasure.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) grew", "B) growing", "C) having grown", "D) to grow"],
      correctAnswer: "A"
    },
    {
      id: 15,
      question: "The axolotl, a salamander native to Mexico, is a notable example of an animal that exhibits neoteny, meaning that _____ tadpole-like larval features, such as gills, rather than undergoing metamorphosis into an adult form as do other amphibian species.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) it retains", "B) they retain", "C) either retains", "D) we retain"],
      correctAnswer: "A"
    },
    {
      id: 16,
      question: "Jai alai—Basque for 'merry festival'—is sometimes called 'the fastest sport in the world.' The game _____ played with an oversized basket-like glove (the cesta) and a rubber ball (the pelota) that can travel at speeds of over 185 miles per hour.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) will be", "B) would be", "C) was", "D) is"],
      correctAnswer: "D"
    },
    {
      id: 17,
      question: "In her series precarios, Chilean artist Cecilia Vicuña creates works made _____ fragile (or 'precarious') materials. The first such work, Casa Espiral (1966), consisted of a spiral drawn in sand and then encircled with debris, such as feathers and sticks. Vicuña let the tide wash her piece away but proceeded to recreate the work many times in the same spot.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) from", "B) from,", "C) from:", "D) from;"],
      correctAnswer: "A"
    },
    {
      id: 18,
      question: "Tereré, the national drink of Paraguay, is made by infusing cold water and medicinal herbs called pohá _____ is drunk throughout South America, with regional variants of this drink existing in both Argentina and Brazil.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) ñaná, it", "B) ñaná. It", "C) ñaná it", "D) ñaná but it"],
      correctAnswer: "B"
    },
    {
      id: 19,
      question: "The dogbane tiger moth (Cycnia tenera) consumes poisonous chemicals and emits ultrasonic sounds that serve as warnings of its toxicity to echolocating bats. Pyralid moths, which are nontoxic, _____ these signals to avoid predation.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) imitate", "B) imitates", "C) has imitated", "D) is imitating"],
      correctAnswer: "A"
    },
    {
      id: 20,
      question: "Artemisinin is extracted from sweet wormwood, an herb used in Chinese traditional medicine, and has been used for years to successfully treat malaria. The details about the discovery of the drug's use as a malaria treatment were kept secret by the Chinese government for many _____ the project that led to the development of artemisinin was headed by Chinese chemist Tu Youyou, whose work was finally recognized in the early 2010s.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) decades, though,",
        "B) decades, though",
        "C) decades; though,",
        "D) decades, though;"
      ],
      correctAnswer: "D"
    },
    {
      id: 21,
      question: "Artist and activist Kudzanai Chiurai uses mixed media such as paintings, drawings, videos, and photographs to address social, political, and cultural issues in his native Zimbabwe. These works often feature themes of masculinity and authority. _____ Chiurai's photograph 'The Black President' shows a young Black man wearing a jacket adorned with badges and medals similar to those worn by national leaders.\n\nWhich choice completes the text with the most logical transition?",
      options: ["A) For example,", "B) Nevertheless,", "C) However,", "D) Similarly,"],
      correctAnswer: "A"
    },
    {
      id: 22,
      question: "Ludwig van Beethoven's Grosse Fuge is today considered one of his greatest pieces. At the time of its first performance, _____ critics described the Grosse Fuge as 'inaccessible,' 'problematic,' and 'a confusion of Babel.'\n\nWhich choice completes the text with the most logical transition?",
      options: ["A) therefore,", "B) moreover,", "C) however,", "D) for example,"],
      correctAnswer: "C"
    },
    {
      id: 23,
      question: "The Blue Ridge Parkway is the longest linear park in the US. It is free to visit, features many vistas of mountains and pastoral landscapes, and is within a day's drive of many large cities. _____ the Blue Ridge Parkway is the most visited property of the National Park System.\n\nWhich choice completes the text with the most logical transition?",
      options: ["A) However,", "B) Specifically,", "C) Nonetheless,", "D) Not surprisingly,"],
      correctAnswer: "D"
    },
    {
      id: 24,
      question: "Bureau of Reclamation engineers estimated that the concrete for the Hoover Dam, if poured all at once, would take 125 years to cool. _____ the dam was instead constructed of individually poured columns that were cooled with river water, shortening the curing time significantly.\n\nWhich choice completes the text with the most logical transition?",
      options: ["A) However,", "B) Therefore,", "C) For example,", "D) Similarly,"],
      correctAnswer: "B"
    },
    {
      id: 25,
      question: "While researching a topic, a student has taken the following notes:\n• The Aquarius Reef Base is an underwater habitat located on the ocean floor 20 meters below the surface.\n• It is situated 5.4 miles off Key Largo in the Florida Keys National Marine Sanctuary.\n• The scientists who use the Aquarius Reef Base most often are marine biologists.\n• They have access to study the animals, aquatic plants, and coral reefs that make up the ecosystem around the base.\n• The base contains a laboratory with equipment and computers for research.\n• Scientists at the base can dive for up to nine hours at a time, which gives them time to make extensive observations.\n\nThe student wants to emphasize the purpose of the Aquarius Reef Base. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: [
        "A) The Aquarius Reef Base is located in the Florida Keys National Marine Sanctuary and is used by marine biologists.",
        "B) Scientists at the base are 20 meters below the surface and can dive for up to nine hours at a time.",
        "C) The Aquarius Reef Base allows scientists, such as marine biologists, to access the surrounding marine ecosystem for long periods and conduct research.",
        "D) An underwater habitat provides marine biologists with the opportunity to make extensive observations."
      ],
      correctAnswer: "C"
    },
    {
      id: 26,
      question: "While researching a topic, a student has taken the following notes:\n• Dominique Morisseau is an award-winning American playwright who grew up in Detroit, Michigan.\n• She wrote a three-play cycle called The Detroit Project, which includes Detroit '67, Paradise Blue, and Skeleton Crew.\n• Detroit '67 is about a brother and sister in Detroit during the summer of 1967, a time of instability and chaos.\n• Paradise Blue takes place in Detroit in 1949 and follows a jazz community.\n• Skeleton Crew is set in a Detroit automotive stamping plant during the recession of 2008.\n\nThe student wants to describe The Detroit Project to an audience unfamiliar with Dominique Morisseau. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: [
        "A) American playwright Dominique Morisseau grew up in Detroit, Michigan, and has won awards.",
        "B) Award-winning American playwright Dominique Morisseau wrote the three-play cycle The Detroit Project, which explores different time periods and settings in Detroit.",
        "C) Dominique Morisseau's The Detroit Project includes Skeleton Crew, a play set in a Detroit automotive stamping plant during the recession of 2008.",
        "D) While all three plays of The Detroit Project take place in Detroit, they take place during different times: 1967, 1949, and 2008."
      ],
      correctAnswer: "B"
    },
    {
      id: 27,
      question: "While researching a topic, a student has taken the following notes:\n• William Gibson is a speculative fiction writer.\n• He is a pioneer of cyberpunk, a subgenre of science fiction that juxtaposes technological achievements with dystopian society.\n• His debut novel Neuromancer, published in 1984, is considered one of the best-known examples of cyberpunk.\n• Neuromancer is about hacker Henry Case, who unwittingly works for an artificial intelligence.\n\nThe student wants to introduce William Gibson and his novel Neuromancer to a new audience. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: [
        "A) Speculative fiction writer William Gibson's debut novel was published in 1984.",
        "B) William Gibson's Neuromancer (1984) is considered one of the best-known examples of cyberpunk, a subgenre of science fiction.",
        "C) A pioneer of cyberpunk, speculative fiction writer William Gibson authored Neuromancer, a novel about hacker Henry Case, who unwittingly works for an artificial intelligence.",
        "D) Neuromancer, a novel about hacker Henry Case, is considered one of the best-known examples of cyberpunk."
      ],
      correctAnswer: "C"
    }
  ],

  // Module 2 - Easier (27 Questions)
  module2Easy: [
    {
      id: 1,
      question: "The textile industry, which expanded rapidly during the Industrial Revolution and is often called 'the first great industry,' benefited not just from inventions but from improvements to existing inventions. For example, the automation of the power loom in 1841 is _____ by many historians as a crucial development in the industry's history.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      options: ["A) cited", "B) created", "C) rejected", "D) questioned"],
      correctAnswer: "A"
    },
    {
      id: 2,
      question: "According to physicists, an individual observing a wave will experience the Doppler effect—an apparent change in frequency—as the observer moves farther or closer to the wave's source. A _____ observer, conversely, will notice that the wave maintains a consistent frequency.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      options: ["A) stationary", "B) concerned", "C) hopeful", "D) casual"],
      correctAnswer: "A"
    },
    {
      id: 3,
      question: "When Native American artist Emmi Whitehorse unveiled her oil painting Movement in 1989, art critics were quick to _____ the thought-provoking abstractions present in the painting; this acknowledgment was consistent with previous praise earned by Whitehorse for her mastery of using light and color to affect one's perception of the environment.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      options: ["A) misjudge", "B) recognize", "C) guarantee", "D) deny"],
      correctAnswer: "B"
    },
    {
      id: 4,
      question: "Like other European countries, Estonia uses national festivals to celebrate the arts; dancers and gymnasts exhibit their athletic _____ at the Estonian Dance Festival, while vocalists and instrumentalists demonstrate their musical mastery at the Estonian Song Festival.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      options: ["A) imitations", "B) prowess", "C) beliefs", "D) inventions"],
      correctAnswer: "B"
    },
    {
      id: 5,
      question: "For a 1921 exhibit, cartoonist and illustrator Rose O'Neill _____ a limestone sculpture based on the style of French sculptor Auguste Rodin, who focused on naturalism and individuality. O'Neill carved the limestone into the shape of a tree embracing a human being, resulting in a pristine example of what O'Neill called 'form emerging from the formless.'\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      options: ["A) refurbished", "B) authorized", "C) crafted", "D) disputed"],
      correctAnswer: "C"
    },
    {
      id: 6,
      question: "Science historian Debora Hammond published a 2003 novel that focused on how seemingly disparate fields of study can be _____ when looked at through the lens of general systems theory. Hammond explored how biology, ecology, sociology, psychology, and technology can be integrated to form a more holistic approach to science, and when so integrated, can encourage a more involved general public.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      options: ["A) counteracted", "B) challenged", "C) memorized", "D) combined"],
      correctAnswer: "D"
    },
    {
      id: 7,
      question: "The following text is adapted from Sir Walter Scott's 1819 novel The Bride of Lammermoor. The narrator, Mr. Pattieson, is watching as his friend Tinto looks through his art portfolio.\n\nTinto produced his sketch with an air of mysterious triumph, and gazed on it as a fond parent looks upon a hopeful child, while he anticipates the future figure he is to make in the world, and the height to which he will raise the honour of his family. He held it at arm's length from me—he held it closer—he placed it upon the top of a chest of drawers—closed the lower shutters of the casement, to adjust a downward and favourable light.\n\nWhich choices best describes the overall structure of the text?",
      options: [
        "A) It describes the emotions of an individual and then details how the individual examines one of his works.",
        "B) It describes the details of a drawing and then foreshadows a potential issue with the drawing.",
        "C) It explains mysterious nature of an artist and then sheds light upon that mystery.",
        "D) It criticizes a character's performance as a father but then praises that character as an artist."
      ],
      correctAnswer: "A"
    },
    {
      id: 8,
      question: "Naomi Ginsberg, mother of American poet Allen Ginsberg, is said to be the inspiration for his most popular pieces of poetry. Her struggle with mental illness and time spent in mental health facilities are referenced directly in Ginsberg's works. In addition to this, the author drew on the memories of his mother and his experiences with her while she was alive.\n\nWhich choice best states the main purpose of the text?",
      options: [
        "A) To argue that Ginsberg's mother was the biggest reason for his success",
        "B) To discuss the impact Ginsberg's mother had on his work",
        "C) To assert that Ginsberg used his mother's struggles to cope with his own",
        "D) To explain why Ginsberg frequently mentions mental institutions in his poems"
      ],
      correctAnswer: "B"
    },
    {
      id: 9,
      question: "Text 1: Stonehenge is a prehistoric monument located in Southwest England and composed of two concentric rings of vertical standing stones. The structure is believed to have been constructed between 3000 BCE and 2000 BCE, but its purpose has been widely debated. One hypothesis is that the stones were arranged to represent a calendar and thus depict 365 days grouped into 12 months of 30 days each.\n\nText 2: Archaeoastronomists Juan Antonio Belmonte and Giulio Magli challenge the idea that Stonehenge was used as a calendar to the degree that has typically been claimed. They argue that while the stones do exhibit some alignment to the summer solstice sunrise and the winter solstice sunset, there are no other similarities to the calendar. They go on to assert that there is no way to extract from the stones the number 12, which would be essential for grouping the days of the year into months.\n\nBased on the texts, what would Belmonte and Magli (Text 2) most likely say about the hypothesis discussed in Text 1?",
      options: [
        "A) It is consistent with the findings of their research as well as with the current understanding of similar ancient structures.",
        "B) It is wholly inaccurate because there is no evidence to support any part of it.",
        "C) It is reasonable given that it has been demonstrated that the stones are arranged to be relevant to the summer and winter solstices.",
        "D) It has some partial basis but is largely not supported by any rigorous investigation or evidence."
      ],
      correctAnswer: "D"
    },
    {
      id: 10,
      question: "The following text is adapted from Abby Meguire Roach's 1905 short story 'A Working Basis.' The text describes a relationship between a wife and her husband.\n\nWhy she married him her friends wondered at the time. Those she made later wondered more. Before long she caught herself wondering. Yes, she had seen it beforehand, more or less. But she had seen other things as well: he had developed unevenly, unexpectedly, if logically. There had been common tastes—which grew obsolete or secondary. As the momentum of what she believed and hoped of him ran down with them both, he crystallized into the man he was, and no doubt virtually had always been.\n\nWhich choice best describes the main idea of the text?",
      options: [
        "A) A wife's friends have convinced her that her husband is not the person he claims to be.",
        "B) A wife's initial doubts about her husband are alleviated as she gets to know him better.",
        "C) Over the course of their marriage, a wife's aspirations for her husband's development are not realized.",
        "D) Unlike her friends, a wife is extremely critical of her husband's faults because of his unfulfilled potential."
      ],
      correctAnswer: "C"
    },
    {
      id: 11,
      question: "'And Angels Came—' is a 1905 short story by Anne O'Hagan. In the story, the author presents Millicent Harned, the central character, as having influence over others using only her facial expressions:\n\nWhich quotation from 'And Angels Came—' most effectively illustrates the claim?",
      options: [
        "A) 'Some of those who admitted Millicent Harned's charm declared that it lay in her voice.'",
        "B) 'Millicent smiled in vague sympathy with their laughter and joined at random in the talk.'",
        "C) 'Millicent was hurt by the unbroken faith in her, by the unquestioning belief she could not share.'",
        "D) 'But Millicent turned to them with such gentle command in her gaze that they could offer no protest.'"
      ],
      correctAnswer: "D"
    },
    {
      id: 12,
      question: "'The Yearly Tribute' is a 1904 short story by Rosina Hubley Emmet. In the story, which presents the journey of two men, Pilchard and Swan, traveling to Mexico for work, Emmet describes the appearance of one of the men using an element from nature, writing,\n\nWhich quotation from 'The Yearly Tribute' most effectively illustrates the claim?",
      options: [
        "A) 'The black Mexican night was falling and a few stars blossomed in the sky, but there was no abatement in the heat which had held since sunrise; rather, indeed, the thickness of the atmosphere seemed intensified.'",
        "B) 'A full moon swung above him, huge and tropical and red, seeming to garnish the black depths that lay behind it and that great black mouth that opened immeasurably into the west.'",
        "C) 'In that noonday light which burned and burned and made no impression on the moisture, Swan's face was wilted like a white flower which is dead and turning yellow.'",
        "D) 'Some young maple leaves had made a lovely pattern on the blue northern sky outside the uncurtained windows of the lecture-hall.'"
      ],
      correctAnswer: "C"
    },
    {
      id: 13,
      question: "An economics student was interested in studying the effect of socioeconomic status of students on their participation in extracurricular activities at school. To do so, the student surveyed 250 students at his public school and recorded their socioeconomic statuses and extracurricular activities. The results showed that while high socioeconomic students were most likely to participate in sports (52), low socioeconomic students participated in sports (33), vocational clubs (36), performing arts (22), academic clubs (20), student govt (10), and community service (9).\n\nThe student found that although students with a high socioeconomic status were most likely to participate in sports, students with a low socioeconomic status were most likely to participate in _____\n\nWhich choice most effectively uses data from the table to complete the example?",
      figure: "english_module2_easy_q13",
      options: [
        "A) the performing arts or music.",
        "B) vocational clubs.",
        "C) academic and honors clubs.",
        "D) service or community clubs."
      ],
      correctAnswer: "B"
    },
    {
      id: 14,
      question: "The Vinegar Saint is a 1919 novel by Hughes Mearns. In the novel, a professor named Allen Blynn explores the concept of love, musing to his companion that romantic feelings do not always guarantee successful union between parties:\n\nWhich quotation from The Vinegar Saint most effectively illustrates the claim?",
      options: [
        "A) 'To the Elizabethan, love was an infection, a kind of pestilence, like the plague, which one caught from another. Once you have it you are ill.'",
        "B) 'I didn't want to lecture to you; but the theory is rather complicated and you have hit upon a fine illustration. How far can love carry?'",
        "C) 'A man may behave exactly like the Duke, have all the symptoms, and not guess for the longest while what really is the matter with him.'",
        "D) 'And there are enough bad marriages to make me believe that lovers often make a wrong diagnosis. It's still a mystery to me.'"
      ],
      correctAnswer: "D"
    },
    {
      id: 15,
      question: "In the United States, the risk of cancer among firefighters is an escalating worry due to their exposure to carcinogens in the workplace. To help combat this, the National Firefighter Registry was created for individuals to voluntarily submit their health, work, and lifestyle information in order to assess risk factors and rates of cancer among firefighters. While there are registries across the country to record data on cancer patients, there was not any that took into account the patient's occupation. The formation of this registry allows for information to be shared in one central place that specifically caters to firefighters. As a result, _____\n\nWhich choice most logically completes the text?",
      options: [
        "A) the United States has taken on a leadership role in collecting international firefighter lifestyle information.",
        "B) doctors at hospitals have started to use the registry to better examine possible causes of cancer.",
        "C) those looking to assess risk factors that affect firefighters may now have more tools to do so.",
        "D) better records of the types of carcinogens used in firefighting equipment will be kept."
      ],
      correctAnswer: "C"
    },
    {
      id: 16,
      question: "Pet ownership is believed to have a positive impact on mental health. To investigate this hypothesis, psychologists Dasha Grajfoner, Guek Nee Ke, and Rachel Mei Ming Wong undertook a study which found that those who owned pets reported more instances of positive emotions, a higher belief in their ability to cope with stressful situations, and greater overall mental well-being than those who did not own pets. While the team of psychologists noted that more research is needed to expand the scope of the study, the findings of the study indicate that _____\n\nWhich choice most logically completes the text?",
      options: [
        "A) the perceived connection between pet ownership and improved mental health may have some merit.",
        "B) study participants who reported instances of negative emotions may have done so for reasons other than the lack of a pet.",
        "C) there is a clear and evident link between pet ownership and excellent mental health.",
        "D) there may be better methods to cope with stressful situations than pet ownership."
      ],
      correctAnswer: "A"
    },
    {
      id: 17,
      question: "First constructed in 1927, light-emitting diodes (LEDs) are able to convert electrical energy into light much more efficiently than are incandescent bulbs. Early LEDs were limited by an inability to emit certain colors, most notably blue, but current models _____ the full spectrum of visible light.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) will produce", "B) produce", "C) produced", "D) had produced"],
      correctAnswer: "B"
    },
    {
      id: 18,
      question: "Numerous studies have shown that people are experts at facial recognition. This ability develops early; babies can easily recognize their mothers when they see them. Researcher Stefanie Peykarjou wanted to know more about this ability. If babies were shown pictures of different faces, _____ Peykarjou was determined to find out.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) would they be able to recognize their mothers.",
        "B) they would be able to recognize their mothers.",
        "C) would they be able to recognize their mothers?",
        "D) they would be able to recognize their mothers?"
      ],
      correctAnswer: "C"
    },
    {
      id: 19,
      question: "American publicist Eleanor Lambert was the founder of the Met Gala and New York Fashion Week. Today, these are two of the most prestigious fashion events in the world, and _____ combined impact on New York City's economy has been estimated to be in the hundreds of millions of dollars.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) its", "B) it's", "C) their", "D) they're"],
      correctAnswer: "C"
    },
    {
      id: 20,
      question: "Haiku, a form of traditional Japanese poetry, is commonly conceived to be defined by a strict pattern of syllables. However, there has always been some flexibility in its syllable structure, and many contemporary haiku writers focus instead on writing poems that convey visual imagery in a brief manner and _____ a reference to the changing seasons.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) contain", "B) contains", "C) has contained", "D) is containing"],
      correctAnswer: "A"
    },
    {
      id: 21,
      question: "Amyotrophic lateral sclerosis (ALS) is a neurodegenerative disease in which spinal cord and brain cells break down over time. Scientists injected spinal cord fluid from humans with ALS into mice. The _____ were injected with spinal cord fluid exhibited weakness, while the mice that were injected with a saline solution did not exhibit any decline in strength.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) mice", "B) mice, that", "C) mice that", "D) mice,"],
      correctAnswer: "C"
    },
    {
      id: 22,
      question: "The Seven Years' War, involving Great Britain, France, and their respective allies, included battles in Europe, India, and North America and _____ called the first truly global war.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) were", "B) are", "C) have been", "D) has been"],
      correctAnswer: "D"
    },
    {
      id: 23,
      question: "A volcanic eruption occurs when an underground magma chamber becomes overfilled and the magma finds its way to the surface. Volcanologists often look for a bulge in the side of a volcano as an indicator that an eruption _____ in the near future.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) had occurred", "B) will occur", "C) has occurred", "D) occurs"],
      correctAnswer: "B"
    },
    {
      id: 24,
      question: "Most countries in the world have local municipal governments presiding over all or almost all of their areas. _____ the United States and Canada are distinguished from other countries by having many unincorporated areas, which are not governed by a local municipal government.\n\nWhich choice completes the text with the most logical transition?",
      options: ["A) Similarly,", "B) To these ends,", "C) However,", "D) For example,"],
      correctAnswer: "C"
    },
    {
      id: 25,
      question: "Conceptualism, also known as conceptual art, is a movement focused on the concept or idea of the art over the actual technique, appearance, or materials used to create the art. One example of a conceptual artist is Teresa Margolles, a photographer and videographer from Mexico who focuses on the extended social causes and effects of death. _____ Margolles explores the impact of a death on a person's loved ones.\n\nWhich choice completes the text with the most logical transition?",
      options: ["A) In addition,", "B) Subsequently,", "C) On the other hand,", "D) Still,"],
      correctAnswer: "A"
    },
    {
      id: 26,
      question: "A town in northern South Australia, Coober Pedy, is known as the 'opal capital of the world' due to the large quantity of opals that are mined in the area. The town's desert environment experiences harsh summer temperatures. _____ many of its residents live in 'dugouts,' homes that are underground or bored into a hillside.\n\nWhich choice completes the text with the most logical transition?",
      options: ["A) Next,", "B) Still,", "C) At the same time,", "D) As a result,"],
      correctAnswer: "D"
    },
    {
      id: 27,
      question: "While researching a topic, a student has taken the following notes:\n• American architect Frank Lloyd Wright used the word 'Usonia' to refer to the United States.\n• He also used the word to describe his vision of the landscape and the architecture of the country.\n• The Herbert and Katherine Jacobs First House built in 1937 is considered the first Usonian house.\n• Usonian houses are characterized by their small size, minimal storage space, and openness to the outside.\n• In the 1950s, Frank Lloyd Wright designed multiple homes for the Usonia Historic District, a planned community in Pleasantville, New York.\n• Frank Lloyd Wright designed a Usonian building for Florida Southern College, but the design was not constructed until 2013.\n\nThe student wants to provide multiple examples of Usonian buildings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: [
        "A) Architect Frank Lloyd Wright used the word 'Usonia' to describe his vision of the landscape and the architecture of the US.",
        "B) Usonian buildings include the Herbert and Katherine Jacobs First House, the homes in the Usonia Historic District, and a building at Florida Southern College.",
        "C) The first Usonian house was built in 1937.",
        "D) Usonian buildings were built in 1937, the 1950s, and 2013."
      ],
      correctAnswer: "B"
    }
  ],

  // Module 2 - Harder (27 Questions)
  module2Hard: [
    {
      id: 1,
      question: "In studying the ability of proflavin to cause mutations in the gene rIIB, Francis Crick and colleagues found that, while the insertion of a single nucleotide would render the gene inert, the addition of three base pairs of nucleotides would allow the gene to remain _____. This research helped demonstrate that the genetic code follows a set sequence.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      options: ["A) operational", "B) elusive", "C) unviable", "D) inimitable"],
      correctAnswer: "A"
    },
    {
      id: 2,
      question: "A groundbreaking study by George Burwood, Alfred Nuttall, Pierre Hakizimana, and Anders Fridberger was motivated by their realization that there are many experiments conducted on the ear that assumed that each hair cell reacted individually depending on the frequency, but there is a _____ experiments that examine circumstances causing hair cells to react simultaneously, which the team demonstrated does occur when the hair cells in the cochlea, or inner ear, are exposed to a low-frequency sound.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      options: ["A) hindrance to", "B) dispute about", "C) dearth of", "D) prevalence of"],
      correctAnswer: "C"
    },
    {
      id: 3,
      question: "Whether the legacy of Chinese restaurateur Kenneth Lo lies more as a food writer or culinary instructor, his career was shaped by a desire to share his knowledge and love of Chinese cuisine with the people of London, where he spent most of his life. The full breadth of his contributions cannot be _____ without examining the influence of his cookbooks, restaurants, and cooking school on the culinary culture of twentieth-century England.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      options: ["A) contested", "B) reviled", "C) amended", "D) discerned"],
      correctAnswer: "D"
    },
    {
      id: 4,
      question: "Science historian Debora Hammond published a 2003 novel that focused on how seemingly disparate fields of study can be _____ when looked at through the lens of general systems theory. Hammond explored how biology, ecology, sociology, psychology, and technology can be integrated to form a more holistic approach to science, and when so integrated, can encourage a more involved general public.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      options: ["A) counteracted", "B) challenged", "C) memorized", "D) combined"],
      correctAnswer: "D"
    },
    {
      id: 5,
      question: "Prior to the 1970s, testing for mutagens was a costly and lengthy process that involved testing animals for the carcinogenic (cancer-causing) substances that alter genetic material and as a result raise the number of mutations above the normal level. However, American biochemist Bruce Ames developed the Ames test with the hope of simplifying the process by which scientists test materials for these hazardous agents. With the Ames test, results can be obtained more quickly and the cost of testing materials has decreased drastically.\n\nWhich choice best states the main purpose of the text?",
      options: [
        "A) To present a new solution to the issue of carcinogens",
        "B) To introduce the test developed to facilitate a process",
        "C) To demonstrate how the use of animal testing was present in the 1970s",
        "D) To call attention to the substances that can cause cancer"
      ],
      correctAnswer: "B"
    },
    {
      id: 6,
      question: "The following text is adapted from John Gould Fletcher's 1918 poem 'Masonubu—Early.'\n\nShe was a dream of moons, of fluttering handkerchiefs,\nOf flying leaves, of parasols,\nA riddle made to break my heart;\nThe lightest impulse\nTo her was more dear than the deep-toned temple bell.\nShe fluttered to my sword-hilt an instant,\nAnd then flew away;\nBut who will spend all day chasing a butterfly?\n\nWhich choice best states the main purpose of the text?",
      options: [
        "A) To contrast a chance encounter with a beautiful butterfly with the realities of war",
        "B) To criticize those who would distract an individual serving their country in the line of duty",
        "C) To discuss the wistful feelings that an individual has for an ethereal lover who has left him",
        "D) To demonstrate that a soldier has grown weary of his code of ethics after losing the love of a delicate woman"
      ],
      correctAnswer: "C"
    },
    {
      id: 7,
      question: "The following text is from Juan Eugenio Hartzenbusch's 1850 short story 'Mariquita the Bald.' A young woman named Maria agreed to have her head shaved by the mayoress in exchange for a sum of money that Maria hopes to use to restore her father's vision.\n\nThe mayor and mayoress went out of the room, and Maria, as soon as she found herself alone, went to look at herself in a mirror that hung there; and when she saw herself bald she lost the patience she had had until then, and groaned with rage and struck herself, and even tried to wrench off her ears, which appeared to her now outrageously large, although they were not so in reality. She stamped upon her hair and cursed herself for having ever consented to lose it, without remembering her father, and just as if she had no father at all. But as it is a quality of human nature to accept what cannot be altered, poor angry Maria calmed down little by little, and she picked up the hair from the ground and bound it together and braided it into great ropes, not without kissing it and lamenting over it many times.\n\nWhich choice best states the function of the underlined sentence ('She stamped upon her hair...') in the overall structure of the text?",
      options: [
        "A) To clarify how her anger towards her father is affecting Maria's memory",
        "B) To describe the reaction Maria has to a decision she made",
        "C) To express the regret Maria feels after seeing herself without hair",
        "D) To explain the dangers of consenting to lose one's hair"
      ],
      correctAnswer: "B"
    },
    {
      id: 8,
      question: "The following text is adapted from Mary Tracy Earle's 1907 short story 'The Glass Door.'\n\nAs the first year of married life goes, Charlotte's first year was fairly successful. She knew Blake's faults already, and had made up her mind to them, and if there was a frank indifference in his quiet languor, she had made up her mind to that, too. He was never unkind, and there were times when some fresh evidence of her devotion to him would touch him into an appreciation that was almost responsive. And there were other times when she would find him looking at her with an expression which any other observer might have classed as pity, but which she counted as tenderness. On the whole, it seemed to her that time was bringing them together, as she had counted that it would, and with this hope her face lost its sharp outlines.\n\nWhich choice best describes the overall structure of the text?",
      options: [
        "A) It describes a series of concessions made by a woman but then explains the woman's optimism regarding the future of her marriage.",
        "B) It details the perceived shortcomings of an individual but then disregards those shortcomings in the wake of a tragedy.",
        "C) It explains the common conflicts that can arise within a marriage but then emphasizes that Charlotte and Blake were free of such conflicts.",
        "D) It notes that distance between partners is to be expected at the start of the marriage but then clarifies that closeness will inevitably develop over time."
      ],
      correctAnswer: "A"
    },
    {
      id: 9,
      question: "Text 1: The pragmatic benefits of bilingualism can be observed in everyday life, so it has historically been presumed that there are cognitive advantages as well. However, when linguists Emanuel Bylund, Jan Antfolk, and colleagues performed a meta-analysis of 130 studies, they discovered that there are potential cognitive disadvantages to bilingualism. Specifically, those who speak more than one language can exhibit a smaller lexical vocabulary as well as slower word retrieval than do those who speak only one language.\n\nText 2: While it is true that many studies indicate that bilingualism comes with cognitive costs, there are additional factors that must be considered. First, if both languages were learned from birth, the negative effects are significantly less than when the second language is learned later in life. Second, if the sounds and words of the two languages are sufficiently similar, the speaker will exhibit comparable cognitive abilities to those of a monolingual speaker.\n\nBased on the texts, how would the author of Text 2 respond to the conclusion of Bylund, Antfolk, and colleagues discussed in Text 1?",
      options: [
        "A) By arguing that it is based on a misunderstanding of how people learn languages from birth",
        "B) By broadly conceding to it but taking issue with the particular methodology of the meta-analysis",
        "C) By asserting that it oversimplifies a set of conditions that in reality is more complicated",
        "D) By conceding that it is correct about lexical vocabulary while rejecting the claim about slower word retrieval"
      ],
      correctAnswer: "C"
    },
    {
      id: 10,
      question: "The following text is adapted from Beverley Nichols's introduction to her 1934 collection A Book of Old Ballads.\n\nBut though the author or authors of most of the ballads may be lost in the lists of time, we know a good deal about the minstrels who sang them. And it is a happy thought that those minstrels were such considerable persons, so honorably treated, so generously esteemed. The modern mind, accustomed to think of the singer of popular songs either as a highly paid music-hall artist, at the top of the ladder, or a shivering street-singer, at the bottom of it, may find it difficult to conceive of a minstrel as a sort of ambassador of song, moving from court to court with dignity and ceremony.\n\nWhich choice best describes the main idea of the text?",
      options: [
        "A) Minstrels were generally happy people despite their constant travels.",
        "B) Modern people cannot fully appreciate the unparalleled artistry of minstrels.",
        "C) Minstrels who sang ballads are more famous than authors who wrote ballads.",
        "D) Those who sang ballads were once highly respected as official messengers of song."
      ],
      correctAnswer: "D"
    },
    {
      id: 11,
      question: "'A Chinese Girl Graduate' is an 1896 short story by R.K. Douglas. In the story, the narrator describes Jasmine, the daughter of an army colonel, whose experiences at home and at school are strikingly disparate:\n\nWhich quotation from 'A Chinese Girl Graduate' most effectively illustrates the claim?",
      options: [
        "A) 'No one troubled themselves about what she did, and she was allowed, as she grew up, to follow her own pursuits and to give rein to her fancies without let or hindrance.'",
        "B) 'If it had not been for the indifference with which she was treated in her home, the favour with which she was regarded abroad would have been most prejudicial to Jasmine; but any conceit which might have been engendered in the school-house was speedily counteracted when she got within the portals of the colonel's domain.'",
        "C) 'From her earliest childhood one of her lonely amusements had been to dress as a boy, and so unchecked had the habit become that she gradually drifted into the character which she had chosen to assume.'",
        "D) 'These lads, by name Wei and Tu, had been her school-fellows, and were delighted at obtaining her promise to join them in their studies.'"
      ],
      correctAnswer: "B"
    },
    {
      id: 12,
      question: "Misophonia is characterized by having a strong negative reaction and/or emotion in response to common noises that usually do not bother other people. A team of researchers wanted to investigate the prevalence of misophonia in a sample population of 772 research participants. The participants were exposed to a variety of trigger sounds and asked to identify what they felt when hearing that sound. The graph shows that irritation was reported as follows: clock ticking (25%), baby crying (37%), slurping (47%), hiccups (25%), snoring (45%). The research team concluded that irritation was the most reported emotion across the five types of trigger sounds.\n\nWhich choice most effectively uses data from the graph to support the research team's conclusion?",
      figure: "english_module2_hard_q12",
      options: [
        "A) Participants had the highest percentage of no emotion towards clock ticking and hiccup sounds.",
        "B) Participants had the highest percentage of irritation towards sounds of a baby crying, slurping, and snoring.",
        "C) Participants had the highest percentage of distress towards the sounds of a baby crying compared to percentages of distress toward other trigger sounds.",
        "D) Participants had the lowest percentage of irritation towards hiccups compared to the percentages of irritation toward other trigger sounds."
      ],
      correctAnswer: "B"
    },
    {
      id: 13,
      question: "A Hoosier Holiday is a 1916 travel autobiography by Theodore Dreiser. In the biography, Dreiser indicates that professional obligations can cause a lapse in social engagement between friends, writing\n\nWhich quotation from Hoosier Holiday most effectively illustrates the claim?",
      options: [
        "A) 'I first met Franklin ten years before, when he was fresh from Indiana and working on the Sunday supplement of a now defunct New York paper.'",
        "B) 'Twentyeight years before, at the age of sixteen, I had left Warsaw, the last place in the state where I had resided.'",
        "C) 'The State University of Indiana at Bloomington, in the south central portion of the state, which had known me for one year when I was eighteen, had been free of my presence for twentysix years.'",
        "D) 'I had not seen Franklin, subsequent companion of this pilgrimage, in all of eight or nine months, his work calling him in one direction, mine in another.'"
      ],
      correctAnswer: "D"
    },
    {
      id: 14,
      question: "'Christening' is an 1892 poem by George Parsons Lathrop. In the poem, the speaker describes both a moment of calm and a moment of activity through the use of sound:\n\nWhich quotation from 'Christening' most effectively illustrates the claim?",
      options: [
        "A) 'To-day I saw a little, calm-eyed child,- / Where soft lights rippled and the shadows tarried / Within a church's shelter arched and aisled,-/ Peacefully wondering, to the altar carried.'",
        "B) 'White-robed and sweet, in semblance of a flower; / White as the daisies that adorned the chancel; / Borne like a gift, the young wife's natural dower, / Offered to God as her most precious hansel.'",
        "C) 'Then ceased the music, and the little one / Was silent, with the multitude assembled / Hearkening; and when of Father and of Son / He spoke, the pastor's deep voice broke and trembled.'",
        "D) 'But she, the child, knew not the solemn words, / And suddenly yielded to a troublous wailing, / As helpless as the cry of frightened birds / Whose untried wings for flight are unavailing.'"
      ],
      correctAnswer: "C"
    },
    {
      id: 15,
      question: "Pet ownership is believed to have a positive impact on mental health. To investigate this hypothesis, psychologists Dasha Grajfoner, Guek Nee Ke, and Rachel Mei Ming Wong undertook a study which found that those who owned pets reported more instances of positive emotions, a higher belief in their ability to cope with stressful situations, and greater overall mental well-being than those who did not own pets. While the team of psychologists noted that more research is needed to expand the scope of the study, the findings of the study indicate that _____\n\nWhich choice most logically completes the text?",
      options: [
        "A) the perceived connection between pet ownership and improved mental health may have some merit.",
        "B) study participants who reported instances of negative emotions may have done so for reasons other than the lack of a pet.",
        "C) there is a clear and evident link between pet ownership and excellent mental health.",
        "D) there may be better methods to cope with stressful situations than pet ownership."
      ],
      correctAnswer: "A"
    },
    {
      id: 16,
      question: "One difficulty when cultivating the Hoya plant for home use is the issue of ensuring that the plant has appropriate lighting in which to flower. To determine the optimal lighting for flowering, horticulturists must compare the growth of Hoya plants that are exposed to bright light to that of Hoya plants that are exposed to low light. Because horticulturists are unable to control the amount of light received by any particular area of the home, they therefore _____\n\nWhich choice most logically completes the text?",
      options: [
        "A) must investigate the levels of light received by each area of their homes before they can begin comparing the performances of their Hoya plants.",
        "B) struggle to find viable information regarding the behavior of Hoya plants exposed to low light.",
        "C) can only determine the performance of Hoya plants that receive low light rather than those that receive bright light.",
        "D) should select an alternative breed of houseplant to serve as a basis of comparison for the Hoya plant."
      ],
      correctAnswer: "A"
    },
    {
      id: 17,
      question: "Argentine writer Jorge Luis Borges is most widely known for his short stories with universal themes such as the structure of time and space, but one of the _____ was the 19th century poem Martín Fierro, which has been called 'the epic of Argentina.'\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) authors' early inspirations'",
        "B) authors early inspirations",
        "C) author's early inspirations",
        "D) author's early inspiration's"
      ],
      correctAnswer: "C"
    },
    {
      id: 18,
      question: "In Zimbabwean author Tsitsi Dangarembga's debut semi-autobiographical novel Nervous Conditions, she writes about the experiences of a young woman in Africa during the _____ the book follows the story of a girl named Tambu as she struggles with the effects of gender and colonialism on her life.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) 1960s,", "B) 1960s;", "C) 1960s", "D) 1960s but"],
      correctAnswer: "B"
    },
    {
      id: 19,
      question: "Despite receiving only 8.5 percent of the vote in the 1892 US presidential election, _____ These policies include features of American political life now taken for granted, such as the election of senators and the graduated income tax.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) James B. Weaver proposed many policies that would be adopted in future decades.",
        "B) future decades would see many of James B. Weaver's policies be adopted.",
        "C) the policies of James B. Weaver would be adopted in future decades.",
        "D) the popularity of James B. Weaver's policies would lead to their adoption in future decades."
      ],
      correctAnswer: "A"
    },
    {
      id: 20,
      question: "Bangladeshi scientist Firdausi Qadri has led many organizations promoting public health, such as the Centre for Vaccine Sciences at the International Centre for Diarrhoeal Disease and Research, Bangladesh, and the Institute for Developing Science and Health Initiatives, and she also completed research _____ immune responses of patients with H. pylori and typhoid fever.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: [
        "A) herself, studying",
        "B) herself studying",
        "C) herself; studying",
        "D) herself. Studying"
      ],
      correctAnswer: "A"
    },
    {
      id: 21,
      question: "Kintsugi, the Japanese art of repairing broken pottery with lacquer and _____ has been practiced in Japan since the late 15th century. This technique restores the object to its original form while also highlighting the beauty of the object's imperfections.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) gold;", "B) gold-", "C) gold", "D) gold,"],
      correctAnswer: "D"
    },
    {
      id: 22,
      question: "The fact that sodium chloride, or table salt, can be safely eaten despite the toxic nature of its constituent elements _____ due to each sodium atom donating an electron to a chlorine atom during the formation of the compound, making both less reactive.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) are", "B) is", "C) were", "D) have been"],
      correctAnswer: "B"
    },
    {
      id: 23,
      question: "A complete blood count is a series of tests that count certain cells and measure certain substances in a person's blood. These tests can be used to diagnose or monitor certain diseases or conditions. The information included in the results of a complete blood count is _____ counts of white blood cells, red blood cells, and platelets; the concentration of hemoglobin; and the volume of red blood cells in the sample.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      options: ["A) broad; the", "B) broad. The", "C) broad, the", "D) broad: the"],
      correctAnswer: "D"
    },
    {
      id: 24,
      question: "In 1949, engineer Frank Zamboni invented a machine that would allow one person to resurface an ice rink in 15 minutes, a job that previously took five people 90 minutes. He didn't expect anyone else to be interested in his invention; _____ figure skater Sonja Henie and the Chicago Blackhawks professional hockey team placed orders for the machine, leading Zamboni to found a manufacturing company to make more of the new machines.\n\nWhich choice completes the text with the most logical transition?",
      options: ["A) by contrast,", "B) nevertheless,", "C) therefore,", "D) furthermore,"],
      correctAnswer: "B"
    },
    {
      id: 25,
      question: "Mass spectrometers are often used in chemical analysis to determine the mass-to-charge ratio of charged ions. Ernest Lawrence developed the calutron, a mass spectrometer specifically designed to analyze uranium, during the Manhattan Project. After World War II, safer and more efficient analysis techniques were developed. _____ most of the calutrons were dismantled and destroyed.\n\nWhich choice completes the text with the most logical transition?",
      options: ["A) Specifically,", "B) Despite this fact,", "C) Subsequently,", "D) Nevertheless,"],
      correctAnswer: "C"
    },
    {
      id: 26,
      question: "While researching a topic, a student has taken the following notes:\n• Shirley Chisholm was an American politician who was born in Brooklyn, New York, in 1924.\n• Her first career was working in early childhood education.\n• She became involved in politics in the 1950s.\n• In 1968, she was elected to the US House of Representatives, making her the first Black woman in the US Congress.\n• Four years later, she announced her presidential bid.\n• Although unsuccessful in her bid, she was the first woman and first Black candidate to run for a major party's nomination for US President.\n\nThe student wants to emphasize the uniqueness of Chisholm's accomplishments. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: [
        "A) Shirley Chisholm was the first Black woman elected to US Congress and the first woman and first Black candidate to run for a major party's nomination for US President.",
        "B) Shirley Chisholm became a politician after working in early childhood education.",
        "C) In 1972, Shirley Chisholm announced her presidential bid.",
        "D) After serving in the US House of Representatives, Shirley Chisholm ran as a candidate for a major party's nomination for US President."
      ],
      correctAnswer: "A"
    },
    {
      id: 27,
      question: "While researching a topic, a student has taken the following notes:\n• Previous scientific research has suggested that dogs are able to detect when humans experience stress.\n• Scientists Clara Wilson, Kerry Campbell, Zachary Petzel, and Catherine Reeve recently studied whether dogs can distinguish odors of stressed humans from those of non-stressed humans.\n• Breath and sweat samples were taken from human subjects before and after these subjects completed stress-inducing tasks.\n• Dogs were presented with samples from before and after the humans completed stress-inducing tasks, as well as blank samples without stress or sweat.\n• On average, dogs were able to identify the stress samples 93.75% of the time.\n\nThe student wants to emphasize the goal of the recent research to an audience unfamiliar with the previous research. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: [
        "A) Previous research has suggested that dogs can detect when humans are experiencing stress; Wilson, Campbell, Petzel, and Reeve presented dogs with breath and sweat samples from humans before and after the humans did stress-inducing tasks, as well as blank samples.",
        "B) Building off of previous research that indicated that dogs are able to detect when humans experience stress, Wilson, Campbell, Petzel, and Reeve studied whether dogs can distinguish odors of stressed humans from those of non-stressed humans.",
        "C) Wilson, Campbell, Petzel, and Reeve showed that dogs can identify odor samples from humans who had completed stress-inducing tasks 93.75% of the time.",
        "D) Dogs presented with samples from before and after human subjects completed stress-inducing tasks, as well as blank samples, were able to identify the stress samples 93.75% of the time."
      ],
      correctAnswer: "B"
    }
  ]
};

/**
 * Evaluates student performance on Module 1 and returns the score and target Module 2.
 * @param {Object} userAnswers - Key-value map of question IDs to selected option letters (e.g., { 1: "D", 2: "C", ... }).
 * @returns {Object} Result object containing total correct count, percentage, and next module.
 */
function evaluateEnglishModule1(userAnswers) {
  let score = 0;
  englishQuizData.module1.forEach(q => {
    if (userAnswers[q.id] && userAnswers[q.id].toUpperCase() === q.correctAnswer) {
      score++;
    }
  });

  const routedModule = score >= englishQuizData.adaptiveThreshold 
    ? englishQuizData.module2Hard 
    : englishQuizData.module2Easy;

  return {
    module1Score: score,
    totalQuestions: englishQuizData.module1.length,
    assignedModuleType: score >= englishQuizData.adaptiveThreshold ? "Harder" : "Easier",
    nextModuleQuestions: routedModule
  };
}

// Export for Node environments if applicable
if (typeof module !== "undefined" && module.exports) {
  module.exports = { englishQuizData, evaluateEnglishModule1 };
}